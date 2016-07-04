class Blog < ActiveRecord::Base
  validates :owner_id, presence: true

  belongs_to(
    :owner,
    :class_name => "User",
    :foreign_key => :owner_id,
    :primary_key => :id
  )

  has_many :follows

  has_many :posts,
    through: :owner,
    source: :posts

  has_many :followers,
    through: :follows,
    source: :user

	after_initialize :default_values

  private

  def default_values
    self.title ||= "untitled"
    self.cover_photo ||= "https://res.cloudinary.com/kattelles/image/upload/v1467249835/elusive_pineapples_msnx7m.png"
  end
end
