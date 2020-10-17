from rest_framework.generics import(
    CreateAPIView, 
    ListAPIView, 
    RetrieveAPIView,
    DestroyAPIView,
    UpdateAPIView
)

from schemas.models import TestObject
from .serializers import TestObjectSerializer

class TestObjectListView(ListAPIView):
    queryset = TestObject.objects.all()
    serializer_class = TestObjectSerializer


class TestObjectDetailView(RetrieveAPIView):
    queryset = TestObject.objects.all()
    serializer_class = TestObjectSerializer

class TestObjectCreateView(CreateAPIView):
    queryset = TestObject.objects.all()
    serializer_class = TestObjectSerializer

class TestObjectUpdateView(UpdateAPIView):
    queryset = TestObject.objects.all()
    serializer_class = TestObjectSerializer

class TestObjectDeleteView(DestroyAPIView):
    queryset = TestObject.objects.all()
    serializer_class = TestObjectSerializer
