# Generated by Django 4.0.2 on 2022-02-02 08:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('shop', '0012_alter_product_photo'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='photo',
            field=models.ImageField(blank=True, upload_to='products/%Y/%m/%d', verbose_name='image'),
        ),
    ]
