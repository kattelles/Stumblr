class User < ActiveRecord::Base
	attr_reader :password

	has_one(
		:blog,
		:class_name => Blog,
		:foreign_key => :owner_id,
		:primary_key => :id
	)

	after_create :create_blog

	validates :username, :password_digest, :session_token, presence: true
	validates :username, uniqueness: true
	validates :password, length: {minimum: 6}, allow_nil: :true

	after_initialize :ensure_session_token
	after_initialize :default_values
	# before_validation :ensure_session_token_uniqueness

  def self.find_by_credentials username, password
    user = User.find_by(username: username)
    return nil unless user
    user.password_is?(password) ? user : nil
  end

  def password= password
		self.password_digest = BCrypt::Password.create(password)
		@password = password
	end

  def password_is? password
  	BCrypt::Password.new(self.password_digest).is_password?(password)
  end

	def reset_session_token!
		self.session_token = new_session_token
		self.save
		self.session_token
	end

	private

	def ensure_session_token
		self.session_token ||= new_session_token
	end

	def new_session_token
		SecureRandom.base64
	end

	# def ensure_session_token_uniqueness
	# 	while User.find_by(session_token: self.session_token)
	# 		self.session_token = new_session_token
	# 	end
	# end

	def default_values
		self.avatar ||= "https://res.cloudinary.com/kattelles/image/upload/v1467250036/tumblr_o51oavbMDx1ugpbmuo7_500_2_rpuo6x.png"
	end

end
