json.extract! @post, :id, :user_id, :title, :image_caption, :link_title, :content, :image_url, :video_url, :audio_url, :quote, :quote_source, :link_url, :post_type

json.likes @post.likes
