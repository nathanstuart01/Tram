class Api::MessagesController < ApplicationController

  skip_before_filter  :verify_authenticity_token

  def index
    render json: Message.all.order(created_at: :desc)
  end

  def create
    trip = Trip.find(params[:id])
    message = trip.messages.create(user_id: current_user.id, body: params[:message], name: current_user.chat_username)

    payload = {
      message: {
        id: message.id,
        trip_id: trip.id,
        name: current_user.chat_username,
        body: params[:message]
      }
    }

    MessageBus.publish "trip_#{trip.id}", payload
    head :ok
  end
end
