from rest_framework import serializers

from schemas.models import User, Item, Order, Purchase

class UserObjectSerializer(serializers.ModelSerializer):
    # name_id = serializers.Field(source='name.id')
    class Meta:
        model = User
        fields = ('id','name', 'email', 'address','preferences')


class ItemObjectSerializer(serializers.ModelSerializer):
    # name_id = serializers.Field(source='name.id')
    class Meta:
        model = Item
        fields = ('id','tag', 'image', 'default_cost', 'location', 'buy_in_min', 'reward_desc')


class OrderObjectSerializer(serializers.ModelSerializer):
    # name_id = serializers.Field(source='name.id')
    class Meta:
        model = Order
        fields = ('id', 'host_user', 'item_id', 'amount', 'cost_per_unit', 'delivery_date', 'order_deadline', 'locations')



class PurchaseObjectSerializer(serializers.ModelSerializer):
    # name_id = serializers.Field(source='name.id')
    class Meta:
        model = Purchase
        fields = ('id', 'email', 'order_id', 'purchase_date', 'host_user', 'item_id', 'amount'
        , 'cost_per_unit', 'delivery_date', 'order_deadline', 'locations', 'tag')