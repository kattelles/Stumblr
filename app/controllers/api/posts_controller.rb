class Api::PostsController < ApplicationController
  def create
    ps = post_params
    tags = ps.delete("tags")
    @post = Post.new(ps)
    if @post.save
      make_tags(tags, @post.id)
      render :show
    else
      render json: @post.errors, status: 422
    end
  end

  def update
    @post = Post.find(post_params[:id])
    ps = post_params
    tags = ps.delete("tags")

    @post.update(ps)

    if @post.save
      update_tags(tags, @post)
      render :show
    else
      render json: @post.errors, status: 422
    end

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

  def make_tags(tags, post_id)
    debugger
    tags.each do |tag|
      tag = tag[1..-1]
      unless Tag.find_by_name(tag)
        Tag.create!(name: tag)
      end
      tag_id = Tag.find_by_name(tag).id
      Tagging.create!(post_id: post_id, tag_id: tag_id)
    end
  end

  def update_tags(new_tags, post)
    tags_to_create = []
    tags_to_remove = []
    current_tags = post.tags

    new_tags.each do |tag|
      tags_to_create << tag unless current_tags.include?(tag)
    end

    current_tags.each do |current_tag|
      tags_to_remove << current_tag unless new_tags.include?(current_tag)
    end

    make_tags(tags_to_create, post.id)

    tags_to_remove.each do |tag|
      Tagging.delete(tag.id)
    end
  end

  def post_params
    params.require(:post).permit(:id, :post_type, :image_caption, :video_title,
      :link_title, :audio_title, :user_id, :title, :content, :video_url,
      :audio_url, :image_url, :quote, :quote_source, :link_url, tags: [])
  end
end
