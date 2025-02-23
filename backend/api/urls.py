from django.urls import path
from . import views

urlpatterns = [
    path('items/archive/<int:pk>/', views.archive_item, name='post_archive_item'),
    path('items/restore/<int:pk>/', views.restore_item, name='post_restore_item'),
    path('root/', views.api_root_view, name='api_root_view'),
    path('items/', views.get_items_view, name='get_items_view'),
    path('items/post/', views.post_item_view, name='post_item_view'),
    path('items/detail/<int:pk>/', views.get_item_view, name='get_item_view'),
    path('items/post/update/<int:pk>/', views.put_item_view, name='put_item_view'),
    path('items/delete/<int:pk>/', views.delete_item_view, name='delete_item_view'),
]