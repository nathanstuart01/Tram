class AddDriverUsernameToTrips < ActiveRecord::Migration[5.0]
  def change
    add_column :trips, :driver_username, :text
  end
end
