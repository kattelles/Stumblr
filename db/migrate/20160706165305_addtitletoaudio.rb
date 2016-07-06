class Addtitletoaudio < ActiveRecord::Migration
  def change
    add_column :posts, :audio_title, :string
  end
end
