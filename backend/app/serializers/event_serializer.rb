class EventSerializer < ActiveModel::Serializer
  attributes :id, :name, :date, :time
end
