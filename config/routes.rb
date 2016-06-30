Rails.application.routes.draw do
    namespace :api, defaults: {format: :json} do
      
      resource :session, only: [:create, :destroy, :show]
      resources :follows, only: [:create, :destroy]

      resources :users, only: [:create, :update] do
       resource :blog, only: [:show, :update]
      end

    end

    root "static_pages#root"
end
