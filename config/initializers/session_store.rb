# Be sure to restart your server when you modify this file.

# Your secret key for verifying cookie session data integrity.
# If you change this key, all old sessions will become invalid!
# Make sure the secret is at least 30 characters and all random, 
# no regular words or you'll be exposed to dictionary attacks.
ActionController::Base.session = {
  :key         => '_carpool_app_session',
  :secret      => '48795cb335d90c7bb8f78677abe7f3e1dec2ed4098af138cef1f7143a01c39841c22d4cd7384ded3934e747adcd16431555037e8e87914be4da4226e16086dba'
}

# Use the database for sessions instead of the cookie-based default,
# which shouldn't be used to store highly confidential information
# (create the session table with "rake db:sessions:create")
# ActionController::Base.session_store = :active_record_store
