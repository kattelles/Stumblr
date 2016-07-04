class Api::LikesController < ApplicationController
  def create

  end

  def destroy
  end

  def index
  end

  private

  def like_params
    params.require(:like).permit(:user_id, :post_id)
  end

end
