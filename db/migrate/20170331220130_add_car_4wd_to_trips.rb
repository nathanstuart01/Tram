class AddCar4wdToTrips < ActiveRecord::Migration[5.0]
  def change
    add_column :trips, :car_4wd, :string
  end
end
