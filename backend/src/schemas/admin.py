from django.contrib import admin

from.models import TestObject, User, Item

admin.site.register(TestObject)
admin.site.register(User)
admin.site.register(Item)