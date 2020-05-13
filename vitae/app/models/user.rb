class User < ApplicationRecord
  has_secure_password

  has_many :posts
  has_many :comments

  validates :username, uniqueness: true, presence: true
  validates :password, length: { minimum: 6 }


  def return_data
    {
      id: id,
      username: username,
      created_at: created_at,
      updated_at: updated_at
    }
  end
 
end
