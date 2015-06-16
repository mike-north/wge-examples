import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.find('menu-item');
  },
  afterModel() {
    this._super(...arguments);
    this.controllerFor('computed-properties').set('_selectedTabId', 'basic');
  },
  setupController(controller) {
    controller.set('codeExample', 'cp-basic-example.js');
  }
});
