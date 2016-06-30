class Api::FollowsController < ApplicationController
  def create
    @follow = Follow.new(follow_params)
    if @follow.save
      render :show
    else
      render json: @follow.errors, status: 422
    end

  end

  def destroy
    @follow = Follow.find(params[:id])
    @follow.destroy!

    render :show
  end

  private

  def follow_params
    params.require(:follow).permit(:user_id, :blog_id)
  end
end
