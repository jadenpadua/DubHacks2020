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
        Item.objects.create(tag=tag,image=image,default_cost=default_cost)
        return HttpResponse("Created")

class GetItemView(RetrieveAPIView):
    def get(self, request, id):
        queryset = Item.objects.filter(id=id)
        res = HttpResponse(queryset.values())
        return res