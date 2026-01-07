# Tests for OctoFit Tracker
from django.test import TestCase
from .models import User, Team, Activity, Workout, Leaderboard

class BasicModelTest(TestCase):
    def test_user_creation(self):
        user = User.objects.create(username='testuser')
        self.assertEqual(user.username, 'testuser')

    def test_team_creation(self):
        user = User.objects.create(username='testuser')
        team = Team.objects.create(name='Test Team')
        team.members.add(user)
        self.assertEqual(team.name, 'Test Team')
        self.assertIn(user, team.members.all())
