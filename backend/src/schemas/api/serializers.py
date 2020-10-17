from rest_framework import serializers

from schemas.models import User, Item

class UserObjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id','name', 'email', 'address','preferences')


class ItemObjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Item
        fields = ('id','tag', 'image', 'default_cost', 'name')