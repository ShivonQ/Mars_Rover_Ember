import Ember from 'ember';

export default Ember.Component.extend({

    actions: {
        open(){
            this.set('isShowingModal', true);
            this.get('blurBackground')(true);
            console.log(this)
        },
        close() {
            this.set('isShowingModal',false);
            this.get('blurBackground')(false);
        }
    }
});
