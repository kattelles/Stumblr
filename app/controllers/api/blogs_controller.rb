class Api::BlogsController < ApplicationController
  def show
    @blog = Blog.find_by_owner_id(params[:user_id])
  end

  def update
    @blog = current_user.blog
    @blog.update!(blog_params)
    render :show
  end

  def index
    rec_blogs = [46, 47, 48, 49, 50, 51]
    @blogs = Blog.all.select {|blog| rec_blogs.include?(blog.owner_id)}
  end

  private

  def blog_params
    params.require(:blog).permit(:title, :description, :owner_id, :cover_photo)
  end

end
