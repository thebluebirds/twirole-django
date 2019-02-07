from django.http import JsonResponse

from .schema import schema


def index(request):
    query = schema.execute('{ classify(handle: "kenny") { male, female, brand } }')

    if query.errors:
        return JsonResponse(query.errors)

    return JsonResponse(query.data)
