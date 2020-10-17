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
Admin view: http://127.0.0.1:8000/admin/
username: admin
password: 1234

## API TEST Endpoints
```
GET all entry: http://127.0.0.1:8000/testapi/
GET a specific entry: http://127.0.0.1:8000/testapi/:formID/
CREATE an entry: http://127.0.0.1:8000/testapi/create/
UPDATE an entry: http://127.0.0.1:8000/testapi/:formID/update/
DELETE an entry: http://127.0.0.1:8000/testapi/:formID/delete/
```

## API User Endpoints
```
Admin view: http://127.0.0.1:8000/admin/
GET all users: http://127.0.0.1:8000/api/
GET specific user: http://127.0.0.1:8000/api/:useremail/
CREATE a user: http://127.0.0.1:8000/api/create/
```

Subscribe to me on Youtube please