class RemoveBlogidfromposts < ActiveRecord::Migration
  def change
    remove_column :posts, :blog_id, :integer
  end
end
