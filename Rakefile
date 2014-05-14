task :install do
  sh "bundle install"
end

task :sass do
  sh "sass --watch css/application.scss:css/application.css"
end

task :jekyll do
  sh "jekyll serve --watch"
end

task :build do
  sh "jekyll build"
end

task :deploy => :build do
  sh "scp -r _site/* startup@ssh.ocf.berkeley.edu:public_html"
end

multitask :server => [:jekyll, :sass]
task :default => :server
