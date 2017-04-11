class AddCarChainsToTrips < ActiveRecord::Migration[5.0]
  def change
    add_column :trips, :car_chains, :string
  end
end
