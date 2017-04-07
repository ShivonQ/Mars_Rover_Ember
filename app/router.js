import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('rover_manifests',{path: '/'});
  this.route('user', {path:'/user/user_id'});
  this.route('rover_manifest', {path: '/rover_manifest/rover_manifest_id'});
  this.route('fave_img');
  this.route('image');
  this.route('camera');

  this.route('rover-manifests');
    this.route('rover-manifest');
});

export default Router;
