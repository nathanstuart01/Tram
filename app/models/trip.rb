class Trip < ApplicationRecord
 validates_presence_of :name, :date, :pickup_time,
 :departure_time, :start_address, :end_address, :user_id, :available_seats

 belongs_to :user
 has_many :messages, dependent: :destroy
 serialize :rider_ids, Array
 serialize :driver_username, Array
 serialize :rider_username, Array
 serialize :rider_avatar_url, Array 
 serialize :driver_avatar_url, Array 
 serialize :trip_car, Array

 geocoded_by :end_full_street_address, :latitude => :end_lat, :longitude => :end_long
 geocoded_by :start_full_street_address, :latitude => :start_lat, :longitude => :start_long
 geocoded_by :address
 after_validation :geocode

 def address
   start_address
 end

 def end_full_street_address
  end_address
 end

 def start_full_street_address
   start_address
 end

end
