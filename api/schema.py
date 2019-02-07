from graphene import (
    ObjectType,
    Schema,
    String,
    Float,
    Field,
)


class Classification(ObjectType):
    male = Float()
    female = Float()
    brand = Float()


class Query(ObjectType):
    classify = Field(Classification, { 'handle': String(required=True) })

    def resolve_classify(self, info, handle):
        result = Classification()

        result.male = 0.33
        result.female = 0.33
        result.brand = 0.33

        return result


schema = Schema(query=Query)
