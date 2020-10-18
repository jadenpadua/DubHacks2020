from rest_framework.generics import( 
    ListAPIView, 
    CreateAPIView,
    RetrieveAPIView
)

from rest_framework import serializers
from django.http import HttpResponse

from schemas.models import Item
from .serializers import ItemObjectSerializer

class AllItemsView(ListAPIView):
    queryset = Item.objects.all()
    serializer_class = ItemObjectSerializer
    lookup_field = 'name__id'

class CreateItemView(CreateAPIView):
    queryset = Item.objects.all()
    serializer_class = ItemObjectSerializer
    lookup_field = 'name__id'
    def post(self, request):
        tag = request.data.get('tag')
        image = request.data.get('image')
        default_cost = request.data.get('default_cost')
        name = request.data.get('name')
        latitude = request.data.get('latitude')
        longitude = request.data.get('longitude')
        location = request.data.get('location')
        buy_in_min = request.data.get('buy_in_min')
        reward_desc = request.data.get('reward_desc');
        Item.objects.create(tag=tag,image=image,default_cost=default_cost,name=name,latitude=latitude,longitude=longitude,location=location,buy_in_min=buy_in_min,reward_desc=reward_desc)
        return HttpResponse("Created")

class GetItemView(RetrieveAPIView):
    def get(self, request, id):
        queryset = Item.objects.filter(id=id)
        res = HttpResponse(queryset.values())
        return res