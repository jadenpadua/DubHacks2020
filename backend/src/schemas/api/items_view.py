from rest_framework.generics import( 
    ListAPIView, 
    CreateAPIView,
    RetrieveAPIView
)

from schemas.models import Item
from .serializers import UserObjectSerializer

class AllItemsView(ListAPIView):
    queryset = Item.objects.all()
    serializer_class = UserObjectSerializer
    lookup_field = 'name__id'