class UserSerializer < ActiveModel::Serializer
  attributes :id, :username
  has_many :events
  has_many :requested_events
end

# If there is an error getting data, you may want to include "is_member/is_admin" here