ActionController::Routing::Routes.draw do |map|

  map.logout   '/logout',   :controller => 'sessions', :action => 'destroy'
  map.login    '/login',    :controller => 'sessions', :action => 'new'
  map.register '/register', :controller => 'users',    :action => 'create'
  map.signup   '/signup',   :controller => 'users',    :action => 'new'

  map.resources :users
  map.resources :locations
  map.resources :commutes
  map.resources :messages

  map.resource :session

  map.resource :features
  map.with_options :controller => "features" do |features|
    features.features_everyday_carpooling "features/everyday_carpooling", :action => "everyday_carpooling"
    features.features_smart_matching      "features/smart_matching",      :action => "smart_matching"
    features.features_savings_everywhere  "features/savings_everywhere",  :action => "savings_everywhere"
  end
  map.with_options :controller => "account" do |account|
    account.account                        "account/",                       :action => "index"
    account.account_profile                "account/profile",                :action => "profile"
    account.account_organisation           "account/organisation",           :action => "organisation"
    account.account_email_and_password     "account/email_and_password",     :action => "email_and_password"
    account.account_carpooling_preferences "account/carpooling_preferences", :action => "carpooling_preferences"
    account.account_system_preferences     "account/system_preferences",     :action => "system_preferences"
  end
  map.with_options :controller => "pages" do |pages|
    pages.pages_about   "/about",   :action => "about"
    pages.pages_privacy "/privacy", :action => "privacy"
    pages.pages_usage   "/usage",   :action => "usage"
    pages.pages_help    "/help",    :action => "help"
    pages.pages_contact "/contact", :action => "contact"
  end


  # The priority is based upon order of creation: first created -> highest priority.

  # Sample of regular route:
  #   map.connect 'products/:id', :controller => 'catalog', :action => 'view'
  # Keep in mind you can assign values other than :controller and :action

  # Sample of named route:
  #   map.purchase 'products/:id/purchase', :controller => 'catalog', :action => 'purchase'
  # This route can be invoked with purchase_url(:id => product.id)

  # Sample resource route (maps HTTP verbs to controller actions automatically):
  #   map.resources :products

  # Sample resource route with options:
  #   map.resources :products, :member => { :short => :get, :toggle => :post }, :collection => { :sold => :get }

  # Sample resource route with sub-resources:
  #   map.resources :products, :has_many => [ :comments, :sales ], :has_one => :seller
  
  # Sample resource route with more complex sub-resources
  #   map.resources :products do |products|
  #     products.resources :comments
  #     products.resources :sales, :collection => { :recent => :get }
  #   end

  # Sample resource route within a namespace:
  #   map.namespace :admin do |admin|
  #     # Directs /admin/products/* to Admin::ProductsController (app/controllers/admin/products_controller.rb)
  #     admin.resources :products
  #   end

  # You can have the root of your site routed with map.root -- just remember to delete public/index.html.
  map.root :controller => "home"

  # See how all your routes lay out with "rake routes"

  # Install the default routes as the lowest priority.
  # Note: These default routes make all actions in every controller accessible via GET requests. You should
  # consider removing or commenting them out if you're using named routes and resources.
  map.connect ':controller/:action/:id'
  map.connect ':controller/:action/:id.:format'
end
