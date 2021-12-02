Rails.application.routes.draw do
  root 'dashboards#index'

  resources :dashboards do
      resources :artists
  end

  resources :artists do
    resources :songs
  end
end
