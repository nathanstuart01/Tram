class RemoveCarModelFromTrips < ActiveRecord::Migration[5.0]
  def change
    remove_column :trips, :car_model, :string
  end
end
