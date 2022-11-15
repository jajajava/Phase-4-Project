class RequestedEventSerializer < ActiveModel::Serializer
  attributes :id, :name, :date, :start_time, :end_time, :is_public, :spots_left, :description
end
