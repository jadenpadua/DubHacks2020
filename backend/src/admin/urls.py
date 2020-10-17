from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('api-auth/', include('rest_framework.urls')),
    path('admin/', admin.site.urls),
    path('testapi/', include('schemas.testapi.urls')),
    path('api/', include('schemas.api.urls'))
]
