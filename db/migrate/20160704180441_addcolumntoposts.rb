class Addcolumntoposts < ActiveRecord::Migration
  def change
    add_column :posts, :image_caption, :string
    add_column :posts, :link_title, :string 
  end
end
