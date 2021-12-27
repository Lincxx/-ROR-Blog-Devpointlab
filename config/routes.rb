Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  # resources :pages
  get "/pages", to: "pages#index"
  get "/pages/:id", to: "pages#show"
  delete "/pages/:id", to: "pages#destroy"
end
