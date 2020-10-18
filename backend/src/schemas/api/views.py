import datetime
from rest_framework.generics import( 
    ListAPIView, 
    CreateAPIView,
    RetrieveAPIView
)

from rest_framework.response import Response
from rest_framework.views import APIView
from django.http import HttpResponse

from schemas.models import User, Purchase, Item, Order
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

        user = User.objects.filter(email=email).values()[0]
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
        print(past_purchases)
        
        category_weights = {}
        for i, purchase in enumerate(past_purchases):
            order = Order.objects.filter(id=purchase['order_id']).values()[0]
            item_id = order['item_id']
            item = Item.objects.filter(id=item_id).values()[0]

            # weigh amount less cuz probably people always buy fixed amounts
            cost = item['default_cost'] * (purchase['amount'] / 10)
            category = item['tag']
            w1 = ((10 - i) / 10) * cost
            if category in category_weights:
                category_weights[category] += w1
            else:
                category_weights[category] = w1

        category_weights_list = []
        for k, v in category_weights.items():
            category_weights_list.append({"tag": k, "weight": v})
        sorted(category_weights_list, key=lambda a: a["weight"])
        print(category_weights_list)
        recent_purchases = Purchase.objects.order_by('-purchase_date')[:100].values()

        recommendations = []
        for r in recent_purchases:
            for info in category_weights_list[:3]:
                # now find popular items recently bought of same tag
                if r["tag"] == info["tag"]:
                    item = Item.objects.filter(id=r["item_id"]).values()[0]
                    recommendations.append(item)
                    if (len(recommendations) >= 3):
                        break
            if (len(recommendations) >= 3):
                break
            
        res = HttpResponse(recommendations)
        return res

class PurchaseView(CreateAPIView):
    def post(self, request, email):
        queryset = User.objects.filter(email=email)
        res = HttpResponse(queryset.values())
        
        email = res.data.get('email')
        purchase_date = datetime.datetime.now()
        amount = res.data.get('amount')