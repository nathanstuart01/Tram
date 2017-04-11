require 'rails_helper'

RSpec.describe Api::CarsController, type: :controller do 
  login_user

  describe 'GET #index' do 
    before(:each) do 
      FactoryGirl.create_list(:car, 10, user: @user)
      get :index 
    end 

    it'assigns all cars as @cars' do 
      expect(assigns(:cars).count).to eq(10)
      expect(assigns(:cars).first).to eq(@user.cars.first)
    end 
  end 
end 