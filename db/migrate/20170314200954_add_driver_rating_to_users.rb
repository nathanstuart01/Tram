class AddDriverRatingToUsers < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :driver_rating, :float
  end
end
