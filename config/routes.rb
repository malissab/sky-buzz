Rails.application.routes.draw do
  resources :airlines, param: :slug
  resources :reviews, only: [:create, :destroy]

  root 'pages#index'
  get '*path', to: 'pages#index', via: :all
end
