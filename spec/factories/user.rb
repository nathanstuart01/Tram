FactoryGirl.define do 
  sequence :email do |n|
    "person#{n}@example.com"
  end 

  factory :user do 
    email 
    password 'password'
    username 'testuser'
    first_name 'joe'
    last_name 'test'
  end 
end 