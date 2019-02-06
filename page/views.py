from django.shortcuts import render


# Route that renders the index.html (homepage) from the templates directory
def index(request):
    return render(request, 'index.html')
