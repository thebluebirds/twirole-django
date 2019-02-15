"""
Defines the GraphQL API for the classification models.

Composite objects can be built by using Classification objects within each other.
"""

from graphene import (
    ObjectType,
    Schema,
    String,
    Float,
    Field,
)

from random import random

from .twirole import twirole_classify


class Classification(ObjectType):
    male = Float()
    female = Float()
    brand = Float()


class Query(ObjectType):
    classify = Field(Classification, { 'handle': String(required=True) })

    def resolve_classify(self, info, handle):
        result = Classification()

        # Uses TwiRole to classify
        twirole_results = twirole_classify(handle)

        result.male = twirole_results['male']
        result.female = twirole_results['female']
        result.brand = twirole_results['brand']

        print('classified', twirole_results)

        return result


schema = Schema(query=Query)
