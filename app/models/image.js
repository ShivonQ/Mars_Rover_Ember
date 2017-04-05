import DS from 'ember-data';

export default DS.Model.extend({
  rover_manifest: DS.attr('has-one'),
  camera: DS.attr('has-one'),
  date: DS.attr('string'),
  url: DS.attr('string')
});
