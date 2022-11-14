class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.string :username
      t.string :password_digest
      t.integer :age
      t.boolean :is_admin
      t.boolean :is_member

      t.timestamps
    end
  end
end