class AddRiderRatingToUsers < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :rider_rating, :float
  end
end
