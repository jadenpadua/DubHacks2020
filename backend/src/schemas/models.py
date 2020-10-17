from django.db import models

# Create your models here.

class TestObject(models.Model):
    test_title = models.name = models.CharField(max_length=120)
    test_data = models.TextField()

    def __str__(self):
        return self.test_title