json.extract! @blog, :title, :description, :owner_id, :id, :cover_photo
json.avatar @blog.owner.avatar
json.follows @blog.follows

# json.posts @blog.posts, partial: 'api/posts/post', as: :post
# json.array! @posts, partial: 'api/posts/post', as: :post
