require 'rails_helper'

RSpec.describe User, type: :model do
  
  describe 'validations' do 
    it { should validate_presence_of :first_name }
    it { should validate_presence_of :last_name }
    it { should validate_presence_of :username }
    it { should validate_presence_of :email }
  end 

  describe 'associations' do 
    it { should have_many :cars }
    it { should have_many :trips }
  end 

  describe 'uniqueness' do 
    it { should validate_uniqueness_of :username }
  end 

end