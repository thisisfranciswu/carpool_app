class AccountController < ApplicationController

  layout "application"

  def index
    redirect_to account_profile_path
  end

  def profile
  end

  def email_and_password
  end

  def carpooling_preferences
  end

end