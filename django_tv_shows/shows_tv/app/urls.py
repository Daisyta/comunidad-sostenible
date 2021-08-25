from django.urls import path
from . import views
urlpatterns = [
    
    #GET
    path('', views.index), 
    path('shows/', views.verlistashows),
    path('shows/new', views.agregar),
    path('shows/<int:id>/edit', views.editar),
    path('shows/<int:id>', views.mostrar),
    path('shows/<int:id>/delete', views.borrar),
    
    #POST
    path('shows/create', views.crear),
    path('shows/<int:id>/update', views.update),
    path('shows/<int:id>/edit', views.editar),
    path('shows/<int:id>/destroy', views.destroy),
]
