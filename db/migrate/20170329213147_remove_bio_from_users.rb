class RemoveBioFromUsers < ActiveRecord::Migration[5.0]
  def change
    remove_column :users, :bio, :text
  end
end
