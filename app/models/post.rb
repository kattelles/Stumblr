class Post < ActiveRecord::Base

  belongs_to(
    :user,
    :class_name => "User",
    :foreign_key => :user_id,
    :primary_key => :id
    )

  has_many :likes

  has_many :taggings, dependent: :destroy, inverse_of: :post
  has_many :tags, through: :taggings

  validates :user_id, :post_type, presence: true
end
