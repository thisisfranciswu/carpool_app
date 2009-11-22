class HomeController < ApplicationController

  layout "application"

  def index
    render :layout => "home"
  end

  def usage
  end

  def privacy
  end

end