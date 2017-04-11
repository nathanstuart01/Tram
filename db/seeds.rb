
5.times do
  Trip.create(
                      name: Faker::HarryPotter.location,
                      date: Faker::Date.between(5.days.ago, Date.today),
                      pickup_time: Faker::Time.between(DateTime.now - 1, DateTime.now),
                      departure_time: Faker::Time.between(DateTime.now - 1, DateTime.now),
                      start_address: Faker::Address.street_name,
                      end_address: Faker::Address.street_address,
                      available_seats: Faker::Number.between(1, 5),
                      user_id: 1,
                      driver_username: ['canyon'],
                      car_make: 'Car',
                      car_model: 'Seed',
                      car_4wd: true, 
                      car_chains: false
                      )
end

puts 'Trips seeded'