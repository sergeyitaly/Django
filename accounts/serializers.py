from rest_framework.serializers import Serializer, ModelSerializer, CharField
from django.contrib.auth.models import User
from rest_framework.authtoken.models import Token
from rest_framework import serializers
from accounts.models import *

class ProfileSerializer(serializers.ModelSerializer):
    user=serializers.StringRelatedField(read_only=True)
    class Meta:
        model = Profile
        fields = '__all__'
class UserSerializer(ModelSerializer):
     class Meta:
         model = User
         fields = ['username', 'first_name', 'last_name', 'email', 'date_joined']

         
class LoginRequestSerializer(Serializer):
    model = User

    username = CharField(required=True)
    password = CharField(required=True)

class TokenSeriazliser(ModelSerializer):

    class Meta:
        model = Token
        fields = ['key']
