# Plantblox

## Installation

### Dependencies
* `npm install -g ember-cli`
* `npm install -g phantomjs`
* `npm install -g bower`
* `gem install bundler`


### Server Bootstrap
* `cd server`
* `bundle`
* `rake db:migrate`
* `rake db:test:prepare`
* `rails s`
* Will be served at http://localhost:3000

### Client Bootstrap
* `cd client`
* `ember serve`
* Will be served at http://localhost:4200
