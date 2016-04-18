import Ember from 'ember';

export default Ember.Controller.extend({
  saveList(attrs) {
    console.log(attrs);
    // Create a new list model
    const list = this.store.createRecord(`list`, attrs);

  // Save list model
    list.save();
  },
});
