class Post < ActiveRecord::Base
  belongs_to :user

  has_one :blog,
    through: :user,
    source: :blog

  validates :user_id, :post_type, presence: true
end
