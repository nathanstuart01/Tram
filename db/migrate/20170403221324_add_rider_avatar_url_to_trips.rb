class AddRiderAvatarUrlToTrips < ActiveRecord::Migration[5.0]
  def change
    add_column :trips, :rider_avatar_url, :text
  end
end
