class Api::BlogsController < ApplicationController
  def show
    @blog = Blog.find_by_owner_id(params[:user_id])
  end

  def update
    @blog = current_user.blog
    @blog.update!(blog_params)
    render :show
  end

  private

  def blog_params
    params.require(:blog).permit(:title, :description, :owner_id, :cover_photo)
  end

end
