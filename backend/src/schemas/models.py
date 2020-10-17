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
    image = models.CharField(max_length=100)
    default_cost = models.FloatField()