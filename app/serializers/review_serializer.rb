class ReviewSerializer
  include JSONAPI::Serializer
  attributes :title, :description, :rating, :airline_id
end
