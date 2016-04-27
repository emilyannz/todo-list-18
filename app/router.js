import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('lists', { path: `/`}, function() {
      this.route('new', { path: `/new-list`});
      this.route('detail', { path: `/:list_id`});
    });
  });

export default Router;
