# Backend for DubHacks 2020 Project

## Installation
Step 1: Clone or download repository

Step 2: in root
``` 
cd backend
virtualenv env
source env/bin/activate
cd src
pip install Django
pip install django cors-headers
pip install djangorestframework
python manage.py runserver
```

## Admin Credentials
username: admin
password: 1234

## API Endpoints
```
Admin view: http://127.0.0.1:8000/admin/
GET all entry: http://127.0.0.1:8000/api/
GET a specific entry: http://127.0.0.1:8000/api/:formID/
CREATE an entry: http://127.0.0.1:8000/api/create/
UPDATE an entry: http://127.0.0.1:8000/api/:formID/update/
DELETE an entry: http://127.0.0.1:8000/api/:formID/delete/
```

Subscribe to me on Youtube please