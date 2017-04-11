class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  validates_presence_of :username, :email, :first_name, :last_name

  validates_uniqueness_of :username

  has_many :cars
  has_many :trips


  def full_name
    "#{self.first_name} #{self.last_name}"
  end

  def chat_username 
    "#{self.username}"
  end 

end
