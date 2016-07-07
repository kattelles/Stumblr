class Addtitletovideo < ActiveRecord::Migration
  def change
    add_column :posts, :video_title, :string
  end
end
