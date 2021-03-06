import DS from 'ember-data';

export default DS.Model.extend({
  rover: DS.attr('string'),
  cam_name:DS.attr('string'),
  image_date: DS.attr('string'),
  url: DS.attr('string'),
  user: DS.belongsTo('user')
});
