class Like < ActiveRecord::Base
  validates :user_id, :post_id, presence: true

  belongs_to :post 
end
