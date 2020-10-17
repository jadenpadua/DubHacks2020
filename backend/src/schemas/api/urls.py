from .items_view import AllItemsView, GetItemView
from django.urls import path

from .views import (
  AllUsersView,
  CreateUserView,
#   UserDetailView
)

urlpatterns = [
    path('', AllUsersView.as_view()),
    path('create/',CreateUserView.as_view()),
    # path('<name_id>/', DetailUserView.as_view()),
    # path('get_user/', UserDetailView.as_view()),

    path('items/', AllItemsView.as_view()),
    path('items/<item_id>', GetItemView.as_view())
]