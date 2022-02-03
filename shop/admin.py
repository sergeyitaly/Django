from dataclasses import fields
from django.contrib import admin
from django.utils.safestring import mark_safe
from .models import *
from django.utils.html import format_html

class ProductAdmin(admin.ModelAdmin):
    list_display = ('name', 'price', 'image_tag','stock')#, 'delete')
    fields = ['name', 'category','image_tag', 'photo','price', 'stock',]
    readonly_fields = ['image_tag',]
    list_filter = ('category','available',)
    save_on_top = True      

#    def delete(self, obj):
#        view_name = "admin:{}_{}_delete".format(obj._meta.app_label,obj._meta.model_name)
#        link = reverse(view_name, args=[Product.pk])
#        html = '<input type="button" onclick="location.href=\'{}\'" value="Delete" />'.format(link)
#        return format_html(html)

class CategoryAdmin(admin.ModelAdmin):
    list_display = ['name', 'slug']
    prepopulated_fields = {'slug': ('name',)}

admin.site.register(Product, ProductAdmin)
admin.site.register(Category, CategoryAdmin)
admin.site.site_header = 'Admin panel'





