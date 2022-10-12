from django.urls import path, include
from .views import *


urlpatterns = [
    path('', getCars, name="cars"),

    path('create/', createCar, name="car-create"),
    path('upload/',uploadImage, name="image-upload"),
    path('<str:pk>/', getCar, name="car"),

]
