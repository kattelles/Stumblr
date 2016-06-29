class CreateBlogs < ActiveRecord::Migration
  def change
    create_table :blogs do |t|
      t.integer :owner_id, null: false
      t.string :title
      t.text :description

      t.timestamps null: false
    end
    add_index :blogs, :owner_id, unique: true
  end
end
