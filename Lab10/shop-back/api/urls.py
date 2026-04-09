from django.urls import path, include
from rest_framework.routers import DefaultRouter
# from .views import CategoryViewSet, ProductViewSet

# from .views.fbv import product_list, product_detail # Level 2
# from .views.cbv import ProductListAPIView, ProductDetailAPIView # Level 3
# from .views.mixins import ProductListAPIView, ProductDetailAPIView # Level 4
from .views.generics import (
    ProductListAPIView, ProductDetailAPIView,
    CategoryListAPIView, CategoryDetailAPIView,
    CategoryProductsAPIView
)  
#Level 5


# router = DefaultRouter()

# router.register(r'categories', CategoryViewSet)
# router.register(r'products', ProductViewSet)

# urlpatterns = [
#     path('', include(router.urls)),
# ]

urlpatterns = [
    path('products/', ProductListAPIView.as_view()),
    path('products/<int:product_id>/', ProductDetailAPIView.as_view()),
    path('categories/', CategoryListAPIView.as_view()),
    path('categories/<int:category_id>/', CategoryDetailAPIView.as_view()),
    path('categories/<int:category_id>/products/', CategoryProductsAPIView.as_view()),
]

# urlpatterns = [
#     path('products/', ProductListAPIView.as_view()),
#     path('products/<int:product_id>/', ProductDetailAPIView.as_view()),
# ]

# urlpatterns = [
#     path('products/', product_list),
#     path('products/<int:product_id>/', product_detail),
# ]