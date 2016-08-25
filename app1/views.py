from django.shortcuts import render


def render_app(request):
    return render(request, 'app1/index.html', {'app_name': 'app1'}, content_type='text/html')

