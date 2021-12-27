Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  # resources :pages
  get "/pages", to: "pages#index"
  post "/pages", to: "pages#create"
  get "/pages/new", to: "pages#new"
  patch "/pages/:id", to: "pages#update"
  put "/pages/:id", to: "pages#update"
  get "/pages/:id/edit", to: "pages#edit"
  get "/pages/:id", to: "pages#show"
  delete "/pages/:id", to: "pages#destroy"
end
