from django.contrib import admin
from .models import Product, Category

@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ['title', 'price', 'category', 'in_stock', 'created_at']
    list_filter = ['in_stock', 'category', 'created_at']
    search_fields = ['title']
    list_editable = ['price', 'in_stock']
    ordering = ['-created_at']

@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ['name', 'slug']
    search_fields = ['name']
    readonly_fields = ['slug']
    ordering = ['name']