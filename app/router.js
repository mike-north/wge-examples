import Ember from 'ember';
import config from './config/environment';

let Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('computed-properties', function() {});
  this.route('components', function() {});
  this.route('design-patterns', function() {});
  this.route('testing', function() {});
});

export default Router;
