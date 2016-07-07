class Api::PostsController < ApplicationController
  def create
    @post = Post.new(post_params)
    if @post.save
      render :show
    else
      render json: @post.errors, status: 422
    end
  end

  def update
    @post = Post.find(params[:post][:id])
    @post.update!(post_params)

    render :show
  end

  def destroy
    @post = Post.find(params[:id])
    @post.destroy!
    render :show
  end

  def index

    if params[:user_id]
      @posts = User.find(params[:user_id]).posts
    elsif params[:explore]
       @posts = Post.all.select {|post| post.user_id != current_user.id}
    else
      @posts = current_user.followed_posts
      @posts += current_user.posts
    end


  end

  private

  def post_params
    params.require(:post).permit(:post_type, :image_caption, :video_title,
      :link_title, :audio_title,
      :user_id, :title, :content, :video_url, :audio_url,
      :image_url, :quote, :quote_source, :link_url)
  end
end
