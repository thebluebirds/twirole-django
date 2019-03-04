"""
Defines the GraphQL API for the classification models.

If you need to understand what is going on, look at the graphene docs.
"""

from graphene import (
    ObjectType,
    Schema,
    String,
    Float,
    Field,
)

from .twirole import classify


# Coerces a raw dictionary to the GraphQL objects so it can be returned by the API
def coerce_to_classification(raw_classification):
    res = Classification()
    res.male = raw_classification['Male']
    res.female = raw_classification['Female']
    res.brand = raw_classification['Brand']
    return res


# A classification for some subclass
class Classification(ObjectType):
    male = Float()
    female = Float()
    brand = Float()


# The entire output as returned by TwiRole
class ModelOutput(ObjectType):
    bf = Field(Classification)
    af = Field(Classification)
    cnn = Field(Classification)
    hybrid = Field(Classification)


# We only have one type of query, the "classify" query
class Query(ObjectType):
    classify = Field(ModelOutput, { 'handle': String(required=True) })

    # When we get a graphQL query to classify a user...
    # note that handle is passed as an output in the self.classify field
    def resolve_classify(self, info, handle):
        # Uses TwiRole to classify; returns a raw JSON dictionary
        twirole_results = classify(handle)

        # Output the classification results
        output = ModelOutput()
        output.bf = coerce_to_classification(twirole_results['BF'])
        output.af = coerce_to_classification(twirole_results['AF'])
        output.cnn = coerce_to_classification(twirole_results['CNN'])
        output.hybrid = coerce_to_classification(twirole_results['Hybrid'])
        return output


# Expose schema as a variable to be imported in our Django view
schema = Schema(query=Query)
