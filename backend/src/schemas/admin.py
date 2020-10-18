from django.contrib import admin

from.models import TestObject, User, Item, Order, Purchase

admin.site.register(TestObject)
admin.site.register(User)
admin.site.register(Item)
admin.site.register(Order)
admin.site.register(Purchase)