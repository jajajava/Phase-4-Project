class User < ApplicationRecord
    has_secure_password

    has_many :reservations
    has_many :events, through: :reservations
    has_many :requested_events

    validates :username, uniqueness: true, presence: true
    validates :password, length: {minimum: 5}, presence: true
end
