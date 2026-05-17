from .models import Product, Category
from rest_framework import serializers

class CategiorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'
        exclude = ['id']
        read_only_fields = ['slug']

    def validate_name(self, value):
        if(len(value) < 3):
            raise serializers.ValidationError('something went wrong')
        return value
    
    def validate(self, data):
        if data['name'] == 'Forbidden':
            raise serializers.ValidationError('This category name is not allowed.')
        return data
    
    def create(self, validated_data):
        validated_data['slug'] = validated_data['name'].lower().replace(' ', '-')
        return Category.objects.create(**validated_data)
    
    serializer = C