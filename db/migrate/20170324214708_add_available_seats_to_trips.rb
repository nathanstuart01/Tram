class AddAvailableSeatsToTrips < ActiveRecord::Migration[5.0]
  def change
    add_column :trips, :available_seats, :integer
    add_column :trips, :trip_car, :text
  end
end
