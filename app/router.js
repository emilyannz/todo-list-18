import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route(`lists`, { path: `/`}, function() {
      this.route('new');
      this.route(`detail`, { path: `/:id/detail`});
    });
  });

export default Router;
