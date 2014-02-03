require "sinatra"
require "sass/plugin/rack"

use Sass::Plugin::Rack
Sass::Plugin.options[:style] = :compact
Sass::Plugin.options[:template_location] = "./public/stylesheets"

get "/" do
  send_file File.join(settings.public_folder, "index.html")
end

run Sinatra::Application
