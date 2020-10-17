from rest_framework.generics import( 
    ListAPIView, 
    CreateAPIView,
    RetrieveAPIView
)

from rest_framework.response import Response
from rest_framework.views import APIView

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

class DetailUserView(RetrieveAPIView):
    queryset = User.objects.all()
    serializer_class = UserObjectSerializer
    lookup_field = 'name__id'

# class UserDetailView(APIView):

#     def test(self, request):
#         email = request.data.get('email')
#         print(email)
    # email = models.Field(primary_key = True)
    # queryset = User.objects.create(email)
    # serializer_class = UserObjectSerializer

# class GetSpecificUserVIew():
#     queryset = User.object.all()
#     for query queryset:
#         print(query)