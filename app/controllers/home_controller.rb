class HomeController < ApplicationController

  layout "application"

  def index
    if logged_in?
      render :action => "dashboard"
    else
      render :layout => "home"
    end
  end

  def dashboard
  end

end