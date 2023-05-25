from django.urls import path
from base.views import user_views as views

urlpatterns = [
    path('login/', views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('register/', views.registerUser, name='register'),
    path('profile/', views.getUserProfile, name="Users-Profile"),
    path('profile/update/', views.updateUserProfile, name="Users-Profile-Update"),
    path('', views.getUsers, name="Users"),
]