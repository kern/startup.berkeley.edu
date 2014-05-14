task :install do
  sh "bundle install"
end

task :sass do
  sh "sass --watch css/application.scss:css/application.css"
end

task :jekyll do
  sh "jekyll serve --watch"
end

multitask :server => [:jekyll, :sass]
task :default => :server
