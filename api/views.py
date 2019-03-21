from django.http import (
    JsonResponse,
    HttpResponse,
)
from django.views.decorators.http import require_http_methods
from json import loads

from .schema import schema


# The view function for the graphQL endpoint. Accepts only HTTP POST
@require_http_methods(['POST'])
def index(request):
    # Executes the graphQL query from the HTTP POST-body
    graphql_response = schema.execute(loads(request.body)['query'])
    response = { 'data': graphql_response.data }

    # If we have errors, return them to the client with a 500 error code
    if graphql_response.errors:
        return HttpResponse(graphql_response.errors, status=500)

    return JsonResponse(response)
