class ApplicationController < ActionController::Base
    # this is to remove the 
    protect_from_forgery with: :null_session
end
