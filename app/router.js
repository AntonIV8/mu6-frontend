import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-mu6-k4-l');
  this.route('i-i-s-mu6-k4-e',
  { path: 'i-i-s-mu6-k4-e/:id' });
  this.route('i-i-s-mu6-k4-e.new',
  { path: 'i-i-s-mu6-k4-e/new' });
});

export default Router;
