class AddDriverAvatarUrlToTrips < ActiveRecord::Migration[5.0]
  def change
    add_column :trips, :driver_avatar_url, :text
  end
end
