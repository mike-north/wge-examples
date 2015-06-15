import Ember from 'ember';
import not from 'ember-cpm/macros/not';

const { computed } = Ember;

export default Ember.Component.extend({
  classNames: ['card'],
  _wgeCard: true,
  _cardActions: [],

  hasActions: not(computed.empty('_cardActions')),
  parentController: computed.alias('targetObject'),

  registerWgeAction(component) {
    this.get('_cardActions').addObject(component);
  },

  unregisterWgeAction(component) {
    this.get('_cardActions').removeObject(component);
  }
});
