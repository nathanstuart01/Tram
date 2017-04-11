class AddRiderUsernameToTrips < ActiveRecord::Migration[5.0]
  def change
    add_column :trips, :rider_username, :text
  end
end
