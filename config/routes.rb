Rails.application.routes.draw do
  root 'home#index'
  devise_for :users, controllers: {
    sessions: 'users/sessions',
    registrations: 'users/registrations'
  }

  namespace :api do
    get 'logged_in_user', to: 'users#logged_in_user'
    get 'location', to: 'location#show'
    delete 'delete_user', to: 'users#destroy'
    put 'update_user', to: 'users#update'
    put 'add_rider/:id', to: 'trips#add_rider'
    put 'remove_seat/:id', to: 'trips#remove_seat'
    put 'remove_rider/:id', to: 'trips#remove_rider'
    post 'trips/:id/message', to: 'messages#create'
    get 'messages', to: 'messages#index'
    get 'reports', to: 'reports#index'
    put 'users/avatar', to: 'users#update_avatar'

    resources :trips
    resources :cars
    resources :reports
  end

# NOT ROUTES BELOW THIS POINT
  get '*unmatched_route', to: 'home#index'
end
