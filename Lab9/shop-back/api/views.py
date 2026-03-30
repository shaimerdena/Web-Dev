from django.shortcuts import render
from django.http import JsonResponse
from .models import Product, Category

def product_list(request):
    products = Product.objects.all()
    products_json = [
        {
            'id' : p.id,
            'name' : p.name,
            'price' : p.price,
            'description': p.description,
            'count': p.count,
            'is_active': p.is_active,
            'category_id': p.category.id
        } for p in products
    ]
    return JsonResponse(products_json, safe = False)

def product_detail(request, product_id):
    try:
        p = Product.objects.get(id=product_id)
        return JsonResponse({
            'id': p.id,
            'name': p.name,
            'price': p.price,
            'description': p.description,
            'count': p.count,
            'is_active': p.is_active,
        })
    except Product.DoesNotExist:
            return JsonResponse({'error': 'Product not found'}, status=404)
    
def category_list(request):
    categories = Category.objects.all()
    categories_json = [
        {
            'id' : cat.id,
            'name' : cat.name,
        } for cat in categories
    ]
    return JsonResponse(categories_json, safe=False)

def category_detail(request, category_id):
    try:
        cat = Category.objects.get(id = category_id)
        return JsonResponse({
            'id' : cat.id,
            'name' : cat.name,
        })
    except Category.DoesNotExist:
         return JsonResponse({'error' : 'Category not found'}, status = 404)

def category_products(request, category_id):
    try:
        cat = Category.objects.get(id = category_id)
        products = cat.products.all()
        products_json = [{
             'id' : p.id,
             'name' : p.name,
             'price' : p.price
        } for p in products]
        return JsonResponse(products_json, safe = False)
    except Category.DoesNotExist:
        return JsonResponse({'error': 'Category not found'}, status = 404)