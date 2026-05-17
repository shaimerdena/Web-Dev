from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .models import Product, Category

def category_list(request):
    categories = Category.objects.all()
    data = {
        'categories': [
            {
                'id': category.id,
                'name': category.name,
                'slug': category.slug
            }
            for category in categories
        ]
    }
    cats = Category.objects.filter(name__icontains='Electronics').distinct()
    return JsonResponse(data)

def product_list(request):
    products = Product.objects.order_by('-created_at')[:10] 
    data = {
        'products': [
            {
                'id': product.id,
                'title': product.title,
                'description': product.description,
                'price': str(product.price),
                'in_stock': product.in_stock,
                'created_at': product.created_at.isoformat(),
                'updated_at': product.updated_at.isoformat(),
                'category': product.category.name
            }
            for product in products
        ]
    }
    Product.objects.create(
        title="New Product",
        description="This is a new product.",
        price=19.99,
        in_stock=True,
        category=Category.objects.first()
    )

    return JsonResponse(data)


