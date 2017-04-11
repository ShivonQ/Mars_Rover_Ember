import DS from 'ember-data';

export default DS.Model.extend({
  rover_manifest: DS.belongsTo('rover-manifest'),
  camera: DS.belongsTo('camera'),
  date: DS.attr('string'),
  url: DS.attr('string')
});
