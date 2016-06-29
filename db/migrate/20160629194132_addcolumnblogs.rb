class Addcolumnblogs < ActiveRecord::Migration
  def change
    add_column :blogs, :cover_photo, :string
  end
end
