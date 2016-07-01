class CreatePosts < ActiveRecord::Migration
  def change
    create_table :posts do |t|
      t.integer :user_id, null: false
      t.integer :blog_id, null: false

      t.string :title
      t.text :content
      t.string :image_url
      t.text :quote
      t.text :quote_source
      t.string :link_url
    end

    add_index :posts, :user_id
    add_index :posts, :blog_id
  end
end
