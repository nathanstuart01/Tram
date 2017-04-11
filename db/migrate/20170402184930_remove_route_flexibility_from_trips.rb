class RemoveRouteFlexibilityFromTrips < ActiveRecord::Migration[5.0]
  def change
    remove_column :trips, :route_flexibility, :boolean
  end
end
