Rails.application.routes.draw do
  root 'pages#index'
  
  resources :airlines, param: :slug
  resources :reviews, only: [:create, :destroy]

  get '*path', to: 'pages#index', via: :all
end
