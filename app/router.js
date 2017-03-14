import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('rover_home');
  this.route('fave_image');
  this.route('user');
  this.route('rover_manifest');
  this.route('rover_images');
  this.route('fave_img');
  this.route('users');
});

export default Router;
