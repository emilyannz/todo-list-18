
import Ember from 'ember';

export default Ember.Controller.extend({
  saveList(attr) {
    const list = this.store.createRecord(`list`, attr);

    list.save().then(() => {
      this.transitionToRoute(`lists`);
    });
  },
});
