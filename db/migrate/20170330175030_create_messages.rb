class CreateMessages < ActiveRecord::Migration[5.0]
  def change
    create_table :messages do |t|
      t.belongs_to :trip, foreign_key: true
      t.integer :user_id
      t.text :body
      t.string :name

      t.timestamps
    end
  end
end
