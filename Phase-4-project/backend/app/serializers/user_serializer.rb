class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :age
  has_many :events
end

# If there is an error getting data, you may want to include "is_member/is_admin" here