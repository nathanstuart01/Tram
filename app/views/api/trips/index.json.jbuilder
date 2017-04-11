json.trips @trips do |trip|
  json.id trip.id
  json.name trip.name
  json.date trip.date
  json.pickup_time trip.pickup_time
  json.departure_time trip.departure_time
  json.start_address trip.start_address
  json.end_address trip.end_address
  json.user_id trip.user_id
  json.rider_ids trip.rider_ids
  json.available_seats trip.available_seats
  json.trip_car trip.trip_car
end

