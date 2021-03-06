from django.db import models
# Create your models here.

class TestObject(models.Model):
    test_title = models.name = models.CharField(max_length=120)
    test_data = models.TextField()

    def __str__(self):
        return self.test_title

class User(models.Model):
    name = models.CharField(max_length=100)
    email = models.CharField(max_length=100)
    address = models.CharField(max_length=100)
    preferences = models.TextField()

    def __str__(self):
        return self.name

class Item(models.Model):
    name = models.CharField(max_length=100)
    tag = models.CharField(max_length=100)
    image = models.CharField(max_length=200)
    default_cost = models.FloatField()
    buy_in_min = models.IntegerField()
    location = models.CharField(max_length=100)
    longitude = models.FloatField()
    latitude = models.FloatField()
    reward_desc = models.CharField(max_length=100)
    description = models.CharField(max_length=100)



class Order(models.Model):
    host_user = models.CharField(max_length=100)
    item_id = models.IntegerField()
    amount = models.IntegerField()
    cost_per_unit = models.FloatField()
    delivery_date = models.DateField()
    order_deadline = models.DateField()
    locations = models.CharField(max_length=100)

class Purchase(models.Model):
    email = models.CharField(max_length=100)
    order_id = models.IntegerField()
    purchase_date = models.DateField()
    host_user = models.CharField(max_length=100)
    item_id = models.IntegerField()
    amount = models.IntegerField()
    cost_per_unit = models.FloatField()
    delivery_date = models.DateField()
    order_deadline = models.DateField()
    locations = models.CharField(max_length=100)
    tag = models.CharField(max_length=100)