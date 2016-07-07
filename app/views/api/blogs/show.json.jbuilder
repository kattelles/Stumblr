json.extract! @blog, :title, :description, :owner_id, :id, :cover_photo
json.avatar @blog.owner.avatar
json.follows @blog.follows
