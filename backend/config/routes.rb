Rails.application.routes.draw do
  resources :requested_events
  resources :reservations, only: [:create, :destroy]
  resources :users, only: [:create, :patch, :delete]
  resources :events
  post "/auth/login", to: "auth#login"
  get "/me", to: "users#me"
end
