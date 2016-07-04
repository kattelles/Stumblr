class Addcolumntopostsform < ActiveRecord::Migration
  def change
    add_column :posts, :audio_url, :string
    add_column :posts, :video_url, :string
  end
end
