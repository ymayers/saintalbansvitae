class CreateUser < ApplicationRecord
  has_secure_password
  
  validates :username, presence: true, uniqueness: true
  validates :password, length: { minimum: 6 }

  has_many :posts, dependent: :destroy
  has_many :comments, dependent: :destroy

end
