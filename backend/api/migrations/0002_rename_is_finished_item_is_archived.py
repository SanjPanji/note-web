# Generated by Django 5.1.6 on 2025-02-16 14:53

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='item',
            old_name='is_finished',
            new_name='is_archived',
        ),
    ]
