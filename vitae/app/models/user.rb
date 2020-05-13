class User < ApplicationRecord
  has_secure_password

  validates :password, length: { minimum: 6 }
  validates :username, uniqueness: true, presence: true
  
  has_many  :posts, dependent: :destroy
  has_many  :comments, dependent: :destroy
 
end
