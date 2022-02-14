from django.conf import settings
from django.contrib import admin
from django.urls import path, include, re_path
from django.views.generic import TemplateView
from django.conf import settings
from django.conf.urls.static import static


urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('frontend.urls')),
    path('', include('shop.urls')),
    path('auth/', include('djoser.urls')),
    path('auth/', include('djoser.urls.jwt')),
    path('auth/', include('djoser.urls.authtoken')),
    path('',include("accounts.urls")),
    #re_path(r'^(?:.*)/?$', TemplateView.as_view(template_name='index.html'))
 #   path('contact/', ContactFormView.as_view(), name='contact'),
  #  path('login/', LoginUser.as_view(), name='login'),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL,
                          document_root=settings.MEDIA_ROOT)

    urlpatterns += [re_path(r'^(?:.*)/?', include('frontend.urls')),]