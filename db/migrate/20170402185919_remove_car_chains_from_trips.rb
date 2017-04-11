class RemoveCarChainsFromTrips < ActiveRecord::Migration[5.0]
  def change
    remove_column :trips, :car_chains, :string
  end
end
