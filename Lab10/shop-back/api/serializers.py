from rest_framework import serializers
from .models import Product, Category

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['id', 'name']

class ProductSerializer(serializers.ModelSerializer):
    category = CategorySerializer(read_only = True)
    category_id = serializers.PrimaryKeyRelatedField(
        queryset=Category.objects.all(), 
        source='category', 
        write_only=True
    )
    def validate_is_active(self, value):
        if value is False:
            raise serializers.ValidationError("product must be active")
        return value
    def validate_count(self, value):
        if value == 0:
            raise serializers.ValidationError('count should be more than 0')
        return value
    def validate(self, data):
        name = data.get('name')
        price = data.get('price')
        category = data.get('category')

        queryset = Product.objects.filter(name=name, price = price, category=category)
        
        if self.instance:
            queryset = queryset.exclude(pk=self.instance.pk)

        if queryset.exists():
            raise serializers.ValidationError("product with these name, id and category already exists")
        
        return data
    class Meta:
        model = Product
        fields = ['id', 'name', 'price', 'description', 'count', 'is_active', 'category', 'category_id']