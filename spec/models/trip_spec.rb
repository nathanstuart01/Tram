require 'rails_helper'

RSpec.describe Trip, type: :model do 

  describe 'validations' do 
    it { should validate_presence_of :name }
    it { should validate_presence_of :date }
    it { should validate_presence_of :pickup_time }
    it { should validate_presence_of :departure_time }
    it { should validate_presence_of :route_flexibility }
    it { should validate_presence_of :start_address }
    it { should validate_presence_of :end_address }
    it { should validate_presence_of :user_id }
  end 

  describe 'associations' do 
    it { should have_many :users } # FAILED - user doesn't have trip foreign key  
    it { should belong_to :user }
  end 
end 