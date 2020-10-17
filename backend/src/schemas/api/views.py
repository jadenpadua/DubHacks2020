from rest_framework.generics import(
    CreateAPIView, 
    ListAPIView, 
    RetrieveAPIView,
    DestroyAPIView,
    UpdateAPIView
)

from schemas.models import TestObject
from .serializers import TestObjectSeralizer

class TestObjectListView(ListAPIView):
    queryset = TestObject.objects.all()
    serializer_class = TestObjectSeralizer


class TestObjectDetailView(RetrieveAPIView):
    queryset = TestObject.objects.all()
    serializer_class = TestObjectSeralizer

class TestObjectCreateView(CreateAPIView):
    queryset = TestObject.objects.all()
    serializer_class = TestObjectSeralizer

class TestObjectUpdateView(UpdateAPIView):
    queryset = TestObject.objects.all()
    serializer_class = TestObjectSeralizer

class TestObjectDeleteView(DestroyAPIView):
    queryset = TestObject.objects.all()
    serializer_class = TestObjectSeralizer