1. cd frontend
2. nmp run build
3. Navigate to the Python downloads page: Python downloads.
4. Install python
5. cd backend
6. python -m pip install Django
7. pip install django djangorestframework django-cors-headers Pillow django-admin-interface
8. python manage.py makemigrations
9. python manage.py migrate
10. python manage.py collectstatic
11. python manage.py runserver
12. Go to http:/127.0.0.1:8000 and see main site page
13. Go to http:/127.0.0.1:8000/admin/ (admin, pass: admin) and see admin page
14. Go to http:/127.0.0.1:8000/products/ and see all Json parsed items