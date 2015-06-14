import Ember from 'ember';
import MENU_ITEMS from '../../fixtures/restaurant-menu';

export default Ember.Controller.extend({
  menuItems: MENU_ITEMS,
  order: [],
  queryParams: ['order'],

  taxPercent: 6,   // in percent (i.e., 6 ==> 6%)
  tipPercent: 17,  // in percent
  discount: 5, //dollars

  actions: {
    addMenuItem(menuItem) {
      let order = this.get('order');
      order.addObject({
        id: (new Date()).valueOf(),
        name: menuItem.name,
        price: menuItem.unitPrice
      });
    },
    removeOrderItem(orderItem) {
      this.get('order').removeObject(orderItem);
    }
  }
});
