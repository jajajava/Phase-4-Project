class User < ApplicationRecord
    has_secure_password

    has_many :gardens
    has_many :events, through: :gardens

    validates :username, uniqueness: true, presence: true
    validates :password, length: {minimum: 5}, presence: true
    validates :age, numericality: {greater_than: 9}, presence: true
end
