from .items_view import AllItemsView, CreateItemView, GetItemView
from django.urls import path

from .views import (
  AllUsersView,
  CreateUserView,
  GetUserView,
  PurchaseView,
  GetRecommendationsView,
  CreateOrderView,
  AllOrdersView
)

urlpatterns = [
    path('', AllUsersView.as_view()),
    path('create/',CreateUserView.as_view()),
    path('get_user/<email>', GetUserView.as_view()),
    path('users/<email>/recommendations', GetRecommendationsView.as_view()),
    path('items/', AllItemsView.as_view()),
    path('items_create/', CreateItemView.as_view()),
    path('items/<id>', GetItemView.as_view()),
    path('users/<email>/purchases/', PurchaseView.as_view()),
    path('create_order/<email>', CreateOrderView.as_view()),
    path('orders/', AllOrdersView.as_view()),
    path('orders/<order_id>', AllOrdersView.as_view())
]