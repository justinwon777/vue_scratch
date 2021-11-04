from rest_framework import serializers
from .models import Task

class TaskSereializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Task
        fields = ('id', 'descripton', 'status')