class AddCarModelToTrips < ActiveRecord::Migration[5.0]
  def change
    add_column :trips, :car_model, :string
  end
end
