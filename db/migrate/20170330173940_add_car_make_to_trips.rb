class AddCarMakeToTrips < ActiveRecord::Migration[5.0]
  def change
    add_column :trips, :car_make, :string
  end
end
