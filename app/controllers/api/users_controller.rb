class Api::UsersController < ApplicationController
  skip_before_filter  :verify_authenticity_token
  def logged_in_user
    if current_user
      render json: current_user
    else
      render json: {}
    end
  end

  def update
    current_user.update(user_params)
    render json: current_user
  end

  def update_avatar
    auth = {
      cloud_name: ENV['CLOUD_NAME'],
      api_key: ENV['CLOUD_NAME_API_KEY'],
      api_secret: ENV['CLOUD_NAME_API_SECRET']
    }

    uploaded_avatar_name = params.keys.first
    uploaded_file = params[uploaded_avatar_name]
    begin
      cloud_avatar = Cloudinary::Uploader.upload(uploaded_file.open, auth)
      current_user.update(avatar_url: cloud_avatar['url'])
      render json: current_user
    rescue => e
      render json: { errors: e }, status: :bad_request
    end
  end

  def destroy
    current_user.destroy
    render json: current_user
  end

  private

  def user_params
    params.require(:user).permit(:first_name, :last_name, :username, :email)
  end
end
