import datetime
from rest_framework.generics import( 
    ListAPIView, 
    CreateAPIView,
    RetrieveAPIView
)

from rest_framework.response import Response
from rest_framework.views import APIView
from django.http import HttpResponse

from schemas.models import User
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
        queryset = User.objects.filter(email=email)
        res = HttpResponse(queryset.values())
        
        email = res.data.get('email')
        purchase_date = datetime.datetime.now()
        amount = res.data.get('amount')