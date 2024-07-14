from django.shortcuts import render
from django.contrib.auth.models import User,Group
from rest_framework import viewsets
from .serializer import MovieSerializer
from .models import Movie

# Create your views here.

class MovieViewSet(viewsets.ModelViewSet):
    queryset = Movie.objects.all()
    serializer_class = MovieSerializer