class CreateEvents < ActiveRecord::Migration[7.0]
  def change
    create_table :events do |t|
      t.string :name
      t.text :date
      t.text :start_time
      t.text :end_time
      t.boolean :is_public
      t.integer :spots_left
      t.string :description
      t.string :recurring_days # If event is not recurring, this will be an empty string

      t.timestamps
    end
  end
end
