Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  get '/mockup/:image', to: 'mockup#show'

  scope module: :client, shallow: true do
    get '/', to: 'home#index'
    get '/topic/:slug', to: 'articles#index'
    get '/:slug', to: 'articles#show'
  end
end
