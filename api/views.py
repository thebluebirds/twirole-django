from django.http import (
    JsonResponse,
    HttpResponse,
)
from django.views.decorators.http import require_http_methods

from .schema import schema


# The view function for the graphQL endpoint. Accepts only HTTP POST
@require_http_methods(['POST'])
def index(request):
    # Executes the graphQL query from the HTTP POST-body
    graphql_response = schema.execute(request.POST.get('query'))

    # If we have errors, return them to the client
    if graphql_response.errors:
        return HttpResponse(graphql_response.errors)

    return JsonResponse(graphql_response.data)
