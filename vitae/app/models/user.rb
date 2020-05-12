class User < ApplicationRecord
  validates :username, uniqueness: true, presence: true
  has_many  :posts, dependent: :destroy
  has_many  :comments, dependent: :destroy
end
