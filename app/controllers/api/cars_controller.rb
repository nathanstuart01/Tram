class Api::CarsController < ApplicationController
   protect_from_forgery with: :null_session
   before_action :set_car, only: [:show, :update, :destroy]
   skip_before_filter  :verify_authenticity_token

 def index
   @cars = current_user.cars.all
   render json: @cars
 end

 def show
   render json: @car
 end

 def new
   @car = Car.new
 end

 def create
   car = current_user.cars.new(car_params)
   if car.save
     render json: car
   else
     render json: { errors: car.errors, status: 422}
   end
 end

 def edit
 end

 def update
   @car.update(car_params)
   render json: @car
 end

 def destroy
   @car.destroy
   render json: true
 end

 private
   def set_car
     @car = Car.find(params[:id])
   end

   def car_params
     params.require(:car).permit(:id, :make, :model, :four_by_four, :chains)
   end
end