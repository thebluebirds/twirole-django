from django.http import (
    JsonResponse,
    HttpResponse,
)
from django.views.decorators.http import require_http_methods

from .schema import schema


@require_http_methods(['POST'])
def index(request):
    graphql_response = schema.execute(request.POST.get('query'))

    if graphql_response.errors:
        return HttpResponse(graphql_response.errors)

    return JsonResponse(graphql_response.data)
