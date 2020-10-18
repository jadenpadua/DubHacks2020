from datetime import datetime, timedelta
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

class PurchaseView(CreateAPIView):
    def post(self, request, email):
        host_user = request.data.get('host_user')
        item_id = request.data.get('item_id')
        amount = request.data.get('amount')
        longitude = request.data.get('longitude')
        latitude = request.data.get('latitude')

        current_time = datetime.now().strftime('%d/%m/%Y')
        current_time_split = current_time.split('/')
        current_time_split[1] = str(int(current_time_split[1]) + 1)
        delivery_date = current_time_split

        item_order = Item.objects.filter(id=item_id)

        # if len(item_order) == 0:
        #     Order.objects.create(hostUser=email
        #     ,order_id=???,purchase_date=purchase_date,amount=amount)
        return HttpResponse("Created")
 