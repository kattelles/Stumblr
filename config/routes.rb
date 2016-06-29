Rails.application.routes.draw do
    namespace :api, defaults: {format: :json} do
      resource :session, only: [:create, :destroy]
       resources :users, only: [:create] do
         resource :blog, only: [:show, :update]
       end
       resources :posts, only: [:create, :update, :index, :destroy]
    end

    root "static_pages#root"
end
