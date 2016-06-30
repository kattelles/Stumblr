class AddFollows < ActiveRecord::Migration
  def change
    create_table :follows do |t|
      t.integer :user_id, null: false
      t.integer :blog_id, null: false

      t.timestamps null: false
    end

    add_index :follows, :user_id
    add_index :follows, :blog_id
  end
end
