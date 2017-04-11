class Report < ApplicationRecord
  def self.get_reports
    HTTParty.get('http://skiosk.skiutah.com/feed/resorts',
                    headers: {
                      "Authorization" => "Token #{ENV['AUTHORIZATION']}",
                      "Content-type" => 'application/json'
                    }).body
  end

end
