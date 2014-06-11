import Ember from 'ember';

var Router = Ember.Router.extend({
  location: PlantbloxENV.locationType
});

Router.map(function() {
  this.route('about');
});

export default Router;
