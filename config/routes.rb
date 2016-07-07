Rails.application.routes.draw do
    namespace :api, defaults: {format: :json} do

      resource :session, only: [:create, :destroy, :show]
      resources :follows, only: [:create, :destroy]
      resources :posts, only: [:create, :destroy, :update, :index]
      resources :likes, only: [:create, :destroy, :index]

      resources :users, only: [:create, :update] do
       resource :blog, only: [:show, :update]
      end

      resources :blogs, only: [:index]

    end

    root "static_pages#root"
end
