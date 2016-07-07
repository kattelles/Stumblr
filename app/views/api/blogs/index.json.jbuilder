# json.extract! @blog, :title, :description, :owner_id, :id, :cover_photo
# json.avatar @blog.owner.avatar


json.array! @blogs do |blog|
  json.id blog.id
  json.title blog.title
  json.description blog.description
  json.owner_id blog.owner_id
  json.avatar blog.owner.avatar
  json.follows blog.follows
end
