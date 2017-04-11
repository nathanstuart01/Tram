class Car < ApplicationRecord
  validates_presence_of :model, :make
  belongs_to :trip, optional: true 
  belongs_to :user
end
