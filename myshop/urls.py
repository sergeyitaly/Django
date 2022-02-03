from django.conf import settings
from django.contrib import admin
from django.contrib import admin
from django.urls import path, include, re_path
from django.views.generic import TemplateView
from shop.views import product_list, product_details
from django.conf import settings
from django.conf.urls.static import static
from django.contrib.staticfiles.urls import staticfiles_urlpatterns


urlpatterns = [
    path('api-auth/', include('rest_framework.urls')),
    path('products/', product_list),
    path('products/<int:pk>/', product_details),
    path('admin/', admin.site.urls),
     
] 

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL,
                          document_root=settings.MEDIA_ROOT)
    urlpatterns += [re_path(r'^.*',
                            TemplateView.as_view(template_name='index.html'))]
