from datetime import date, datetime, timedelta

from django.http.response import HttpResponseBadRequest
from rest_framework.generics import( 
    ListAPIView, 
    CreateAPIView,
    RetrieveAPIView
)

from rest_framework.response import Response
from rest_framework.views import APIView
from django.http import HttpResponse

from schemas.models import User, Item,  Purchase, Order
from .serializers import UserObjectSerializer

class AllUsersView(ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserObjectSerializer
    lookup_field = 'name__id'

class CreateUserView(CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserObjectSerializer
    lookup_field = 'name__id'

class GetUserView(RetrieveAPIView):
    def get(self, request, email):
        queryset = User.objects.filter(email=email)
        res = HttpResponse(queryset.values())
        return res

class GetRecommendationsView(RetrieveAPIView):
    def get(self, request, email):

        _user = User.objects.filter(email=email).values()
        if (len(_user) == 0):
            return HttpResponseBadRequest("Invalid user")
        user = _user[0]
        print(user)
        prefs = user['preferences'].split(",")
        for pref in prefs:
            print(pref)
        # recommendation
        """
        Look at purchase history and preferences

        Heuristics:
        1. recommend items in preferences (tags)
        2. weigh tags of items recently bought higher, and weigh higher priced items
        3. (not mvp), weigh items others bought higher as well
        4. (not mvp), weigh items bought on same weekday higher
        """

        past_purchases = Purchase.objects.filter(email=email).order_by('-purchase_date')[:10].values()
        category_weights = {}
        if len(past_purchases) == 0:
            # hardcode these weights...
            category_weights = {
                "fish": 100,
                "chicken": 200,
                "beef": 150,
            }
        else:
            for i, purchase in enumerate(past_purchases):
                order = Order.objects.filter(id=purchase['order_id']).values()[0]
                item_id = order['item_id']
                item = Item.objects.filter(id=item_id).values()[0]

                # weigh amount less cuz probably people always buy fixed amounts
                cost = item['default_cost'] * (purchase['amount'] / 10)
                category = item['tag']
                w1 = ((100 - i * 10) / 1) * cost
                if category in category_weights:
                    category_weights[category] += w1
                else:
                    category_weights[category] = w1

        category_weights_list = []
        for k, v in category_weights.items():
            category_weights_list.append({"tag": k, "weight": v})
        category_weights_list = sorted(category_weights_list, key=lambda a: a["weight"],reverse=True)
        recent_purchases = Purchase.objects.order_by('-purchase_date')[:100].values()
        recommendations = []
        for info in category_weights_list[:3]:
            for r in recent_purchases:
                # now find popular items recently bought of same tag
                if r["tag"] == info["tag"]:
                    item = Item.objects.filter(id=r["item_id"]).values()[0]
                    recommendations.append(item)
                    break
            if (len(recommendations) >= 3):
                break
            
        res = HttpResponse(recommendations)
        return res

class PurchaseView(CreateAPIView):
    def post(self, request, email):
        host_user = request.data.get('host_user')
        item_id = request.data.get('item_id')
        amount = request.data.get('amount')
        longitude = request.data.get('longitude')
        latitude = request.data.get('latitude')

        orders = Order.objects.filter(item_id=item_id).order_by("-order_deadline").values()
        _item = Item.objects.filter(id=item_id).values()
        if (len(_item) == 0):
            return HttpResponseBadRequest("Not a valid item")
        item = _item[0]

        valid_orders = []
        for order in orders:
            if (order["order_deadline"] >= datetime.now().date()):
                valid_orders.append(order)
            else:
                pass
        orders = valid_orders
        
        order_deadline = datetime.now() + timedelta(days=2)
        delivery_date = order_deadline + timedelta(days=1)
        order_id = None
        if (len(orders) == 0):
            #TODO fix host_user
           
            new_order = Order(host_user=email,amount=amount,cost_per_unit=item["default_cost"],order_deadline=order_deadline,delivery_date=delivery_date,locations="fixme",item_id=item_id)
            new_order.save()
            order_id=new_order.id
        else:
            order = orders[0]
            new_amount = order["amount"] + amount
            #TODO reduce cost per unit
            order_id = order["id"]
            Order.objects.filter(id=order_id).update(amount=new_amount)

        # This is linear regression
        SCALING_FACTOR = 1.0
        if 1 <= amount <= 10:
            SCALING_FACTOR = 1.0
        if 11 <= amount <= 25:
            SCALING_FACTOR = 0.80
        if 26 <= amount <= 50:
            SCALING_FACTOR = 0.70
        if 51 <= amount <= 100:
            SCALING_FACTOR = 0.50
        if 101 <= amount <= 200:
            SCALING_FACTOR = 0.40
        if 201 <= amount <= 1000:
            SCALING_FACTOR = 0.30
        
        cost_per_unit = (float(amount) / item["default_cost"]) * SCALING_FACTOR

        Purchase.objects.create(email=email,host_user=email,order_id=order_id,purchase_date=datetime.now(),item_id=item_id,amount=amount,cost_per_unit=item["default_cost"],order_deadline=order_deadline,delivery_date=delivery_date,locations="fixme",tag=item["tag"])

        return HttpResponse("Created")

class CreateOrderView(CreateAPIView):
    def post(self, request, email):
        item_id = request.data.get('item_id')
        _item = Item.objects.filter(id=item_id).values()
        item = _item[0]
        
        amount = 0
        cost_per_unit = item["default_cost"]

        order_deadline = datetime.now() + timedelta(days=2)
        delivery_date = order_deadline + timedelta(days=1)

        new_order = Order(host_user=email,amount=amount,cost_per_unit=cost_per_unit,order_deadline=order_deadline,delivery_date=delivery_date,locations="fixme",item_id=item_id)
        new_order.save()

        return HttpResponse("Created")