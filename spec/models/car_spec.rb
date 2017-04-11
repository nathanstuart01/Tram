require 'rails_helper'

RSpec.describe Car, type: :model do 

  describe 'validations' do 
    it { should validate_presence_of :make }
    it { should validate_presence_of :model }
    it { should validate_presence_of :seats }
  end 

  describe 'associations' do 
    it { should belong_to :user }
  end 
end 