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


class GetItemView(RetrieveAPIView):
    def get(self, request, item_id):
        queryset = Item.objects.filter(item_id=item_id)
        res = HttpResponse(queryset.values())
        return res