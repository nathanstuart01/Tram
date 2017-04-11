class RemoveCarMakeFromTrips < ActiveRecord::Migration[5.0]
  def change
    remove_column :trips, :car_make, :string
  end
end
