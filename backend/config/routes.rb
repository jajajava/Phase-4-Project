Rails.application.routes.draw do
  resources :events
  resources :gardens
  resources :users
  post "/auth/login", to: "auth#login"
  get "/me", to: "users#me"
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
