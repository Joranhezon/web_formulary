from django.urls import path
from . import views

urlpatterns = [
    path('', views.render_home, name="render_home"),
    path('receive_name', views.receive_name, name="receive_name")
]
