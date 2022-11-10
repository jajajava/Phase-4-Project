class CreateEvents < ActiveRecord::Migration[7.0]
  def change
    create_table :events do |t|
      t.string :name
      t.string :date
      t.string :time
      t.boolean :is_public
      t.string :recurring_days # If event is not recurring, this will be an empty string

      t.timestamps
    end
  end
end
