import os
from django.conf import settings
from django.db import models
from django.urls import reverse
from django.template.defaultfilters import truncatechars 

class Product(models.Model):
    
    name = models.CharField(max_length=300, db_index=True)
    slug = models.SlugField(max_length=300, db_index=True, verbose_name="URL")
    description = models.TextField(blank=True)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    stock = models.PositiveIntegerField()
    available = models.BooleanField(default=True)
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)
    category = models.ForeignKey('Category', related_name='products', on_delete=models.CASCADE)
    photo = models.ImageField(upload_to="photos", null=True, blank=True)
   
    @property
    def short_description(self):
        return truncatechars(self.description, 20)    
    
    def image_tag(self):
        if self.photo:
            from django.utils.safestring import mark_safe
            return mark_safe(u'<a href="{0}" target="_blank"><img src="{0}" width="100"/></a>'.format(self.photo.url))
        else:
            return '(No image)'    
    
    image_tag.short_description = "Image"
    image_tag.allow_tags = True


    def __str__(self):
        return self.name

    class Meta:
        ordering = ('name',)
        index_together = (('id', 'slug'),)
  
    def get_absolute_url(self):
        return reverse('post', kwargs={'post_slug': self.slug})

class Category(models.Model):
    name = models.CharField(max_length=200, db_index=True)
    slug = models.SlugField(max_length=200, db_index=True, unique=True)
    
    def __str__(self):
        return self.name    

    class Meta:
        ordering = ('name',)
        verbose_name = 'Cateogy'
        verbose_name_plural = 'Categories'





