from rest_framework import serializers

from schemas.models import User

class UserObjectSerializer(serializers.ModelSerializer):
    # name_id = serializers.Field(source='name.id')
    class Meta:
        model = User
        fields = ('id','name', 'email', 'address','preferences')