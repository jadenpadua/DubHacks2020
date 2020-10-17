from .items_view import AllItemsView, GetItemView

from django.urls import path

from .views import (
  AllUsersView,
  CreateUserView,
  GetUserView
)

urlpatterns = [
    path('', AllUsersView.as_view()),
    path('create/',CreateUserView.as_view()),
    path('get_user/<email>', GetUserView.as_view()),
    path('items/', AllItemsView.as_view()),
    path('items/<item_id>', GetItemView.as_view())
]