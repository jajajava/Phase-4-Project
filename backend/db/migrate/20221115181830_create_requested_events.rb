class CreateRequestedEvents < ActiveRecord::Migration[7.0]
  def change
    create_table :requested_events do |t|
      t.string :name
      t.text :date
      t.text :start_time
      t.text :end_time
      t.boolean :is_public
      t.integer :spots_left
      t.string :description
      t.integer :user_id

      t.timestamps
    end
  end
end
