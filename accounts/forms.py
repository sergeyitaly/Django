from django.contrib.auth.forms import UserCreationForm, UserChangeForm
from .models import *
class ProfileCreationForm(UserCreationForm):
    class Meta(UserCreationForm):
        model = Profile
        fields = ('email',)
class ProfileChangeForm(UserChangeForm):
    class Meta:
        model = Profile
        fields = ('email',)