import Ember from 'ember';

export default Ember.Component.extend({
    actions:{
        search_images(params){
            this.set("searchInProg",true);
            console.log(params.date_to_search);
            return model.this.store.findAll('image',{rover_manifest_id:params.rover_manifest_id})
        }

    }

});
