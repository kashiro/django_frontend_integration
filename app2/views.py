from django.shortcuts import render


def render_app(request):
    return render(request, 'app2/index.html', {'app_name': 'app2'}, content_type='text/html')

