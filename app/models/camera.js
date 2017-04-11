import DS from 'ember-data';

export default DS.Model.extend({
  rover_manifest: DS.belongsTo('rover-manifest'),
  name: DS.attr('string'),
  fullName: DS.attr('string'),
    images:DS.hasMany('image')
});
