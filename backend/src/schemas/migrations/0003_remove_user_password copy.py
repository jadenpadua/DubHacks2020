# Generated by Django 3.1.2 on 2020-10-17 20:58

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('schemas', '0002_user'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='user',
            name='password',
        ),
    ]