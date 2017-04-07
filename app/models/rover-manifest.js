import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  landingDate: DS.attr('string'),
  launchDate: DS.attr('string'),
  status: DS.attr('string'),
  maxSol: DS.attr('number'),
  maxDate: DS.attr('string'),
  portrait: DS.attr('string'),
  miniPortrait:DS.attr('string'),
  totalPhotos: DS.attr('number'),

    cameras: DS.hasMany('camera')
});
