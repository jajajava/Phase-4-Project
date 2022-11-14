Rails.application.routes.draw do
  resources :reservations, only: [:post, :destroy]
  resources :users, only: [:post, :patch, :delete]
  resources :events
  post "/auth/login", to: "auth#login"
  get "/me", to: "users#me"
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
