from django.core.management.base import BaseCommand
from octofit_tracker.models import User, Team, Activity, Workout, Leaderboard
from django.utils import timezone
from django.conf import settings
import pymongo

class Command(BaseCommand):
    help = 'Populate the octofit_db database with test data'

    def handle(self, *args, **kwargs):
        # Clear existing data in safe order for Djongo
        Activity.objects.all().delete()
        Workout.objects.all().delete()
        Leaderboard.objects.all().delete()
        # Use pymongo to clear Team and User collections directly
        client = pymongo.MongoClient(settings.DATABASES['default']['CLIENT']['host'])
        db = client[settings.DATABASES['default']['NAME']]
        db.team.delete_many({})
        db.user.delete_many({})

        # Create users (super heroes)
        marvel_heroes = [
            {'username': 'ironman', 'email': 'ironman@marvel.com'},
            {'username': 'captainamerica', 'email': 'cap@marvel.com'},
            {'username': 'spiderman', 'email': 'spiderman@marvel.com'},
        ]
        dc_heroes = [
            {'username': 'batman', 'email': 'batman@dc.com'},
            {'username': 'superman', 'email': 'superman@dc.com'},
            {'username': 'wonderwoman', 'email': 'wonderwoman@dc.com'},
        ]

        marvel_users = [User.objects.create(**hero) for hero in marvel_heroes]
        dc_users = [User.objects.create(**hero) for hero in dc_heroes]

        # Create teams (store user emails as members)
        marvel_team = Team.objects.create(name='Team Marvel', members=[u.email for u in marvel_users])
        dc_team = Team.objects.create(name='Team DC', members=[u.email for u in dc_users])

        # Create activities
        for user in marvel_users + dc_users:
            Activity.objects.create(user=user, type='run', duration=30, calories=300, date=timezone.now())
            Activity.objects.create(user=user, type='cycle', duration=45, calories=400, date=timezone.now())

        # Create workouts
        for user in marvel_users + dc_users:
            Workout.objects.create(user=user, name='Morning Workout', description='Pushups and situps', date=timezone.now())
            Workout.objects.create(user=user, name='Evening Cardio', description='Running and cycling', date=timezone.now())

        # Create leaderboard
        Leaderboard.objects.create(team=marvel_team, score=1000)
        Leaderboard.objects.create(team=dc_team, score=900)

        self.stdout.write(self.style.SUCCESS('octofit_db database populated with test data.'))
