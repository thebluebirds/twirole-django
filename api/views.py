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
    response = { 'data': graphql_response.data }

    # If we have errors, return them to the client
    if graphql_response.errors:
        response['errors'] = [err.message for err in graphql_response.errors]

    return JsonResponse(response)
