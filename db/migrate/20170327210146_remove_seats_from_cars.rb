class RemoveSeatsFromCars < ActiveRecord::Migration[5.0]
  def change
    remove_column :cars, :seats, :integer
  end
end
