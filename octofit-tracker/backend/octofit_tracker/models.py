# Models for OctoFit Tracker

from djongo import models
from django.contrib.auth.models import AbstractUser
from bson import ObjectId

def generate_object_id():
    return str(ObjectId())

class User(AbstractUser):
    _id = models.CharField(max_length=24, primary_key=True, default=generate_object_id, editable=False)
    
    class Meta:
        db_table = 'auth_user'

class Team(models.Model):
    _id = models.CharField(max_length=24, primary_key=True, default=generate_object_id, editable=False)
    name = models.CharField(max_length=100)
    members = models.JSONField(default=list)  # Store user emails as a list
    created_at = models.DateTimeField(auto_now_add=True)
    
    class Meta:
        db_table = 'octofit_tracker_team'

class Activity(models.Model):
    _id = models.CharField(max_length=24, primary_key=True, default=generate_object_id, editable=False)
    user = models.ForeignKey(User, on_delete=models.CASCADE, to_field='_id')
    type = models.CharField(max_length=50)
    duration = models.FloatField()
    calories = models.FloatField()
    date = models.DateField()
    
    class Meta:
        db_table = 'octofit_tracker_activity'

class Workout(models.Model):
    _id = models.CharField(max_length=24, primary_key=True, default=generate_object_id, editable=False)
    user = models.ForeignKey(User, on_delete=models.CASCADE, to_field='_id')
    name = models.CharField(max_length=100)
    description = models.TextField()
    date = models.DateField()
    
    class Meta:
        db_table = 'octofit_tracker_workout'

class Leaderboard(models.Model):
    _id = models.CharField(max_length=24, primary_key=True, default=generate_object_id, editable=False)
    team = models.ForeignKey(Team, on_delete=models.CASCADE, to_field='_id')
    score = models.FloatField()
    updated_at = models.DateTimeField(auto_now=True)
    
    class Meta:
        db_table = 'octofit_tracker_leaderboard'
