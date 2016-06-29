class Api::BlogsController < ApplicationController
  def show
    @blog = Blog.find_by_owner_id(params[:user_id])
  end

  def update
    @blog = Blog.find_by_owner_id(params[:user_id])
    @blog.update!(blog_params)
  end

  private

  def blog_params
    params.require(:blog).permit(:title, :description, :owner_id)
  end

end
