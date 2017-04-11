class CreateCars < ActiveRecord::Migration[5.0]
  def change
    create_table :cars do |t|
      t.string :model, null: false
      t.string :make, null: false
      t.integer :seats, null: false 
      t.float :rating
      t.boolean :four_by_four, default: false
      t.boolean :chains, default: false
      t.belongs_to :user
      t.belongs_to :trip
      t.timestamps
    end
  end
end
