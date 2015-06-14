import Ember from 'ember';
import injectObject from '../utils/inject-object';

const {
  computed
} = Ember;

export default Ember.Controller.extend({
  router: injectObject('router:main'),
  choices: [{
    id: 'basic',
    url: '/computed-properties',
    route: 'computed-properties.index'
  }, {
    id: 'cpm',
    url: '/computed-properties/cpm',
    route: 'computed-properties.cpm'
  }, {
    id: 'composable-cpm',
    url: '/computed-properties/composable-cpm',
    route: 'computed-properties.composable-cpm'
  }],

  selectedTabId: computed({
    get() {
      let anchor = document.createElement('a');
      anchor.href = this.get('router.url');

      return this.get('choices').findBy('url', anchor.pathname).id;
    },
    set(key, newVal) {
      this.transitionTo(this.get('choices').findBy('id', newVal).route);
      return newVal;
    }
  })
});
