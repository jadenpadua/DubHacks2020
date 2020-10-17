from rest_framework import serializers

from schemas.models import User, Item

class UserObjectSerializer(serializers.ModelSerializer):
    # name_id = serializers.Field(source='name.id')
    class Meta:
        model = User
        fields = ('id','name', 'email', 'address','preferences')


class ItemObjectSerializer(serializers.ModelSerializer):
    # name_id = serializers.Field(source='name.id')
    class Meta:
        model = Item
        fields = ('item_id','tag', 'image', 'default_cost')