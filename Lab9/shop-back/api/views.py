from .models import Product, Category
from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.response import Response
from .serializers import CategorySerializer, ProductSerializer

class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

    @action(detail = True, methods = ['get'])
    def products(self, request, pk = 'None'):
        category = self.get_object()
        products = category.products.all()
        serializer = ProductSerializer(products, many = True)
        return Response(serializer.data)

class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer  

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data = request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        return Response(serializer.data, status = 201)