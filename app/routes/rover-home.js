import Ember from 'ember';

export default Ember.Route.extend({
    model(){
        return {name:'Curiosity',
            landing_date:'2012-08-06',
            launch_date:'2011-11-26',
            status:'active',
            max_sol:1502,
            max_date:'2017-3-3',
            portrait:'assets/images/curiosity.jpg',
            total_photos:16000}
    }
});
