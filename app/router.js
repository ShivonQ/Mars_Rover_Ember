import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('user');
  this.route('rover_manifest');
  this.route('fave_img');
  this.route('users');
  this.route('image');
  this.route('camera');
});

export default Router;
