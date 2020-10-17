from rest_framework import serializers

from schemas.models import TestObject

class TestObjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = TestObject
        fields = ('id','test_title', 'test_data')