class Tag < ActiveRecord::Base
  has_many :taggings, dependent: :destroy
  has_many :posts, through: :taggings

  validates :name, presence: true
  validates :name, uniqueness: true
end
