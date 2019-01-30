# Starter Kit for Asteroit Fullstack Web App with [Ruby on Rails](https://rubyonrails.org/)

## Features
This is only the blueprint of every Asteroit web app using Rails

## Setup Project
1. Make sure [Ruby](https://www.ruby-lang.org) is already installed with version: `2.6.0`
2. Also, don't forget to install Rails on Gem :
```sh
$ gem install rails
```
3. Copy configuration from `config/application.yml.example` to `config/application.yml` :
```sh
$ cp config/application.yml.example config/application.yml
```
4. Edit `config/application.yml` with your database configurations (Note: use PostgreSQL) :
```
DATABASE_USERNAME: awesomeusername
DATABASE_PASSWORD: secretpassword
```
5. Run this commands :
```sh
$ bundle install
$ yarn install
$ rails db:setup
```
6. Create secret key base :
```sh
$ rails secret
```
7. Copy the result from above command to `config/application.yml`, for example :
```
SECRET_KEY_BASE: 3888762115ac94070fd94ff6704baa67d04b9b93dc1b82021c2b57eaa9bb2459b0cce59052d60363be7a1b348cb091350de80afc24ed3c831812822ee85ec0cb
```
8. App is ready to use. Just run `rails server` and we're ready to go!