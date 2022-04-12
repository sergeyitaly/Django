
import os
from pathlib import Path

BASE_DIR = Path(__file__).resolve().parent.parent
SECRET_KEY = 'django-insecure-p4w8(5lrqeh5z6i(@m40+!+vbp5so&-p6h2oy3a+x#6mq&mvzv'
DEBUG = True
ALLOWED_HOSTS = ['127.0.0.1']
DATABASES = {'default': {'ENGINE': 'django.db.backends.sqlite3','NAME': BASE_DIR / 'db.sqlite3',}}

REACT_APP_DIR = os.path.join(BASE_DIR, 'frontend')

STATIC_URL = '/static/'
STATICFILES_DIRS = [
  # Tell Django where to look for React's static files (css, js)
  os.path.join(REACT_APP_DIR, "static/frontend")
]
STATIC_ROOT = os.path.join(BASE_DIR, 'static')

STATICFILES_STORAGE = "whitenoise.storage.CompressedManifestStaticFilesStorage"
WHITENOISE_INDEX_FILE = True
WHITENOISE_ROOT = os.path.join(STATIC_ROOT, 'root')

# MEDIA Folder settings
MEDIA_ROOT = os.path.join(BASE_DIR,'media')
MEDIA_URL = '/media/'

