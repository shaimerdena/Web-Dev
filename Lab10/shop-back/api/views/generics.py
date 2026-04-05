from rest_framework import generics, status
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import Product, Category
from .serializers import ProductSerializer, CategorySerializer

class ProductListAPIView(generics.ListCreateAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

class ProductDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    lookup_url_kwarg = 'product_id'

class CategoryListAPIView(generics.ListCreateAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

class CategoryDetailAPIView(generics.RetrieveUpdateDestriyAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    loopkup_url_kwarg = 'category_id'

#endpoint
class CategoryProductsAPIView(APIView):
    def get(self, request, category_id):
        try:
            category = Category.objects.all(pk = category_id)
        except Category.DoesNotExist:
            return Response(status = status.HTTP_404_NOT_FOUND)
        products = category.objects.all()
        serializer = ProductSerializer(products, many = True)
        return Response(serializer.data)