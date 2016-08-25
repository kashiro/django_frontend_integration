from django.conf import settings


def dfi(request):
    return {
        'settings': {
            'DEBUG': settings.DEBUG
        }
    }
