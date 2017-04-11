class CreateTrips < ActiveRecord::Migration[5.0]
  def change
    create_table :trips do |t|
      t.string :name, null: false
      t.string :date, null: false
      t.string :pickup_time, null: false
      t.string :departure_time, null: false
      t.boolean :route_flexibility, null: false
      t.string :start_address, null: false
      t.string :end_address, null: false
      t.float :start_lat
      t.float :start_long
      t.float :end_lat
      t.float :end_long
      t.float :latitude
      t.float :longitude
      t.belongs_to :user
      t.timestamps
    end
  end
end
