class RemoveCar4wdFromTrips < ActiveRecord::Migration[5.0]
  def change
    remove_column :trips, :car_4wd, :string
  end
end
