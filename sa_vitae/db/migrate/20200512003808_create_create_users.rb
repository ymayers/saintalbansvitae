class CreateCreateUsers < ActiveRecord::Migration[6.0]
  def change
    create_table :create_users do |t|
      t.string :username
      t.string :password

      t.timestamps
    end
  end
end
