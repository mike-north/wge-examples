import Ember from 'ember';

export default Ember.Route.extend({
  templateName: 'computed-properties/index',
  model() {
    return this.store.find('menu-item');
  },
  afterModel() {
    this._super(...arguments);
    this.controllerFor('computed-properties').set('_selectedTabId', 'composable-cpm');
  },

  setupController(controller) {
    controller.set('codeExample', 'cp-composable-cpm-example.js');
  }
});
