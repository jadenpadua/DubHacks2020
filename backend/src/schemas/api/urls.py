from django.urls import path

from .views import (
    TestObjectCreateView, 
    TestObjectListView, 
    TestObjectDetailView,
    TestObjectUpdateView,
    TestObjectDeleteView
)

urlpatterns = [
    path('', TestObjectListView.as_view()),
    path('create/', TestObjectCreateView.as_view()),
    path('<pk>', TestObjectDetailView.as_view()),
    path('<pk>/update/', TestObjectUpdateView.as_view()),
    path('<pk>/delete/', TestObjectDeleteView.as_view()),
  
]