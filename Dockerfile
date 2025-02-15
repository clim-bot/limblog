# Use official Ruby image
FROM ruby:3.2

# Install dependencies
RUN apt-get update -qq && apt-get install -y \
    build-essential \
    nodejs \
    npm \
    libyaml-dev \
    sqlite3

# Set the working directory
WORKDIR /app

# Copy the application files
COPY . .

# Install Bundler & gems
RUN gem install bundler && bundle install --without development test

# Precompile assets (if using Rails)
RUN bundle exec rake assets:precompile

# Expose the port for the web server
EXPOSE 3000

# Start the Rails server
CMD ["bundle", "exec", "rails", "server", "-b", "0.0.0.0"]
