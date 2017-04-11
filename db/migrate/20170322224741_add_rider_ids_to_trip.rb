class AddRiderIdsToTrip < ActiveRecord::Migration[5.0]
  def change
    add_column :trips, :rider_ids, :text
  end
end
