class Post < ActiveRecord::Base

  belongs_to(
    :user,
    :class_name => "User",
    :foreign_key => :user_id,
    :primary_key => :id
    )


  validates :user_id, :post_type, presence: true
end
