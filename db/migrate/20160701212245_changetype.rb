class Changetype < ActiveRecord::Migration
  def change
    remove_column :posts, :type, :string
    add_column :posts, :post_type, :string
  end
end
