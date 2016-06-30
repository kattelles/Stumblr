class Follow < ActiveRecord::Base
  belongs_to :user
  belongs_to :blog

  validates :user_id, :blog_id, presence: true
end
