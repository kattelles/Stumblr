# 
# @posts.each do |post|
#   json.avatar User.find(post.user_id).avatar
# end

json.array! @posts
