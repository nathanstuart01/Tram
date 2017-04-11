class Api::ReportsController < ApplicationController
  

  def index
    render json: Report.get_reports
  end
end
