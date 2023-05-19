from django.urls import path
from . import views

urlpatterns = [
    path('users/login/', views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('', views.getRoutes, name="Routes"),
    path('users/profile/', views.getUserProfile, name="Users-Profile"),
    path('users/', views.getUsers, name="Users"),
    path('products/', views.getProducts, name="Products"),
    path('products/<str:pk>/', views.getProduct, name="Product"),
]