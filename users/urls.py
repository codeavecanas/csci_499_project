from django.urls import path
# from .views import user_views as views
from .views import *


urlpatterns = [
    path('login/', MyTokenObtainPairView.as_view(),
         name='token_obtain_pair'),

    path('register/', registerUser, name='register'),


    path('<str:pk>/', getUserById, name='user'),

    path('update/<str:pk>/', updateUser, name='user-update'),

]
