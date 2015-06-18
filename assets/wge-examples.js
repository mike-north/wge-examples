/* jshint ignore:start */

/* jshint ignore:end */

define('wge-examples/adapters/application', ['exports', 'ember-data'], function (exports, DS) {

  'use strict';

  exports['default'] = DS['default'].ActiveModelAdapter.extend({
    namespace: 'api',
    coalesceFindRequests: true
  });

});
define('wge-examples/app', ['exports', 'ember', 'ember/resolver', 'ember/load-initializers', 'wge-examples/config/environment'], function (exports, Ember, Resolver, loadInitializers, config) {

  'use strict';

  var App = undefined;

  Ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = Ember['default'].Application.extend({
    modulePrefix: config['default'].modulePrefix,
    podModulePrefix: config['default'].podModulePrefix,
    Resolver: Resolver['default']
  });

  loadInitializers['default'](App, config['default'].modulePrefix);

  exports['default'] = App;

});
define('wge-examples/components/code-snippet', ['exports', 'ember', 'wge-examples/snippets'], function (exports, Ember, Snippets) {

  'use strict';

  var Highlight = require("highlight.js");

  exports['default'] = Ember['default'].Component.extend({
    tagName: "pre",
    classNameBindings: ["language"],
    unindent: true,

    _unindent: function _unindent(src) {
      if (!this.get("unindent")) {
        return src;
      }
      var match,
          min,
          lines = src.split("\n");
      for (var i = 0; i < lines.length; i++) {
        match = /^\s*/.exec(lines[i]);
        if (match && (typeof min === "undefined" || min > match[0].length)) {
          min = match[0].length;
        }
      }
      if (typeof min !== "undefined" && min > 0) {
        src = src.replace(new RegExp("(\\n|^)\\s{" + min + "}", "g"), "$1");
      }
      return src;
    },

    source: Ember['default'].computed("name", function () {
      return this._unindent((Snippets['default'][this.get("name")] || "").replace(/^(\s*\n)*/, "").replace(/\s*$/, ""));
    }),

    didInsertElement: function didInsertElement() {
      Highlight.highlightBlock(this.get("element"));
    },

    language: Ember['default'].computed("name", function () {
      var m = /\.(\w+)$/i.exec(this.get("name"));
      if (m) {
        switch (m[1].toLowerCase()) {
          case "js":
            return "javascript";
          case "hbs":
            return "handlebars";
          case "css":
            return "css";
          case "scss":
            return "scss";
        }
      }
    })
  });

});
define('wge-examples/components/ember-modal-dialog-positioned-container', ['exports', 'ember-modal-dialog/components/positioned-container'], function (exports, Component) {

	'use strict';

	exports['default'] = Component['default'];

});
define('wge-examples/components/ember-wormhole', ['exports', 'ember-wormhole/components/ember-wormhole'], function (exports, ember_wormhole) {

	'use strict';



	exports.default = ember_wormhole.default;

});
define('wge-examples/components/labeled-radio-button', ['exports', 'ember-radio-button/components/labeled-radio-button'], function (exports, LabeledRadioButton) {

	'use strict';

	exports['default'] = LabeledRadioButton['default'];

});
define('wge-examples/components/materialize-badge', ['exports', 'ember', 'wge-examples/components/md-badge'], function (exports, Ember, MaterializeBadge) {

  'use strict';

  exports['default'] = MaterializeBadge['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      Ember['default'].deprecate('{{materialize-badge}} has been deprecated. Please use {{md-badge}} instead', false, { url: 'https://github.com/sgasser/ember-cli-materialize/issues/67' });
    }
  });

});
define('wge-examples/components/materialize-button-submit', ['exports', 'ember', 'wge-examples/components/md-btn-submit'], function (exports, Ember, MaterializeButtonSubmit) {

  'use strict';

  exports['default'] = MaterializeButtonSubmit['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      Ember['default'].deprecate('{{materialize-button-submit}} has been deprecated. Please use {{md-btn-submit}} instead', false, { url: 'https://github.com/sgasser/ember-cli-materialize/issues/67' });
    }
  });

});
define('wge-examples/components/materialize-button', ['exports', 'ember', 'wge-examples/components/md-btn'], function (exports, Ember, MaterializeButton) {

  'use strict';

  exports['default'] = MaterializeButton['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      Ember['default'].deprecate('{{materialize-button}} has been deprecated. Please use {{md-btn}} instead', false, { url: 'https://github.com/sgasser/ember-cli-materialize/issues/67' });
    }
  });

});
define('wge-examples/components/materialize-card-action', ['exports', 'ember', 'wge-examples/components/md-card-action'], function (exports, Ember, MaterializeCardAction) {

  'use strict';

  exports['default'] = MaterializeCardAction['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      Ember['default'].deprecate('{{materialize-card-action}} has been deprecated. Please use {{md-card-action}} instead', false, { url: 'https://github.com/sgasser/ember-cli-materialize/issues/67' });
    }
  });

});
define('wge-examples/components/materialize-card-content', ['exports', 'ember', 'wge-examples/components/md-card-content'], function (exports, Ember, MaterializeCardContent) {

  'use strict';

  exports['default'] = MaterializeCardContent['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      Ember['default'].deprecate('{{materialize-card-content}} has been deprecated. Please use {{md-card-content}} instead', false, { url: 'https://github.com/sgasser/ember-cli-materialize/issues/67' });
    }
  });

});
define('wge-examples/components/materialize-card-panel', ['exports', 'ember', 'wge-examples/components/md-card-panel'], function (exports, Ember, MaterializeCardPanel) {

  'use strict';

  exports['default'] = MaterializeCardPanel['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      Ember['default'].deprecate('{{materialize-card-panel}} has been deprecated. Please use {{md-card-panel}} instead', false, { url: 'https://github.com/sgasser/ember-cli-materialize/issues/67' });
    }
  });

});
define('wge-examples/components/materialize-card-reveal', ['exports', 'ember', 'wge-examples/components/md-card-reveal'], function (exports, Ember, MaterializeCardReveal) {

  'use strict';

  exports['default'] = MaterializeCardReveal['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      Ember['default'].deprecate('{{materialize-card-reveal}} has been deprecated. Please use {{md-card-reveal}} instead', false, { url: 'https://github.com/sgasser/ember-cli-materialize/issues/67' });
    }
  });

});
define('wge-examples/components/materialize-card', ['exports', 'ember', 'wge-examples/components/md-card'], function (exports, Ember, MaterializeCard) {

  'use strict';

  exports['default'] = MaterializeCard['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      Ember['default'].deprecate('{{materialize-card}} has been deprecated. Please use {{md-card}} instead', false, { url: 'https://github.com/sgasser/ember-cli-materialize/issues/67' });
    }
  });

});
define('wge-examples/components/materialize-checkbox', ['exports', 'ember', 'wge-examples/components/md-check'], function (exports, Ember, materializeCheckbox) {

  'use strict';

  exports['default'] = materializeCheckbox['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      Ember['default'].deprecate('{{materialize-checkbox}} has been deprecated. Please use {{md-check}} instead', false, { url: 'https://github.com/sgasser/ember-cli-materialize/issues/67' });
    }
  });

});
define('wge-examples/components/materialize-checkboxes', ['exports', 'ember', 'wge-examples/components/md-checks'], function (exports, Ember, materializeCheckboxes) {

  'use strict';

  exports['default'] = materializeCheckboxes['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      Ember['default'].deprecate('{{materialize-checkboxes}} has been deprecated. Please use {{md-checks}} instead', false, { url: 'https://github.com/sgasser/ember-cli-materialize/issues/67' });
    }
  });

});
define('wge-examples/components/materialize-collapsible-card', ['exports', 'ember', 'wge-examples/components/md-card-collapsible'], function (exports, Ember, MaterializeCollapsibleCard) {

  'use strict';

  exports['default'] = MaterializeCollapsibleCard['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      Ember['default'].deprecate('{{materialize-collapsible-card}} has been deprecated. Please use {{md-card-collapsible}} instead', false, { url: 'https://github.com/sgasser/ember-cli-materialize/issues/67' });
    }
  });

});
define('wge-examples/components/materialize-collapsible', ['exports', 'ember', 'wge-examples/components/md-collapsible'], function (exports, Ember, MaterializeCollapsible) {

  'use strict';

  exports['default'] = MaterializeCollapsible['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      Ember['default'].deprecate('{{materialize-collapsible}} has been deprecated. Please use {{md-collapsible}} instead', false, { url: 'https://github.com/sgasser/ember-cli-materialize/issues/67' });
    }
  });

});
define('wge-examples/components/materialize-copyright', ['exports', 'ember', 'wge-examples/components/md-copyright'], function (exports, Ember, materializeCopyright) {

  'use strict';

  exports['default'] = materializeCopyright['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      Ember['default'].deprecate('{{materialize-copyright}} has been deprecated. Please use {{md-copyright}} instead', false, { url: 'https://github.com/sgasser/ember-cli-materialize/issues/67' });
    }
  });

});
define('wge-examples/components/materialize-date-input', ['exports', 'ember', 'wge-examples/components/md-input-date'], function (exports, Ember, materializeDateInput) {

  'use strict';

  exports['default'] = materializeDateInput['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      Ember['default'].deprecate('{{materialize-date-input}} has been deprecated. Please use {{md-input-date}} instead', false, { url: 'https://github.com/sgasser/ember-cli-materialize/issues/67' });
    }
  });

});
define('wge-examples/components/materialize-input-field', ['exports', 'ember', 'wge-examples/components/md-input-field'], function (exports, Ember, materializeInputField) {

  'use strict';

  exports['default'] = materializeInputField['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      Ember['default'].deprecate('{{materialize-input-field}} has been deprecated. Please use {{md-input-field}} instead', false, { url: 'https://github.com/sgasser/ember-cli-materialize/issues/67' });
    }
  });

});
define('wge-examples/components/materialize-input', ['exports', 'ember', 'wge-examples/components/md-input'], function (exports, Ember, materializeInput) {

  'use strict';

  exports['default'] = materializeInput['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      Ember['default'].deprecate('{{materialize-input}} has been deprecated. Please use {{md-input}} instead', false, { url: 'https://github.com/sgasser/ember-cli-materialize/issues/67' });
    }
  });

});
define('wge-examples/components/materialize-loader', ['exports', 'ember', 'wge-examples/components/md-loader'], function (exports, Ember, materializeLoader) {

  'use strict';

  exports['default'] = materializeLoader['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      Ember['default'].deprecate('{{materialize-loader}} has been deprecated. Please use {{md-loader}} instead', false, { url: 'https://github.com/sgasser/ember-cli-materialize/issues/67' });
    }
  });

});
define('wge-examples/components/materialize-modal', ['exports', 'ember', 'wge-examples/components/md-modal'], function (exports, Ember, MaterializeModal) {

  'use strict';

  exports['default'] = MaterializeModal['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      Ember['default'].deprecate('{{materialize-modal}} has been deprecated. Please use {{md-modal}} instead', false, { url: 'https://github.com/sgasser/ember-cli-materialize/issues/67' });
    }
  });

});
define('wge-examples/components/materialize-navbar', ['exports', 'ember', 'wge-examples/components/md-navbar'], function (exports, Ember, MaterializeNavBar) {

  'use strict';

  exports['default'] = MaterializeNavBar['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      Ember['default'].deprecate('{{materialize-navbar}} has been deprecated. Please use {{md-navbar}} instead', false, { url: 'https://github.com/sgasser/ember-cli-materialize/issues/67' });
    }
  });

});
define('wge-examples/components/materialize-pagination', ['exports', 'ember', 'wge-examples/components/md-pagination'], function (exports, Ember, materializePagination) {

  'use strict';

  exports['default'] = materializePagination['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      Ember['default'].deprecate('{{materialize-pagination}} has been deprecated. Please use {{md-pagination}} instead', false, { url: 'https://github.com/sgasser/ember-cli-materialize/issues/67' });
    }
  });

});
define('wge-examples/components/materialize-parallax', ['exports', 'ember', 'wge-examples/components/md-parallax'], function (exports, Ember, materializeParallax) {

  'use strict';

  exports['default'] = materializeParallax['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      Ember['default'].deprecate('{{materialize-parallax}} has been deprecated. Please use {{md-parallax}} instead', false, { url: 'https://github.com/sgasser/ember-cli-materialize/issues/67' });
    }
  });

});
define('wge-examples/components/materialize-radio', ['exports', 'ember', 'wge-examples/components/md-radio'], function (exports, Ember, materializeRadio) {

  'use strict';

  exports['default'] = materializeRadio['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      Ember['default'].deprecate('{{materialize-radio}} has been deprecated. Please use {{md-radio}} instead', false, { url: 'https://github.com/sgasser/ember-cli-materialize/issues/67' });
    }
  });

});
define('wge-examples/components/materialize-radios', ['exports', 'ember', 'wge-examples/components/md-radios'], function (exports, Ember, materializeRadios) {

  'use strict';

  exports['default'] = materializeRadios['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      Ember['default'].deprecate('{{materialize-radios}} has been deprecated. Please use {{md-radios}} instead', false, { url: 'https://github.com/sgasser/ember-cli-materialize/issues/67' });
    }
  });

});
define('wge-examples/components/materialize-range', ['exports', 'ember', 'wge-examples/components/md-range'], function (exports, Ember, materializeRange) {

  'use strict';

  exports['default'] = materializeRange['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      Ember['default'].deprecate('{{materialize-range}} has been deprecated. Please use {{md-range}} instead', false, { url: 'https://github.com/sgasser/ember-cli-materialize/issues/67' });
    }
  });

});
define('wge-examples/components/materialize-select', ['exports', 'ember', 'wge-examples/components/md-select'], function (exports, Ember, materializeSelect) {

  'use strict';

  exports['default'] = materializeSelect['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      Ember['default'].deprecate('{{materialize-select}} has been deprecated. Please use {{md-select}} instead', false, { url: 'https://github.com/sgasser/ember-cli-materialize/issues/67' });
    }
  });

});
define('wge-examples/components/materialize-switch', ['exports', 'ember', 'wge-examples/components/md-switch'], function (exports, Ember, materializeSwitch) {

  'use strict';

  exports['default'] = materializeSwitch['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      Ember['default'].deprecate('{{materialize-switch}} has been deprecated. Please use {{md-switch}} instead', false, { url: 'https://github.com/sgasser/ember-cli-materialize/issues/67' });
    }
  });

});
define('wge-examples/components/materialize-switches', ['exports', 'ember', 'wge-examples/components/md-switches'], function (exports, Ember, materializeSwitches) {

  'use strict';

  exports['default'] = materializeSwitches['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      Ember['default'].deprecate('{{materialize-switches}} has been deprecated. Please use {{md-switches}} instead', false, { url: 'https://github.com/sgasser/ember-cli-materialize/issues/67' });
    }
  });

});
define('wge-examples/components/materialize-tabs-tab', ['exports', 'ember', 'wge-examples/components/md-tab'], function (exports, Ember, materializeTabsTab) {

  'use strict';

  exports['default'] = materializeTabsTab['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      Ember['default'].deprecate('{{materialize-tabs-tab}} has been deprecated. Please use {{md-tab}} instead', false, { url: 'https://github.com/sgasser/ember-cli-materialize/issues/67' });
    }
  });

});
define('wge-examples/components/materialize-tabs', ['exports', 'ember', 'wge-examples/components/md-tabs'], function (exports, Ember, materializeTabs) {

  'use strict';

  exports['default'] = materializeTabs['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      Ember['default'].deprecate('{{materialize-tabs}} has been deprecated. Please use {{md-tabs}} instead', false, { url: 'https://github.com/sgasser/ember-cli-materialize/issues/67' });
    }
  });

});
define('wge-examples/components/materialize-textarea', ['exports', 'ember', 'wge-examples/components/md-textarea'], function (exports, Ember, materializeTextarea) {

  'use strict';

  exports['default'] = materializeTextarea['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      Ember['default'].deprecate('{{materialize-textarea}} has been deprecated. Please use {{md-textarea}} instead', false, { url: 'https://github.com/sgasser/ember-cli-materialize/issues/67' });
    }
  });

});
define('wge-examples/components/md-badge', ['exports', 'ember-cli-materialize/components/md-badge'], function (exports, materializeBadge) {

	'use strict';

	exports['default'] = materializeBadge['default'];

});
define('wge-examples/components/md-btn-submit', ['exports', 'ember-cli-materialize/components/md-btn-submit'], function (exports, MaterializeButtonSubmit) {

	'use strict';

	exports['default'] = MaterializeButtonSubmit['default'];

});
define('wge-examples/components/md-btn', ['exports', 'ember-cli-materialize/components/md-btn'], function (exports, MaterializeButton) {

	'use strict';

	exports['default'] = MaterializeButton['default'];

});
define('wge-examples/components/md-card-action', ['exports', 'ember-cli-materialize/components/md-card-action'], function (exports, MaterializeCardAction) {

	'use strict';

	exports['default'] = MaterializeCardAction['default'];

});
define('wge-examples/components/md-card-collapsible', ['exports', 'ember-cli-materialize/components/md-card-collapsible'], function (exports, MaterializeCollapsibleCard) {

	'use strict';

	exports['default'] = MaterializeCollapsibleCard['default'];

});
define('wge-examples/components/md-card-content', ['exports', 'ember-cli-materialize/components/md-card-content'], function (exports, MaterializeCardContent) {

	'use strict';

	exports['default'] = MaterializeCardContent['default'];

});
define('wge-examples/components/md-card-panel', ['exports', 'ember-cli-materialize/components/md-card-panel'], function (exports, MaterializeCardPanel) {

	'use strict';

	exports['default'] = MaterializeCardPanel['default'];

});
define('wge-examples/components/md-card-reveal', ['exports', 'ember-cli-materialize/components/md-card-reveal'], function (exports, MaterializeCardReveal) {

	'use strict';

	exports['default'] = MaterializeCardReveal['default'];

});
define('wge-examples/components/md-card', ['exports', 'ember-cli-materialize/components/md-card'], function (exports, MaterializeCard) {

	'use strict';

	exports['default'] = MaterializeCard['default'];

});
define('wge-examples/components/md-check', ['exports', 'ember-cli-materialize/components/md-check'], function (exports, materializeCheckbox) {

	'use strict';

	exports['default'] = materializeCheckbox['default'];

});
define('wge-examples/components/md-checks', ['exports', 'ember-cli-materialize/components/md-checks'], function (exports, materializeCheckboxes) {

	'use strict';

	exports['default'] = materializeCheckboxes['default'];

});
define('wge-examples/components/md-collapsible', ['exports', 'ember-cli-materialize/components/md-collapsible'], function (exports, MaterializeCollapsible) {

	'use strict';

	exports['default'] = MaterializeCollapsible['default'];

});
define('wge-examples/components/md-copyright', ['exports', 'ember-cli-materialize/components/md-copyright'], function (exports, materializeCopyright) {

	'use strict';

	exports['default'] = materializeCopyright['default'];

});
define('wge-examples/components/md-fixed-btn', ['exports', 'ember-cli-materialize/components/md-fixed-btn'], function (exports, md_fixed_btn) {

	'use strict';



	exports.default = md_fixed_btn.default;

});
define('wge-examples/components/md-fixed-btns', ['exports', 'ember-cli-materialize/components/md-fixed-btns'], function (exports, md_fixed_btns) {

	'use strict';



	exports.default = md_fixed_btns.default;

});
define('wge-examples/components/md-input-date', ['exports', 'ember-cli-materialize/components/md-input-date'], function (exports, materializeDateInput) {

	'use strict';

	exports['default'] = materializeDateInput['default'];

});
define('wge-examples/components/md-input-field', ['exports', 'ember-cli-materialize/components/md-input-field'], function (exports, materializeInputField) {

	'use strict';

	exports['default'] = materializeInputField['default'];

});
define('wge-examples/components/md-input', ['exports', 'ember-cli-materialize/components/md-input'], function (exports, materializeInput) {

	'use strict';

	exports['default'] = materializeInput['default'];

});
define('wge-examples/components/md-loader', ['exports', 'ember-cli-materialize/components/md-loader'], function (exports, materializeLoader) {

	'use strict';

	exports['default'] = materializeLoader['default'];

});
define('wge-examples/components/md-modal-container', ['exports', 'ember-cli-materialize/components/md-modal-container'], function (exports, mdModalContainer) {

	'use strict';

	exports['default'] = mdModalContainer['default'];

});
define('wge-examples/components/md-modal', ['exports', 'ember-cli-materialize/components/md-modal'], function (exports, materializeModal) {

	'use strict';

	exports['default'] = materializeModal['default'];

});
define('wge-examples/components/md-navbar', ['exports', 'ember-cli-materialize/components/md-navbar'], function (exports, MaterializeNavBar) {

	'use strict';

	exports['default'] = MaterializeNavBar['default'];

});
define('wge-examples/components/md-pagination', ['exports', 'ember-cli-materialize/components/md-pagination'], function (exports, materializePagination) {

	'use strict';

	exports['default'] = materializePagination['default'];

});
define('wge-examples/components/md-parallax', ['exports', 'ember-cli-materialize/components/md-parallax'], function (exports, materializeParallax) {

	'use strict';

	exports['default'] = materializeParallax['default'];

});
define('wge-examples/components/md-radio', ['exports', 'ember-cli-materialize/components/md-radio'], function (exports, materializeRadio) {

	'use strict';

	exports['default'] = materializeRadio['default'];

});
define('wge-examples/components/md-radios', ['exports', 'ember-cli-materialize/components/md-radios'], function (exports, materializeRadios) {

	'use strict';

	exports['default'] = materializeRadios['default'];

});
define('wge-examples/components/md-range', ['exports', 'ember-cli-materialize/components/md-range'], function (exports, materializeRange) {

	'use strict';

	exports['default'] = materializeRange['default'];

});
define('wge-examples/components/md-select', ['exports', 'ember-cli-materialize/components/md-select'], function (exports, materializeSelect) {

	'use strict';

	exports['default'] = materializeSelect['default'];

});
define('wge-examples/components/md-switch', ['exports', 'ember-cli-materialize/components/md-switch'], function (exports, materializeSwitch) {

	'use strict';

	exports['default'] = materializeSwitch['default'];

});
define('wge-examples/components/md-switches', ['exports', 'ember-cli-materialize/components/md-switches'], function (exports, materializeSwitches) {

	'use strict';

	exports['default'] = materializeSwitches['default'];

});
define('wge-examples/components/md-tab', ['exports', 'ember-cli-materialize/components/md-tab'], function (exports, materializeTabsTab) {

	'use strict';

	exports['default'] = materializeTabsTab['default'];

});
define('wge-examples/components/md-tabs', ['exports', 'ember-cli-materialize/components/md-tabs'], function (exports, materializeTabs) {

	'use strict';

	exports['default'] = materializeTabs['default'];

});
define('wge-examples/components/md-textarea', ['exports', 'ember-cli-materialize/components/md-textarea'], function (exports, materializeTextarea) {

	'use strict';

	exports['default'] = materializeTextarea['default'];

});
define('wge-examples/components/modal-dialog', ['exports', 'ember-modal-dialog/components/modal-dialog'], function (exports, Component) {

	'use strict';

	exports['default'] = Component['default'];

});
define('wge-examples/components/nav-bar', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Component.extend({
    classNames: ['navbar-fixed', 'nav-bar'],

    didInsertElement: function didInsertElement() {
      this._super.apply(this, arguments);
      this.$('.button-collapse').sideNav();
    }
  });

});
define('wge-examples/components/radio-button', ['exports', 'ember-radio-button/components/radio-button'], function (exports, RadioButton) {

	'use strict';

	exports['default'] = RadioButton['default'];

});
define('wge-examples/components/wge-card-action', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Component.extend({

    didInsertElement: function didInsertElement() {
      this.nearestWithProperty('_wgeCard').registerWgeAction(this);
    },

    willDestroyElement: function willDestroyElement() {
      this.nearestWithProperty('_wgeCard').unregisterWgeAction(this);
    },

    render: function render() {} // Don't render
  });

});
define('wge-examples/components/wge-card', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  var alias = Ember['default'].computed.alias;

  exports['default'] = Ember['default'].Component.extend({
    classNames: ['card'],
    _wgeCard: true,
    _cardActions: [],

    // Needed to ensure context of
    // child component templates
    // is the controller
    parentController: alias('targetObject'),

    registerWgeAction: function registerWgeAction(component) {
      this.get('_cardActions').addObject(component);
    },

    unregisterWgeAction: function unregisterWgeAction(component) {
      this.get('_cardActions').removeObject(component);
    }
  });

});
define('wge-examples/controllers/array', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Controller;

});
define('wge-examples/controllers/components/index', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Controller.extend({
    value: 'ok',
    actions: {
      accept: function accept() {
        alert('accepted');
      },
      cancel: function cancel() {
        alert('cancelled');
      }
    }
  });

});
define('wge-examples/controllers/computed-properties', ['exports', 'ember', 'wge-examples/utils/inject-object'], function (exports, Ember, injectObject) {

  'use strict';

  var computed = Ember['default'].computed;

  exports['default'] = Ember['default'].Controller.extend({
    router: injectObject['default']('router:main'),
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

    _selectedTabId: 'base',
    selectedTabId: computed('_selectedTabId', {
      get: function get() {
        return this.get('_selectedTabId');
      },
      set: function set(key, newVal) {
        this.transitionTo(this.get('choices').findBy('id', newVal).route);
        return newVal;
      }
    })
  });

});
define('wge-examples/controllers/computed-properties/composable-cpm', ['exports', 'ember', 'ember-cpm/macros/sum', 'ember-cpm/macros/sum-by', 'ember-cpm/macros/product'], function (exports, Ember, sum, sumBy, product) {

  'use strict';

  // BEGIN-SNIPPET cp-composable-cpm-example
  exports['default'] = Ember['default'].Controller.extend({
    order: [],
    queryParams: ['order'],

    taxPercent: 6, // in percent (i.e., 6 ==> 6%)
    tipPercent: 17, // in percent
    discount: 5, // dollars

    subtotal: sumBy['default']('order', 'price'),

    tipAmount: product['default'](product['default']('tipPercent', 0.01), 'subtotal'),
    taxAmount: product['default'](product['default']('taxPercent', 0.01), 'subtotal'),

    totalAmount: sum['default']('subtotal', 'tipAmount', 'taxAmount', product['default']('discount', -1)),

    actions: {
      addMenuItem: function addMenuItem(menuItem) {
        var order = this.get('order');
        order.addObject({
          id: new Date().valueOf(),
          name: menuItem.get('name'),
          price: menuItem.get('price')
        });
      },
      removeOrderItem: function removeOrderItem(orderItem) {
        this.get('order').removeObject(orderItem);
      }
    }
  });
  // END-SNIPPET

});
define('wge-examples/controllers/computed-properties/cpm', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  var computed = Ember['default'].computed;

  // BEGIN-SNIPPET cp-cpm-example
  exports['default'] = Ember['default'].Controller.extend({
    order: [],
    queryParams: ['order'],

    taxPercent: 6, // in percent (i.e., 6 ==> 6%)
    tipPercent: 17, // in percent
    discount: 5, // dollars

    orderPrices: computed.mapBy('order', 'price'),
    subtotal: computed.sum('orderPrices'),

    tipAmount: computed('subtotal', 'tipPercent', {
      get: function get() {
        return this.get('tipPercent') * 0.01 * this.get('subtotal');
      }
    }),

    taxAmount: computed('subtotal', 'taxPercent', {
      get: function get() {
        return this.get('taxPercent') * 0.01 * this.get('subtotal');
      }
    }),

    totalAmount: computed('subtotal', 'taxAmount', 'tipAmount', 'discount', {
      get: function get() {
        return this.get('subtotal') + this.get('taxAmount') + this.get('tipAmount') + -1 * this.get('discount');
      }
    }),

    actions: {
      addMenuItem: function addMenuItem(menuItem) {
        var order = this.get('order');
        order.addObject({
          id: new Date().valueOf(),
          name: menuItem.get('name'),
          price: menuItem.get('price')
        });
      },
      removeOrderItem: function removeOrderItem(orderItem) {
        this.get('order').removeObject(orderItem);
      }
    }
  });
  // END-SNIPPET

});
define('wge-examples/controllers/computed-properties/index', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  var computed = Ember['default'].computed;

  // BEGIN-SNIPPET cp-basic-example
  exports['default'] = Ember['default'].Controller.extend({
    order: [],
    queryParams: ['order'],

    taxPercent: 6, // in percent (i.e., 6 ==> 6%)
    tipPercent: 17, // in percent
    discount: 5, // dollars

    subtotal: computed('order.[]', {
      get: function get() {
        var prices = this.get('order').mapBy('price') || [];
        return prices.reduce(function (acc, val) {
          return acc + val;
        }, 0);
      }
    }),

    tipAmount: computed('subtotal', 'tipPercent', {
      get: function get() {
        return this.get('tipPercent') * 0.01 * this.get('subtotal');
      }
    }),

    taxAmount: computed('subtotal', 'taxPercent', {
      get: function get() {
        return this.get('taxPercent') * 0.01 * this.get('subtotal');
      }
    }),

    totalAmount: computed('subtotal', 'taxAmount', 'tipAmount', 'discount', {
      get: function get() {
        return this.get('subtotal') + this.get('taxAmount') + this.get('tipAmount') + -1 * this.get('discount');
      }
    }),

    actions: {
      addMenuItem: function addMenuItem(menuItem) {
        var order = this.get('order');
        order.addObject({
          id: new Date().valueOf(),
          name: menuItem.get('name'),
          price: menuItem.get('price')
        });
      },
      removeOrderItem: function removeOrderItem(orderItem) {
        this.get('order').removeObject(orderItem);
      }
    }
  });
  // END-SNIPPET

});
define('wge-examples/controllers/object', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Controller;

});
define('wge-examples/fixtures/restaurant-menu', ['exports'], function (exports) {

	'use strict';

	exports['default'] = [{ name: 'Hamburger', unitPrice: 5.3 }, { name: 'Fries', unitPrice: 2.1 }, { name: 'Hot Dog', unitPrice: 2.3 }];

});
define('wge-examples/helpers/nice-currency', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports.niceCurrency = niceCurrency;

  function niceCurrency(params /*, hash*/) {
    return '$ ' + parseFloat(params, 10).toFixed(2);
  }

  exports['default'] = Ember['default'].HTMLBars.makeBoundHelper(niceCurrency);

});
define('wge-examples/initializers/add-modals-container', ['exports', 'ember-modal-dialog/initializers/add-modals-container'], function (exports, initialize) {

  'use strict';

  exports['default'] = {
    name: 'add-modals-container',
    initialize: initialize['default']
  };

});
define('wge-examples/initializers/app-version', ['exports', 'wge-examples/config/environment', 'ember'], function (exports, config, Ember) {

  'use strict';

  var classify = Ember['default'].String.classify;
  var registered = false;

  exports['default'] = {
    name: 'App Version',
    initialize: function initialize(container, application) {
      if (!registered) {
        var appName = classify(application.toString());
        Ember['default'].libraries.register(appName, config['default'].APP.version);
        registered = true;
      }
    }
  };

});
define('wge-examples/initializers/export-application-global', ['exports', 'ember', 'wge-examples/config/environment'], function (exports, Ember, config) {

  'use strict';

  exports.initialize = initialize;

  function initialize(container, application) {
    var classifiedName = Ember['default'].String.classify(config['default'].modulePrefix);

    if (config['default'].exportApplicationGlobal && !window[classifiedName]) {
      window[classifiedName] = application;
    }
  }

  ;

  exports['default'] = {
    name: 'export-application-global',

    initialize: initialize
  };

});
define('wge-examples/initializers/key-responder', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = {
    name: 'ember-key-responder',

    initialize: function initialize(container, application) {
      application.inject('view', 'keyResponder', 'key-responder:main');
      application.inject('component', 'keyResponder', 'key-responder:main');

      //TextField/TextArea are currently uninjectable, so we're going to hack our
      //way in
      Ember['default'].TextSupport.reopen({
        keyResponder: Ember['default'].computed(function () {
          return this.container.lookup('key-responder:main');
        }).readOnly()
      });

      // Set up a handler on the document for keyboard events that are not
      // handled by Ember's event dispatcher.
      Ember['default'].$(document).on('keyup.outside_ember_event_delegation', null, function (event) {

        if (Ember['default'].$(event.target).closest('.ember-view').length === 0) {
          var keyResponder = container.lookup('key-responder:main');
          var currentKeyResponder = keyResponder.get('current');
          if (currentKeyResponder && currentKeyResponder.get('isVisible')) {
            return currentKeyResponder.respondToKeyEvent(event, currentKeyResponder);
          }
        }

        return true;
      });

      // Set up a handler on the ApplicationView for keyboard events that were
      // not handled by the current KeyResponder yet
      container.lookupFactory('view:application').reopen({
        delegateToKeyResponder: Ember['default'].on('keyUp', function (event) {
          var currentKeyResponder = this.get('keyResponder.current');
          if (currentKeyResponder && currentKeyResponder.get('isVisible')) {
            // check to see if the event target is the keyResponder or the
            // keyResponders parents.  if so, no need to dispatch as it has
            // already had a chance to handle this event.
            var id = '#' + currentKeyResponder.get('elementId');
            if (Ember['default'].$(event.target).closest(id).length === 1) {
              return true;
            }
            return currentKeyResponder.respondToKeyEvent(event, currentKeyResponder);
          }
          return true;
        })
      });
    }
  };

});
define('wge-examples/initializers/link-view', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports.initialize = initialize;

  function initialize() {
    Ember['default'].LinkView.reopen({
      attributeBindings: ['data-activates']
    });
  }

  exports['default'] = {
    name: 'link-view',
    initialize: initialize
  };
  /* container, application */

});
define('wge-examples/key-responder', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  var get = Ember['default'].get;

  /*
    Holds a stack of key responder views. With this we can neatly handle
    restoring the previous key responder when some modal UI element is closed.
    There are a few simple rules that governs the usage of the stack:
     - mouse click does .replace (this should also be used for programmatically taking focus when not a modal element)
     - opening a modal UI element does .push
     - closing a modal element does .pop

    Also noteworthy is that a view will be signaled that it loses the key focus
    only when it's popped off the stack, not when something is pushed on top. The
    idea is that when a modal UI element is opened, we know that the previously
    focused view will re-gain the focus as soon as the modal element is closed.
    So if the previously focused view was e.g. in the middle of some edit
    operation, it shouldn't cancel that operation.
  */
  var KeyResponder = Ember['default'].ArrayProxy.extend({
    init: function init() {
      this.set('isActive', true);
      this.set('content', Ember['default'].A());
      this._super.apply(this, arguments);
    },

    current: Ember['default'].computed.readOnly('lastObject'),
    pushView: function pushView(view, wasTriggeredByFocus) {
      if (!Ember['default'].isNone(view)) {
        view.trigger('willBecomeKeyResponder', wasTriggeredByFocus);
        this.pushObject(view);
        view.trigger('didBecomeKeyResponder', wasTriggeredByFocus);
      }
      return view;
    },

    resume: function resume() {
      this.set('isActive', true);
    },

    pause: function pause() {
      this.set('isActive', false);
    },

    popView: function popView(wasTriggeredByFocus) {
      if (get(this, 'length') > 0) {
        var view = get(this, 'current');
        if (view) {
          view.trigger('willLoseKeyResponder', wasTriggeredByFocus);
        }
        view = this.popObject();
        if (view) {
          view.trigger('didLoseKeyResponder', wasTriggeredByFocus);
        }
        return view;
      } else {
        return undefined;
      }
    },

    replaceView: function replaceView(view, wasTriggeredByFocus) {
      if (get(this, 'current') !== view) {
        this.popView(wasTriggeredByFocus);
        return this.pushView(view, wasTriggeredByFocus);
      }
    }
  });

  exports['default'] = KeyResponder;

  var KEY_EVENTS = {
    8: 'deleteBackward',
    9: 'insertTab',
    13: 'insertNewline',
    27: 'cancel',
    32: 'insertSpace',
    37: 'moveLeft',
    38: 'moveUp',
    39: 'moveRight',
    40: 'moveDown',
    46: 'deleteForward'
  };

  var MODIFIED_KEY_EVENTS = {
    8: 'deleteForward',
    9: 'insertBacktab',
    37: 'moveLeftAndModifySelection',
    38: 'moveUpAndModifySelection',
    39: 'moveRightAndModifySelection',
    40: 'moveDownAndModifySelection'
  };

  var KeyResponderSupportViewMixin = Ember['default'].Mixin.create({
    // Set to true in your view if you want to accept key responder status (which
    // is needed for handling key events)
    acceptsKeyResponder: false,
    canBecomeKeyResponder: Ember['default'].computed('acceptsKeyResponder', 'disabled', 'isVisible', function () {
      return get(this, 'acceptsKeyResponder') && !get(this, 'disabled') && get(this, 'isVisible');
    }).readOnly(),

    becomeKeyResponderViaMouseDown: Ember['default'].on('mouseDown', function (evt) {
      var responder = this.get('keyResponder');
      if (responder === undefined) {
        return;
      }

      Ember['default'].run.later(function () {
        responder._inEventBubblingPhase = undefined;
      }, 0);

      if (responder._inEventBubblingPhase === undefined) {
        responder._inEventBubblingPhase = true;
        this.becomeKeyResponder(false);
      }
    }),

    /*
      Sets this view as the target of key events. Call this if you need to make
      this happen programmatically.  This gets also called on mouseDown if the
      view handles that, returns true and doesn't have property
      'acceptsKeyResponder'
      set to false. If mouseDown returned true but 'acceptsKeyResponder' is
      false, this call is propagated to the parent view.
       If called with no parameters or with replace = true, the current key
      responder is first popped off the stack and this view is then pushed. See
      comments for Ember.KeyResponderStack above for more insight.
    */
    becomeKeyResponder: function becomeKeyResponder(replace, wasTriggeredByFocus) {
      if (wasTriggeredByFocus === undefined) {
        wasTriggeredByFocus = false;
      }

      var keyResponder = get(this, 'keyResponder');

      if (!keyResponder) {
        return;
      }

      if (get(keyResponder, 'current') === this) {
        return;
      }

      if (get(this, 'canBecomeKeyResponder')) {
        if (replace === undefined || replace === true) {
          return keyResponder.replaceView(this, wasTriggeredByFocus);
        } else {
          return keyResponder.pushView(this, wasTriggeredByFocus);
        }
      } else {
        var parent = get(this, 'parentView');

        if (parent && parent.becomeKeyResponder) {
          return parent.becomeKeyResponder(replace, wasTriggeredByFocus);
        }
      }
    },

    becomeKeyResponderViaFocus: function becomeKeyResponderViaFocus() {
      return this.becomeKeyResponder(true, true);
    },

    /*
      Resign key responder status by popping the head off the stack. The head
      might or might not be this view, depending on whether user clicked anything
      since this view became the key responder. The new key responder
      will be the next view in the stack, if any.
    */
    resignKeyResponder: function resignKeyResponder(wasTriggeredByFocus) {
      if (wasTriggeredByFocus === undefined) {
        wasTriggeredByFocus = false;
      }

      var keyResponder = get(this, 'keyResponder');

      if (!keyResponder) {
        return;
      }

      keyResponder.popView(wasTriggeredByFocus);
    },

    resignKeyResponderViaFocus: function resignKeyResponderViaFocus() {
      return this.resignKeyResponder(true);
    },

    respondToKeyEvent: function respondToKeyEvent(event) {
      Ember['default'].run(this, function () {
        if (get(this, 'keyResponder.isActive')) {
          if (get(this, 'keyResponder.current.canBecomeKeyResponder')) {
            get(this, 'keyResponder.current').interpretKeyEvents(event);
          }
        }
      });
    },

    interpretKeyEvents: function interpretKeyEvents(event) {
      var mapping = event.shiftKey ? MODIFIED_KEY_EVENTS : KEY_EVENTS;
      var eventName = mapping[event.keyCode];

      if (eventName && this.has(eventName)) {
        return this.trigger(eventName, event);
      }

      return false;
    }
  });

  Ember['default'].View.reopen(KeyResponderSupportViewMixin);
  Ember['default'].Component.reopen(KeyResponderSupportViewMixin);

  var KeyResponderInputSupport = Ember['default'].Mixin.create({
    acceptsKeyResponder: true,
    init: function init() {
      this._super.apply(this, arguments);
      this.on('focusIn', this, this.becomeKeyResponderViaFocus);
      this.on('focusOut', this, this.resignKeyResponderViaBlur);
    },

    didBecomeKeyResponder: function didBecomeKeyResponder(wasTriggeredByFocus) {
      if (!wasTriggeredByFocus && this._state === 'inDOM') {
        this.$().focus();
      }
    },

    didLoseKeyResponder: function didLoseKeyResponder(wasTriggeredByFocus) {
      if (!wasTriggeredByFocus && this._state === 'inDOM') {
        this.$().blur();
      }
    }
  });

  Ember['default'].TextSupport.reopen(KeyResponderInputSupport);
  Ember['default'].Checkbox.reopen(KeyResponderInputSupport);
  Ember['default'].Select.reopen(KeyResponderInputSupport);

  exports.KEY_EVENTS = KEY_EVENTS;
  exports.MODIFIED_KEY_EVENTS = MODIFIED_KEY_EVENTS;
  exports.KeyResponderInputSupport = KeyResponderInputSupport;

});
define('wge-examples/models/menu-item', ['exports', 'ember-data'], function (exports, DS) {

  'use strict';

  var attr = DS['default'].attr;

  exports['default'] = DS['default'].Model.extend({
    name: attr('string'),
    price: attr('number')
  });

});
define('wge-examples/router', ['exports', 'ember', 'wge-examples/config/environment'], function (exports, Ember, config) {

  'use strict';

  var Router = Ember['default'].Router.extend({
    location: config['default'].locationType
  });

  Router.map(function () {
    this.route('computed-properties', function () {
      this.route('cpm');
      this.route('composable-cpm');
    });
    this.route('components', function () {});
    this.route('design-patterns', function () {});
    this.route('testing', function () {
      this.route('pageobject');
      this.route('test');
    });
    this.route('component');
  });

  exports['default'] = Router;

});
define('wge-examples/routes/components', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Route.extend({});

});
define('wge-examples/routes/components/index', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Route.extend({});

});
define('wge-examples/routes/computed-properties', ['exports', 'ember', 'pretender', 'wge-examples/tests/page-objects/restaurant-menu'], function (exports, Ember, Pretender, RestaurantMenu) {

  'use strict';

  exports['default'] = Ember['default'].Route.extend({
    init: function init() {
      this._super.apply(this, arguments);
      var server = new Pretender['default']();
      this.set('server', server);
      new RestaurantMenu['default']().prepareRequests(server);
    },

    destroy: function destroy() {
      this.get('server').shutdown();
    }
  });

});
define('wge-examples/routes/computed-properties/composable-cpm', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Route.extend({
    templateName: 'computed-properties/index',

    model: function model() {
      return this.store.find('menu-item');
    },

    setupController: function setupController(controller) {
      this._super.apply(this, arguments);
      this.controllerFor('computed-properties').set('_selectedTabId', 'composable-cpm');
      controller.set('codeExample', 'cp-composable-cpm-example.js');
    }
  });

});
define('wge-examples/routes/computed-properties/cpm', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Route.extend({
    templateName: 'computed-properties/index',
    model: function model() {
      return this.store.find('menu-item');
    },

    setupController: function setupController(controller) {
      this._super.apply(this, arguments);
      this.controllerFor('computed-properties').set('_selectedTabId', 'cpm');
      controller.set('codeExample', 'cp-cpm-example.js');
    }
  });

});
define('wge-examples/routes/computed-properties/index', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Route.extend({

    model: function model() {
      return this.store.find('menu-item');
    },

    setupController: function setupController(controller) {
      this._super.apply(this, arguments);
      this.controllerFor('computed-properties').set('_selectedTabId', 'basic');
      controller.set('codeExample', 'cp-basic-example.js');
    }
  });

});
define('wge-examples/routes/design-patterns', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Route.extend({});

});
define('wge-examples/routes/design-patterns/index', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Route.extend({});

});
define('wge-examples/routes/index', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Route.extend({});

});
define('wge-examples/routes/testing', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Route.extend({});

});
define('wge-examples/routes/testing/index', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Route.extend({});

});
define('wge-examples/routes/testing/pageobject', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Route.extend({});

});
define('wge-examples/routes/testing/test', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Route.extend({});

});
define('wge-examples/services/modal-dialog', ['exports', 'ember-modal-dialog/services/modal-dialog'], function (exports, Service) {

	'use strict';

	exports['default'] = Service['default'];

});
define('wge-examples/snippets', ['exports'], function (exports) {

  'use strict';

  exports['default'] = {
    "cp-basic-example.js": "export default Ember.Controller.extend({\n  order: [],\n  queryParams: ['order'],\n\n  taxPercent: 6,   // in percent (i.e., 6 ==> 6%)\n  tipPercent: 17,  // in percent\n  discount: 5, // dollars\n\n  subtotal: computed('order.[]', {\n    get() {\n      let prices = this.get('order').mapBy('price') || [];\n      return prices.reduce((acc, val) => acc + val, 0);\n    }\n  }),\n\n  tipAmount: computed('subtotal', 'tipPercent', {\n    get() {\n      return this.get('tipPercent') * 0.01 * this.get('subtotal');\n    }\n  }),\n\n  taxAmount: computed('subtotal', 'taxPercent', {\n    get() {\n      return this.get('taxPercent') * 0.01 * this.get('subtotal');\n    }\n  }),\n\n  totalAmount: computed('subtotal', 'taxAmount', 'tipAmount', 'discount', {\n    get() {\n      return this.get('subtotal') +\n        this.get('taxAmount') +\n        this.get('tipAmount') +\n        (-1 * this.get('discount'));\n    }\n  }),\n\n  actions: {\n    addMenuItem(menuItem) {\n      let order = this.get('order');\n      order.addObject({\n        id: (new Date()).valueOf(),\n        name: menuItem.get('name'),\n        price: menuItem.get('price')\n      });\n    },\n    removeOrderItem(orderItem) {\n      this.get('order').removeObject(orderItem);\n    }\n  }\n});",
    "cp-composable-cpm-example.js": "import Ember from 'ember';\n\nimport sum from 'ember-cpm/macros/sum';\nimport sumBy from 'ember-cpm/macros/sum-by';\nimport product from 'ember-cpm/macros/product';\n\nexport default Ember.Controller.extend({\n  order: [],\n  queryParams: ['order'],\n\n  taxPercent: 6,   // in percent (i.e., 6 ==> 6%)\n  tipPercent: 17,  // in percent\n  discount: 5, // dollars\n\n  subtotal: sumBy('order', 'price'),\n\n  tipAmount: product(product('tipPercent', 0.01), 'subtotal'),\n  taxAmount: product(product('taxPercent', 0.01), 'subtotal'),\n\n  totalAmount: sum(\n    'subtotal',\n    'tipAmount',\n    'taxAmount',\n    product('discount', -1)\n  ),\n\n  actions: {\n    addMenuItem(menuItem) {\n      let order = this.get('order');\n      order.addObject({\n        id: (new Date()).valueOf(),\n        name: menuItem.get('name'),\n        price: menuItem.get('price')\n      });\n    },\n    removeOrderItem(orderItem) {\n      this.get('order').removeObject(orderItem);\n    }\n  }\n});",
    "cp-cpm-example.js": "export default Ember.Controller.extend({\n  order: [],\n  queryParams: ['order'],\n\n  taxPercent: 6,   // in percent (i.e., 6 ==> 6%)\n  tipPercent: 17,  // in percent\n  discount: 5, // dollars\n\n  orderPrices: computed.mapBy('order', 'price'),\n  subtotal: computed.sum('orderPrices'),\n\n  tipAmount: computed('subtotal', 'tipPercent', {\n    get() {\n      return this.get('tipPercent') * 0.01 * this.get('subtotal');\n    }\n  }),\n\n  taxAmount: computed('subtotal', 'taxPercent', {\n    get() {\n      return this.get('taxPercent') * 0.01 * this.get('subtotal');\n    }\n  }),\n\n  totalAmount: computed('subtotal', 'taxAmount', 'tipAmount', 'discount', {\n    get() {\n      return this.get('subtotal') +\n        this.get('taxAmount') +\n        this.get('tipAmount') +\n        (-1 * this.get('discount'));\n    }\n  }),\n\n  actions: {\n    addMenuItem(menuItem) {\n      let order = this.get('order');\n      order.addObject({\n        id: (new Date()).valueOf(),\n        name: menuItem.get('name'),\n        price: menuItem.get('price')\n      });\n    },\n    removeOrderItem(orderItem) {\n      this.get('order').removeObject(orderItem);\n    }\n  }\n});",
    "po-basic-example.js": "class Base {\n  constructor(assert) {\n    this.assert = assert;\n  }\n\n  assertPath(path) {\n    andThen(() => {\n      this.assert.equal(currentPath(), path);\n    });\n    return this;\n  }\n\n  $(selector) {\n    let results = $(selector);\n    if (results.length === 0) {\n      this.assert.ok(false, `No element found with selector \"${selector}\"`);\n    }\n    return results;\n  }\n\n  _getSelectorByAutoId(autoId) {\n    return `[data-autoid=\"${autoId}\"]`;\n  }\n\n  _getElementByAutoId(autoId) {\n    return this.$(this._getSelectorByAutoId(autoId))[0];\n  }\n\n  _clickByAutoId(autoId) {\n    click(this._getSelectorByAutoId(autoId));\n    return this;\n  }\n\n  _valueByAutoId(autoId) {\n    return this._getElementByAutoId(autoId).innerHTML;\n  }\n}\n\nexport default Base;",
    "po-rm-example.js": "\nimport Base from './base';\n\nclass RestaurantMenu extends Base {\n  prepareRequests(server) {\n    server.get('/api/menu_items', function() {\n      return [200, {}, JSON.stringify({\n        'menu-items': [{\n          id: 1,\n          name: 'Hamburger',\n          price: 9\n        }, {\n          id: 2,\n          name: 'Fries',\n          price: 4.5\n        }, {\n          id: 3,\n          name: 'Hot Dog',\n          price: 4\n        }]\n      })];\n    });\n  }\n\n  visit(server, url) {\n    this.prepareRequests(server);\n    visit(url);\n    return this;\n  }\n\n  clickMenuAddButton(itemName) {\n    click(`tr[data-item-name=\"${itemName}\"] button`);\n    return this;\n  }\n\n  subtotal() {\n    return this._valueByAutoId('subtotal-amount');\n  }\n\n  total() {\n    return this._valueByAutoId('total-amount');\n  }\n\n  tax() {\n    return this.$('[data-autoid=\"tax-amount\"]')[0].innerHTML;\n  }\n\n  tip() {\n    return this.$('[data-autoid=\"tip-amount\"]')[0].innerHTML;\n  }\n\n  assertSubtotal(subtotal) {\n    andThen(() => {\n      this.assert.equal(this.subtotal(), subtotal, `Subtotal should be ${subtotal}`);\n    });\n    return this;\n  }\n\n  assertTotal(total) {\n    andThen(() => {\n      this.assert.equal(this.total(), total, `Total should be ${total}`);\n    });\n    return this;\n  }\n\n  clickRemoveTopOrderItemButton() {\n    let sel = this._getSelectorByAutoId('order-table');\n    click(`${sel} tr:first-child .btn`);\n    return this;\n  }\n\n  toggleConfiguration() {\n    click('.configure-collapsible li:first-child .collapsible-header');\n    return this;\n  }\n\n  setTip(val) {\n    andThen(() => {\n      this.$('.tip-field input').val(val);\n      this.$('.tip-field input').blur();\n    });\n    return this;\n  }\n\n  setTax(val) {\n    andThen(() => {\n      this.$('.tax-field input').val(val);\n      this.$('.tax-field input').blur();\n    });\n    return this;\n  }\n\n  setDiscount(val) {\n    andThen(() => {\n      this.$('.discount-field input').val(val);\n      this.$('.discount-field input').blur();\n    });\n    return this;\n  }\n}\n\nexport default RestaurantMenu;",
    "rm-test-example.js": "\ntest('visiting /computed-properties', function(assert) {\n\n  new RestaurantMenu(assert)\n    .visit(server, '/computed-properties/composable-cpm')\n\n    // Make sure we're at the right place\n    .assertPath('computed-properties.composable-cpm')\n\n    // Add a few burgers\n    .clickMenuAddButton('Hamburger')\n      .clickMenuAddButton('Hamburger')\n      .clickMenuAddButton('Hamburger')\n      .clickMenuAddButton('Hamburger')\n      .assertSubtotal('$ 36.00')\n\n    // Remove one\n    .clickRemoveTopOrderItemButton()\n      .assertSubtotal('$ 27.00')\n\n    // And another\n    .clickRemoveTopOrderItemButton()\n      .assertSubtotal('$ 18.00')\n\n    // Change the tip percentage\n    .toggleConfiguration()\n      .setTip(31)\n      .assertTotal('$ 19.66')\n\n    // Change the tax percentage\n    .toggleConfiguration()\n      .setTax(8.5)\n      .assertTotal('$ 20.11');\n\n});"
  };

});
define('wge-examples/templates/application', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      var child0 = (function() {
        return {
          isHTMLBars: true,
          revision: "Ember@1.12.0",
          blockParams: 0,
          cachedFragment: null,
          hasRendered: false,
          build: function build(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("    ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          render: function render(context, env, contextualElement) {
            var dom = env.dom;
            var hooks = env.hooks, inline = hooks.inline;
            dom.detectNamespace(contextualElement);
            var fragment;
            if (env.useFragmentCache && dom.canClone) {
              if (this.cachedFragment === null) {
                fragment = this.build(dom);
                if (this.hasRendered) {
                  this.cachedFragment = fragment;
                } else {
                  this.hasRendered = true;
                }
              }
              if (this.cachedFragment) {
                fragment = dom.cloneNode(this.cachedFragment, true);
              }
            } else {
              fragment = this.build(dom);
            }
            var morph0 = dom.createMorphAt(fragment,1,1,contextualElement);
            inline(env, morph0, context, "link-to", ["Computed Properties", "computed-properties"], {});
            return fragment;
          }
        };
      }());
      var child1 = (function() {
        return {
          isHTMLBars: true,
          revision: "Ember@1.12.0",
          blockParams: 0,
          cachedFragment: null,
          hasRendered: false,
          build: function build(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("    ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          render: function render(context, env, contextualElement) {
            var dom = env.dom;
            var hooks = env.hooks, inline = hooks.inline;
            dom.detectNamespace(contextualElement);
            var fragment;
            if (env.useFragmentCache && dom.canClone) {
              if (this.cachedFragment === null) {
                fragment = this.build(dom);
                if (this.hasRendered) {
                  this.cachedFragment = fragment;
                } else {
                  this.hasRendered = true;
                }
              }
              if (this.cachedFragment) {
                fragment = dom.cloneNode(this.cachedFragment, true);
              }
            } else {
              fragment = this.build(dom);
            }
            var morph0 = dom.createMorphAt(fragment,1,1,contextualElement);
            inline(env, morph0, context, "link-to", ["Components", "components"], {});
            return fragment;
          }
        };
      }());
      var child2 = (function() {
        return {
          isHTMLBars: true,
          revision: "Ember@1.12.0",
          blockParams: 0,
          cachedFragment: null,
          hasRendered: false,
          build: function build(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("    ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          render: function render(context, env, contextualElement) {
            var dom = env.dom;
            var hooks = env.hooks, inline = hooks.inline;
            dom.detectNamespace(contextualElement);
            var fragment;
            if (env.useFragmentCache && dom.canClone) {
              if (this.cachedFragment === null) {
                fragment = this.build(dom);
                if (this.hasRendered) {
                  this.cachedFragment = fragment;
                } else {
                  this.hasRendered = true;
                }
              }
              if (this.cachedFragment) {
                fragment = dom.cloneNode(this.cachedFragment, true);
              }
            } else {
              fragment = this.build(dom);
            }
            var morph0 = dom.createMorphAt(fragment,1,1,contextualElement);
            inline(env, morph0, context, "link-to", ["Testing", "testing"], {});
            return fragment;
          }
        };
      }());
      return {
        isHTMLBars: true,
        revision: "Ember@1.12.0",
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          var hooks = env.hooks, block = hooks.block;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          var morph0 = dom.createMorphAt(fragment,0,0,contextualElement);
          var morph1 = dom.createMorphAt(fragment,1,1,contextualElement);
          var morph2 = dom.createMorphAt(fragment,2,2,contextualElement);
          dom.insertBoundary(fragment, null);
          dom.insertBoundary(fragment, 0);
          block(env, morph0, context, "link-to", ["computed-properties"], {"tagName": "li"}, child0, null);
          block(env, morph1, context, "link-to", ["components.index"], {"tagName": "li"}, child1, null);
          block(env, morph2, context, "link-to", ["testing.index"], {"tagName": "li"}, child2, null);
          return fragment;
        }
      };
    }());
    return {
      isHTMLBars: true,
      revision: "Ember@1.12.0",
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("main");
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, block = hooks.block, content = hooks.content;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        var morph0 = dom.createMorphAt(fragment,0,0,contextualElement);
        var morph1 = dom.createMorphAt(dom.childAt(fragment, [1]),1,1);
        var morph2 = dom.createMorphAt(fragment,3,3,contextualElement);
        dom.insertBoundary(fragment, null);
        dom.insertBoundary(fragment, 0);
        block(env, morph0, context, "nav-bar", [], {}, child0, null);
        content(env, morph1, context, "outlet");
        content(env, morph2, context, "md-modal-container");
        return fragment;
      }
    };
  }()));

});
define('wge-examples/templates/components', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    return {
      isHTMLBars: true,
      revision: "Ember@1.12.0",
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("h3");
        var el2 = dom.createTextNode("Components");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, content = hooks.content;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        var morph0 = dom.createMorphAt(fragment,2,2,contextualElement);
        content(env, morph0, context, "outlet");
        return fragment;
      }
    };
  }()));

});
define('wge-examples/templates/components/code-snippet', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    return {
      isHTMLBars: true,
      revision: "Ember@1.12.0",
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, content = hooks.content;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        var morph0 = dom.createMorphAt(fragment,0,0,contextualElement);
        dom.insertBoundary(fragment, 0);
        content(env, morph0, context, "source");
        return fragment;
      }
    };
  }()));

});
define('wge-examples/templates/components/index', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      var child0 = (function() {
        return {
          isHTMLBars: true,
          revision: "Ember@1.12.0",
          blockParams: 0,
          cachedFragment: null,
          hasRendered: false,
          build: function build(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("    ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("span");
            var el2 = dom.createTextNode("\n      Accept\n    ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          render: function render(context, env, contextualElement) {
            var dom = env.dom;
            var hooks = env.hooks, element = hooks.element;
            dom.detectNamespace(contextualElement);
            var fragment;
            if (env.useFragmentCache && dom.canClone) {
              if (this.cachedFragment === null) {
                fragment = this.build(dom);
                if (this.hasRendered) {
                  this.cachedFragment = fragment;
                } else {
                  this.hasRendered = true;
                }
              }
              if (this.cachedFragment) {
                fragment = dom.cloneNode(this.cachedFragment, true);
              }
            } else {
              fragment = this.build(dom);
            }
            var element1 = dom.childAt(fragment, [1]);
            element(env, element1, context, "action", ["accept"], {});
            return fragment;
          }
        };
      }());
      var child1 = (function() {
        return {
          isHTMLBars: true,
          revision: "Ember@1.12.0",
          blockParams: 0,
          cachedFragment: null,
          hasRendered: false,
          build: function build(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("    ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("span");
            var el2 = dom.createTextNode("\n      Cancel\n    ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          render: function render(context, env, contextualElement) {
            var dom = env.dom;
            var hooks = env.hooks, element = hooks.element;
            dom.detectNamespace(contextualElement);
            var fragment;
            if (env.useFragmentCache && dom.canClone) {
              if (this.cachedFragment === null) {
                fragment = this.build(dom);
                if (this.hasRendered) {
                  this.cachedFragment = fragment;
                } else {
                  this.hasRendered = true;
                }
              }
              if (this.cachedFragment) {
                fragment = dom.cloneNode(this.cachedFragment, true);
              }
            } else {
              fragment = this.build(dom);
            }
            var element0 = dom.childAt(fragment, [1]);
            element(env, element0, context, "action", ["cancel"], {});
            return fragment;
          }
        };
      }());
      return {
        isHTMLBars: true,
        revision: "Ember@1.12.0",
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  This will go in the body of the card\n");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          var hooks = env.hooks, block = hooks.block;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          var morph0 = dom.createMorphAt(fragment,1,1,contextualElement);
          var morph1 = dom.createMorphAt(fragment,2,2,contextualElement);
          dom.insertBoundary(fragment, null);
          block(env, morph0, context, "wge-card-action", [], {}, child0, null);
          block(env, morph1, context, "wge-card-action", [], {}, child1, null);
          return fragment;
        }
      };
    }());
    return {
      isHTMLBars: true,
      revision: "Ember@1.12.0",
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","row");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","col m6 s12");
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, block = hooks.block;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        var morph0 = dom.createMorphAt(dom.childAt(fragment, [0, 1]),1,1);
        block(env, morph0, context, "wge-card", [], {"title": "Wicked Good Ember", "class": "blue-grey darken-1"}, child0, null);
        return fragment;
      }
    };
  }()));

});
define('wge-examples/templates/components/labeled-radio-button', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    return {
      isHTMLBars: true,
      revision: "Ember@1.12.0",
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, get = hooks.get, inline = hooks.inline, content = hooks.content;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        var morph0 = dom.createMorphAt(fragment,0,0,contextualElement);
        var morph1 = dom.createMorphAt(fragment,2,2,contextualElement);
        dom.insertBoundary(fragment, 0);
        inline(env, morph0, context, "radio-button", [], {"changed": "innerRadioChanged", "disabled": get(env, context, "disabled"), "groupValue": get(env, context, "groupValue"), "name": get(env, context, "name"), "required": get(env, context, "required"), "value": get(env, context, "value")});
        content(env, morph1, context, "yield");
        return fragment;
      }
    };
  }()));

});
define('wge-examples/templates/components/modal-dialog', ['exports', 'ember-modal-dialog/templates/components/modal-dialog'], function (exports, template) {

	'use strict';

	exports['default'] = template['default'];

});
define('wge-examples/templates/components/nav-bar', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    return {
      isHTMLBars: true,
      revision: "Ember@1.12.0",
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("nav");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","nav-wrapper");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","container-fluid");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("a");
        dom.setAttribute(el4,"href","#");
        dom.setAttribute(el4,"data-activates","mobile-demo");
        dom.setAttribute(el4,"class","button-collapse");
        var el5 = dom.createElement("i");
        dom.setAttribute(el5,"class","mdi-navigation-menu");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("ul");
        dom.setAttribute(el1,"class","side-nav fixed");
        dom.setAttribute(el1,"id","mobile-demo");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, inline = hooks.inline, content = hooks.content;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        var element0 = dom.childAt(fragment, [0, 1, 1]);
        var morph0 = dom.createMorphAt(element0,1,1);
        var morph1 = dom.createMorphAt(element0,3,3);
        var morph2 = dom.createMorphAt(dom.childAt(fragment, [2]),1,1);
        inline(env, morph0, context, "link-to", ["WGE - Composability", "index"], {"class": "brand-logo hide-on-large-only"});
        inline(env, morph1, context, "link-to", ["Wicked Good Ember - Composability", "index"], {"class": "brand-logo hide-on-med-and-down"});
        content(env, morph2, context, "yield");
        return fragment;
      }
    };
  }()));

});
define('wge-examples/templates/components/wge-card-action', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    return {
      isHTMLBars: true,
      revision: "Ember@1.12.0",
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, content = hooks.content;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        var morph0 = dom.createMorphAt(fragment,0,0,contextualElement);
        dom.insertBoundary(fragment, 0);
        content(env, morph0, context, "yield");
        return fragment;
      }
    };
  }()));

});
define('wge-examples/templates/components/wge-card', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      var child0 = (function() {
        return {
          isHTMLBars: true,
          revision: "Ember@1.12.0",
          blockParams: 1,
          cachedFragment: null,
          hasRendered: false,
          build: function build(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("      ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          render: function render(context, env, contextualElement, blockArguments) {
            var dom = env.dom;
            var hooks = env.hooks, set = hooks.set, get = hooks.get, inline = hooks.inline;
            dom.detectNamespace(contextualElement);
            var fragment;
            if (env.useFragmentCache && dom.canClone) {
              if (this.cachedFragment === null) {
                fragment = this.build(dom);
                if (this.hasRendered) {
                  this.cachedFragment = fragment;
                } else {
                  this.hasRendered = true;
                }
              }
              if (this.cachedFragment) {
                fragment = dom.cloneNode(this.cachedFragment, true);
              }
            } else {
              fragment = this.build(dom);
            }
            var morph0 = dom.createMorphAt(fragment,1,1,contextualElement);
            set(env, context, "cardAction", blockArguments[0]);
            inline(env, morph0, context, "view", [get(env, context, "Ember.View")], {"tagName": "a", "template": get(env, context, "cardAction.template"), "controller": get(env, context, "parentController")});
            return fragment;
          }
        };
      }());
      return {
        isHTMLBars: true,
        revision: "Ember@1.12.0",
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1,"class","card-action");
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("  ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          var hooks = env.hooks, get = hooks.get, block = hooks.block;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          var morph0 = dom.createMorphAt(dom.childAt(fragment, [1]),1,1);
          block(env, morph0, context, "each", [get(env, context, "_cardActions")], {}, child0, null);
          return fragment;
        }
      };
    }());
    return {
      isHTMLBars: true,
      revision: "Ember@1.12.0",
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","card-content white-text");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","card-title");
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, content = hooks.content, get = hooks.get, block = hooks.block;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        var element0 = dom.childAt(fragment, [0]);
        var morph0 = dom.createMorphAt(dom.childAt(element0, [1]),0,0);
        var morph1 = dom.createMorphAt(element0,3,3);
        var morph2 = dom.createMorphAt(fragment,2,2,contextualElement);
        dom.insertBoundary(fragment, null);
        content(env, morph0, context, "title");
        content(env, morph1, context, "yield");
        block(env, morph2, context, "if", [get(env, context, "_cardActions.length")], {}, child0, null);
        return fragment;
      }
    };
  }()));

});
define('wge-examples/templates/computed-properties', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      return {
        isHTMLBars: true,
        revision: "Ember@1.12.0",
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          var hooks = env.hooks, inline = hooks.inline;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          var morph0 = dom.createMorphAt(fragment,1,1,contextualElement);
          var morph1 = dom.createMorphAt(fragment,3,3,contextualElement);
          var morph2 = dom.createMorphAt(fragment,5,5,contextualElement);
          inline(env, morph0, context, "md-tab", [], {"value": "basic", "title": "Basic"});
          inline(env, morph1, context, "md-tab", [], {"value": "cpm", "title": "CPMs"});
          inline(env, morph2, context, "md-tab", [], {"value": "composable-cpm", "title": "Composable CPMs"});
          return fragment;
        }
      };
    }());
    return {
      isHTMLBars: true,
      revision: "Ember@1.12.0",
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("h3");
        var el2 = dom.createTextNode("Computed Properties");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, get = hooks.get, block = hooks.block, content = hooks.content;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        var morph0 = dom.createMorphAt(fragment,2,2,contextualElement);
        var morph1 = dom.createMorphAt(fragment,3,3,contextualElement);
        dom.insertBoundary(fragment, null);
        block(env, morph0, context, "md-tabs", [], {"selected": get(env, context, "selectedTabId"), "colWidth": 3}, child0, null);
        content(env, morph1, context, "outlet");
        return fragment;
      }
    };
  }()));

});
define('wge-examples/templates/computed-properties/composable-cpm', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    return {
      isHTMLBars: true,
      revision: "Ember@1.12.0",
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, content = hooks.content;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        var morph0 = dom.createMorphAt(fragment,0,0,contextualElement);
        dom.insertBoundary(fragment, 0);
        content(env, morph0, context, "outlet");
        return fragment;
      }
    };
  }()));

});
define('wge-examples/templates/computed-properties/cpm', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    return {
      isHTMLBars: true,
      revision: "Ember@1.12.0",
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, content = hooks.content;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        var morph0 = dom.createMorphAt(fragment,0,0,contextualElement);
        dom.insertBoundary(fragment, 0);
        content(env, morph0, context, "outlet");
        return fragment;
      }
    };
  }()));

});
define('wge-examples/templates/computed-properties/index', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      var child0 = (function() {
        return {
          isHTMLBars: true,
          revision: "Ember@1.12.0",
          blockParams: 0,
          cachedFragment: null,
          hasRendered: false,
          build: function build(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("        ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("div");
            dom.setAttribute(el1,"class","row");
            var el2 = dom.createTextNode("\n          ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("div");
            dom.setAttribute(el2,"class","col s4");
            var el3 = dom.createTextNode("\n          ");
            dom.appendChild(el2, el3);
            var el3 = dom.createComment("");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n          ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("div");
            dom.setAttribute(el2,"class","col s4");
            var el3 = dom.createTextNode("\n          ");
            dom.appendChild(el2, el3);
            var el3 = dom.createComment("");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n          ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("div");
            dom.setAttribute(el2,"class","col s4");
            var el3 = dom.createTextNode("\n          ");
            dom.appendChild(el2, el3);
            var el3 = dom.createComment("");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n        ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          render: function render(context, env, contextualElement) {
            var dom = env.dom;
            var hooks = env.hooks, get = hooks.get, inline = hooks.inline;
            dom.detectNamespace(contextualElement);
            var fragment;
            if (env.useFragmentCache && dom.canClone) {
              if (this.cachedFragment === null) {
                fragment = this.build(dom);
                if (this.hasRendered) {
                  this.cachedFragment = fragment;
                } else {
                  this.hasRendered = true;
                }
              }
              if (this.cachedFragment) {
                fragment = dom.cloneNode(this.cachedFragment, true);
              }
            } else {
              fragment = this.build(dom);
            }
            var element6 = dom.childAt(fragment, [1]);
            var morph0 = dom.createMorphAt(dom.childAt(element6, [1]),1,1);
            var morph1 = dom.createMorphAt(dom.childAt(element6, [3]),1,1);
            var morph2 = dom.createMorphAt(dom.childAt(element6, [5]),1,1);
            inline(env, morph0, context, "md-input", [], {"type": "number", "label": "Tax (%)", "value": get(env, context, "taxPercent"), "class": "tax-field"});
            inline(env, morph1, context, "md-input", [], {"type": "number", "label": "Tip (%)", "value": get(env, context, "tipPercent"), "class": "tip-field"});
            inline(env, morph2, context, "md-input", [], {"type": "number", "label": "Discount ($)", "value": get(env, context, "discount"), "class": "discount-field"});
            return fragment;
          }
        };
      }());
      return {
        isHTMLBars: true,
        revision: "Ember@1.12.0",
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          var hooks = env.hooks, block = hooks.block;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          var morph0 = dom.createMorphAt(fragment,0,0,contextualElement);
          dom.insertBoundary(fragment, null);
          dom.insertBoundary(fragment, 0);
          block(env, morph0, context, "md-collapsible", [], {"icon": "mdi-action-settings", "title": "Configuration"}, child0, null);
          return fragment;
        }
      };
    }());
    var child1 = (function() {
      var child0 = (function() {
        var child0 = (function() {
          return {
            isHTMLBars: true,
            revision: "Ember@1.12.0",
            blockParams: 1,
            cachedFragment: null,
            hasRendered: false,
            build: function build(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("          ");
              dom.appendChild(el0, el1);
              var el1 = dom.createElement("tr");
              var el2 = dom.createTextNode("\n            ");
              dom.appendChild(el1, el2);
              var el2 = dom.createElement("td");
              dom.setAttribute(el2,"width","100");
              var el3 = dom.createTextNode("\n              ");
              dom.appendChild(el2, el3);
              var el3 = dom.createElement("button");
              dom.setAttribute(el3,"class","btn btn-flat");
              var el4 = dom.createTextNode("Add");
              dom.appendChild(el3, el4);
              dom.appendChild(el2, el3);
              var el3 = dom.createTextNode("\n            ");
              dom.appendChild(el2, el3);
              dom.appendChild(el1, el2);
              var el2 = dom.createTextNode("\n            ");
              dom.appendChild(el1, el2);
              var el2 = dom.createElement("td");
              var el3 = dom.createComment("");
              dom.appendChild(el2, el3);
              dom.appendChild(el1, el2);
              var el2 = dom.createTextNode("\n            ");
              dom.appendChild(el1, el2);
              var el2 = dom.createElement("td");
              dom.setAttribute(el2,"width","150");
              dom.setAttribute(el2,"class","text-right");
              var el3 = dom.createComment("");
              dom.appendChild(el2, el3);
              dom.appendChild(el1, el2);
              var el2 = dom.createTextNode("\n          ");
              dom.appendChild(el1, el2);
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            render: function render(context, env, contextualElement, blockArguments) {
              var dom = env.dom;
              var hooks = env.hooks, set = hooks.set, get = hooks.get, attribute = hooks.attribute, element = hooks.element, content = hooks.content, inline = hooks.inline;
              dom.detectNamespace(contextualElement);
              var fragment;
              if (env.useFragmentCache && dom.canClone) {
                if (this.cachedFragment === null) {
                  fragment = this.build(dom);
                  if (this.hasRendered) {
                    this.cachedFragment = fragment;
                  } else {
                    this.hasRendered = true;
                  }
                }
                if (this.cachedFragment) {
                  fragment = dom.cloneNode(this.cachedFragment, true);
                }
              } else {
                fragment = this.build(dom);
              }
              var element4 = dom.childAt(fragment, [1]);
              var element5 = dom.childAt(element4, [1, 1]);
              var attrMorph0 = dom.createAttrMorph(element4, 'data-item-name');
              var morph0 = dom.createMorphAt(dom.childAt(element4, [3]),0,0);
              var morph1 = dom.createMorphAt(dom.childAt(element4, [5]),0,0);
              set(env, context, "menuItem", blockArguments[0]);
              attribute(env, attrMorph0, element4, "data-item-name", get(env, context, "menuItem.name"));
              element(env, element5, context, "action", ["addMenuItem", get(env, context, "menuItem")], {});
              content(env, morph0, context, "menuItem.name");
              inline(env, morph1, context, "nice-currency", [get(env, context, "menuItem.price")], {});
              return fragment;
            }
          };
        }());
        return {
          isHTMLBars: true,
          revision: "Ember@1.12.0",
          blockParams: 0,
          cachedFragment: null,
          hasRendered: false,
          build: function build(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("        ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("table");
            var el2 = dom.createTextNode("\n");
            dom.appendChild(el1, el2);
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("        ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          render: function render(context, env, contextualElement) {
            var dom = env.dom;
            var hooks = env.hooks, get = hooks.get, block = hooks.block;
            dom.detectNamespace(contextualElement);
            var fragment;
            if (env.useFragmentCache && dom.canClone) {
              if (this.cachedFragment === null) {
                fragment = this.build(dom);
                if (this.hasRendered) {
                  this.cachedFragment = fragment;
                } else {
                  this.hasRendered = true;
                }
              }
              if (this.cachedFragment) {
                fragment = dom.cloneNode(this.cachedFragment, true);
              }
            } else {
              fragment = this.build(dom);
            }
            var morph0 = dom.createMorphAt(dom.childAt(fragment, [1]),1,1);
            block(env, morph0, context, "each", [get(env, context, "content")], {}, child0, null);
            return fragment;
          }
        };
      }());
      return {
        isHTMLBars: true,
        revision: "Ember@1.12.0",
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          var hooks = env.hooks, block = hooks.block;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          var morph0 = dom.createMorphAt(fragment,0,0,contextualElement);
          dom.insertBoundary(fragment, null);
          dom.insertBoundary(fragment, 0);
          block(env, morph0, context, "md-card-content", [], {}, child0, null);
          return fragment;
        }
      };
    }());
    var child2 = (function() {
      var child0 = (function() {
        var child0 = (function() {
          return {
            isHTMLBars: true,
            revision: "Ember@1.12.0",
            blockParams: 1,
            cachedFragment: null,
            hasRendered: false,
            build: function build(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("            ");
              dom.appendChild(el0, el1);
              var el1 = dom.createElement("tr");
              var el2 = dom.createTextNode("\n              ");
              dom.appendChild(el1, el2);
              var el2 = dom.createElement("td");
              dom.setAttribute(el2,"width","100");
              var el3 = dom.createTextNode("\n                ");
              dom.appendChild(el2, el3);
              var el3 = dom.createElement("button");
              dom.setAttribute(el3,"class","btn btn-flat");
              var el4 = dom.createTextNode("×");
              dom.appendChild(el3, el4);
              dom.appendChild(el2, el3);
              var el3 = dom.createTextNode("\n              ");
              dom.appendChild(el2, el3);
              dom.appendChild(el1, el2);
              var el2 = dom.createTextNode("\n              ");
              dom.appendChild(el1, el2);
              var el2 = dom.createElement("td");
              var el3 = dom.createComment("");
              dom.appendChild(el2, el3);
              dom.appendChild(el1, el2);
              var el2 = dom.createTextNode("\n              ");
              dom.appendChild(el1, el2);
              var el2 = dom.createElement("td");
              dom.setAttribute(el2,"width","150");
              dom.setAttribute(el2,"class","text-right");
              var el3 = dom.createComment("");
              dom.appendChild(el2, el3);
              dom.appendChild(el1, el2);
              var el2 = dom.createTextNode("\n            ");
              dom.appendChild(el1, el2);
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            render: function render(context, env, contextualElement, blockArguments) {
              var dom = env.dom;
              var hooks = env.hooks, set = hooks.set, get = hooks.get, element = hooks.element, content = hooks.content, inline = hooks.inline;
              dom.detectNamespace(contextualElement);
              var fragment;
              if (env.useFragmentCache && dom.canClone) {
                if (this.cachedFragment === null) {
                  fragment = this.build(dom);
                  if (this.hasRendered) {
                    this.cachedFragment = fragment;
                  } else {
                    this.hasRendered = true;
                  }
                }
                if (this.cachedFragment) {
                  fragment = dom.cloneNode(this.cachedFragment, true);
                }
              } else {
                fragment = this.build(dom);
              }
              var element0 = dom.childAt(fragment, [1]);
              var element1 = dom.childAt(element0, [1, 1]);
              var morph0 = dom.createMorphAt(dom.childAt(element0, [3]),0,0);
              var morph1 = dom.createMorphAt(dom.childAt(element0, [5]),0,0);
              set(env, context, "orderItem", blockArguments[0]);
              element(env, element1, context, "action", ["removeOrderItem", get(env, context, "orderItem")], {});
              content(env, morph0, context, "orderItem.name");
              inline(env, morph1, context, "nice-currency", [get(env, context, "orderItem.price")], {});
              return fragment;
            }
          };
        }());
        return {
          isHTMLBars: true,
          revision: "Ember@1.12.0",
          blockParams: 0,
          cachedFragment: null,
          hasRendered: false,
          build: function build(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("        ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("table");
            dom.setAttribute(el1,"data-autoid","order-table");
            var el2 = dom.createTextNode("\n");
            dom.appendChild(el1, el2);
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("          ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("tfoot");
            var el3 = dom.createTextNode("\n            ");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("tr");
            var el4 = dom.createTextNode("\n              ");
            dom.appendChild(el3, el4);
            var el4 = dom.createElement("td");
            dom.setAttribute(el4,"colspan","2");
            dom.setAttribute(el4,"class","text-right");
            var el5 = dom.createTextNode("Subtotal");
            dom.appendChild(el4, el5);
            dom.appendChild(el3, el4);
            var el4 = dom.createTextNode("\n              ");
            dom.appendChild(el3, el4);
            var el4 = dom.createElement("td");
            dom.setAttribute(el4,"class","text-right");
            dom.setAttribute(el4,"data-autoid","subtotal-amount");
            var el5 = dom.createComment("");
            dom.appendChild(el4, el5);
            dom.appendChild(el3, el4);
            var el4 = dom.createTextNode("\n            ");
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n            ");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("tr");
            var el4 = dom.createTextNode("\n              ");
            dom.appendChild(el3, el4);
            var el4 = dom.createElement("td");
            dom.setAttribute(el4,"colspan","2");
            dom.setAttribute(el4,"class","text-right");
            var el5 = dom.createTextNode("Tip");
            dom.appendChild(el4, el5);
            dom.appendChild(el3, el4);
            var el4 = dom.createTextNode("\n              ");
            dom.appendChild(el3, el4);
            var el4 = dom.createElement("td");
            dom.setAttribute(el4,"class","text-right");
            dom.setAttribute(el4,"data-autoid","tip-amount");
            var el5 = dom.createComment("");
            dom.appendChild(el4, el5);
            dom.appendChild(el3, el4);
            var el4 = dom.createTextNode("\n            ");
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n            ");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("tr");
            var el4 = dom.createTextNode("\n              ");
            dom.appendChild(el3, el4);
            var el4 = dom.createElement("td");
            dom.setAttribute(el4,"colspan","2");
            dom.setAttribute(el4,"class","text-right");
            var el5 = dom.createTextNode("Tax");
            dom.appendChild(el4, el5);
            dom.appendChild(el3, el4);
            var el4 = dom.createTextNode("\n              ");
            dom.appendChild(el3, el4);
            var el4 = dom.createElement("td");
            dom.setAttribute(el4,"class","text-right");
            dom.setAttribute(el4,"data-autoid","tax-amount");
            var el5 = dom.createComment("");
            dom.appendChild(el4, el5);
            dom.appendChild(el3, el4);
            var el4 = dom.createTextNode("\n            ");
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n            ");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("tr");
            var el4 = dom.createTextNode("\n              ");
            dom.appendChild(el3, el4);
            var el4 = dom.createElement("td");
            dom.setAttribute(el4,"colspan","2");
            dom.setAttribute(el4,"class","text-right");
            var el5 = dom.createTextNode("Grand Total");
            dom.appendChild(el4, el5);
            dom.appendChild(el3, el4);
            var el4 = dom.createTextNode("\n              ");
            dom.appendChild(el3, el4);
            var el4 = dom.createElement("td");
            dom.setAttribute(el4,"class","text-right");
            dom.setAttribute(el4,"data-autoid","total-amount");
            var el5 = dom.createComment("");
            dom.appendChild(el4, el5);
            dom.appendChild(el3, el4);
            var el4 = dom.createTextNode("\n            ");
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n          ");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n        ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          render: function render(context, env, contextualElement) {
            var dom = env.dom;
            var hooks = env.hooks, get = hooks.get, block = hooks.block, inline = hooks.inline;
            dom.detectNamespace(contextualElement);
            var fragment;
            if (env.useFragmentCache && dom.canClone) {
              if (this.cachedFragment === null) {
                fragment = this.build(dom);
                if (this.hasRendered) {
                  this.cachedFragment = fragment;
                } else {
                  this.hasRendered = true;
                }
              }
              if (this.cachedFragment) {
                fragment = dom.cloneNode(this.cachedFragment, true);
              }
            } else {
              fragment = this.build(dom);
            }
            var element2 = dom.childAt(fragment, [1]);
            var element3 = dom.childAt(element2, [3]);
            var morph0 = dom.createMorphAt(element2,1,1);
            var morph1 = dom.createMorphAt(dom.childAt(element3, [1, 3]),0,0);
            var morph2 = dom.createMorphAt(dom.childAt(element3, [3, 3]),0,0);
            var morph3 = dom.createMorphAt(dom.childAt(element3, [5, 3]),0,0);
            var morph4 = dom.createMorphAt(dom.childAt(element3, [7, 3]),0,0);
            block(env, morph0, context, "each", [get(env, context, "order")], {}, child0, null);
            inline(env, morph1, context, "nice-currency", [get(env, context, "subtotal")], {});
            inline(env, morph2, context, "nice-currency", [get(env, context, "tipAmount")], {});
            inline(env, morph3, context, "nice-currency", [get(env, context, "taxAmount")], {});
            inline(env, morph4, context, "nice-currency", [get(env, context, "totalAmount")], {});
            return fragment;
          }
        };
      }());
      return {
        isHTMLBars: true,
        revision: "Ember@1.12.0",
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          var hooks = env.hooks, block = hooks.block;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          var morph0 = dom.createMorphAt(fragment,0,0,contextualElement);
          dom.insertBoundary(fragment, null);
          dom.insertBoundary(fragment, 0);
          block(env, morph0, context, "md-card-content", [], {}, child0, null);
          return fragment;
        }
      };
    }());
    return {
      isHTMLBars: true,
      revision: "Ember@1.12.0",
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","row");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","col s12  thin-inputs");
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","row");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","col m8 s12");
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","col m4 s12");
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, block = hooks.block, get = hooks.get, inline = hooks.inline;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        var element7 = dom.childAt(fragment, [2]);
        var morph0 = dom.createMorphAt(dom.childAt(fragment, [0, 1]),1,1);
        var morph1 = dom.createMorphAt(dom.childAt(element7, [1]),1,1);
        var morph2 = dom.createMorphAt(dom.childAt(element7, [3]),1,1);
        var morph3 = dom.createMorphAt(fragment,4,4,contextualElement);
        dom.insertBoundary(fragment, null);
        block(env, morph0, context, "md-card-collapsible", [], {"accordion": false, "class": "configure-collapsible"}, child0, null);
        block(env, morph1, context, "md-card", [], {"title": "Menu"}, child1, null);
        block(env, morph2, context, "md-card", [], {"title": "Order"}, child2, null);
        inline(env, morph3, context, "code-snippet", [], {"name": get(env, context, "codeExample")});
        return fragment;
      }
    };
  }()));

});
define('wge-examples/templates/design-patterns', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    return {
      isHTMLBars: true,
      revision: "Ember@1.12.0",
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("h3");
        var el2 = dom.createTextNode("Design Patterns");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, content = hooks.content;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        var morph0 = dom.createMorphAt(fragment,2,2,contextualElement);
        content(env, morph0, context, "outlet");
        return fragment;
      }
    };
  }()));

});
define('wge-examples/templates/design-patterns/index', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    return {
      isHTMLBars: true,
      revision: "Ember@1.12.0",
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, content = hooks.content;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        var morph0 = dom.createMorphAt(fragment,0,0,contextualElement);
        dom.insertBoundary(fragment, 0);
        content(env, morph0, context, "outlet");
        return fragment;
      }
    };
  }()));

});
define('wge-examples/templates/index', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    return {
      isHTMLBars: true,
      revision: "Ember@1.12.0",
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","container");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","row");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","col s12 text-center");
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("iframe");
        dom.setAttribute(el4,"src","http://www.slideshare.net/mikelnorth/slideshelf");
        dom.setAttribute(el4,"width","490px");
        dom.setAttribute(el4,"height","470px");
        dom.setAttribute(el4,"frameborder","0");
        dom.setAttribute(el4,"marginwidth","0");
        dom.setAttribute(el4,"marginheight","0");
        dom.setAttribute(el4,"scrolling","no");
        dom.setAttribute(el4,"style","border:none;");
        dom.setAttribute(el4,"allowfullscreen","");
        dom.setAttribute(el4,"webkitallowfullscreen","");
        dom.setAttribute(el4,"mozallowfullscreen","");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, content = hooks.content;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        var morph0 = dom.createMorphAt(fragment,0,0,contextualElement);
        dom.insertBoundary(fragment, 0);
        content(env, morph0, context, "outlet");
        return fragment;
      }
    };
  }()));

});
define('wge-examples/templates/testing', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      return {
        isHTMLBars: true,
        revision: "Ember@1.12.0",
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("        ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("a");
          var el2 = dom.createTextNode("PageObject");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          return fragment;
        }
      };
    }());
    var child1 = (function() {
      return {
        isHTMLBars: true,
        revision: "Ember@1.12.0",
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("        ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("a");
          var el2 = dom.createTextNode("Test");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          return fragment;
        }
      };
    }());
    return {
      isHTMLBars: true,
      revision: "Ember@1.12.0",
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("h3");
        var el2 = dom.createTextNode("Testing");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","row");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","col s12");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("ul");
        dom.setAttribute(el3,"class","collection");
        var el4 = dom.createTextNode("\n");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, block = hooks.block, content = hooks.content;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        var element0 = dom.childAt(fragment, [2, 1, 1]);
        var morph0 = dom.createMorphAt(element0,1,1);
        var morph1 = dom.createMorphAt(element0,2,2);
        var morph2 = dom.createMorphAt(fragment,4,4,contextualElement);
        block(env, morph0, context, "link-to", ["testing.pageobject"], {"tagName": "li", "class": "collection-item"}, child0, null);
        block(env, morph1, context, "link-to", ["testing.test"], {"tagName": "li", "class": "collection-item"}, child1, null);
        content(env, morph2, context, "outlet");
        return fragment;
      }
    };
  }()));

});
define('wge-examples/templates/testing/index', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    return {
      isHTMLBars: true,
      revision: "Ember@1.12.0",
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        return fragment;
      }
    };
  }()));

});
define('wge-examples/templates/testing/pageobject', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    return {
      isHTMLBars: true,
      revision: "Ember@1.12.0",
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("hr");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, content = hooks.content, inline = hooks.inline;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        var morph0 = dom.createMorphAt(fragment,0,0,contextualElement);
        var morph1 = dom.createMorphAt(fragment,2,2,contextualElement);
        var morph2 = dom.createMorphAt(fragment,6,6,contextualElement);
        dom.insertBoundary(fragment, null);
        dom.insertBoundary(fragment, 0);
        content(env, morph0, context, "outlet");
        inline(env, morph1, context, "code-snippet", [], {"name": "po-basic-example.js"});
        inline(env, morph2, context, "code-snippet", [], {"name": "po-rm-example.js"});
        return fragment;
      }
    };
  }()));

});
define('wge-examples/templates/testing/test', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    return {
      isHTMLBars: true,
      revision: "Ember@1.12.0",
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, content = hooks.content, inline = hooks.inline;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        var morph0 = dom.createMorphAt(fragment,0,0,contextualElement);
        var morph1 = dom.createMorphAt(fragment,2,2,contextualElement);
        dom.insertBoundary(fragment, null);
        dom.insertBoundary(fragment, 0);
        content(env, morph0, context, "outlet");
        inline(env, morph1, context, "code-snippet", [], {"name": "rm-test-example.js"});
        return fragment;
      }
    };
  }()));

});
define('wge-examples/tests/acceptance/computed-properties-test', ['ember', 'qunit', 'wge-examples/tests/helpers/start-app', 'pretender', 'wge-examples/tests/page-objects/restaurant-menu'], function (Ember, qunit, startApp, Pretender, RestaurantMenu) {

  'use strict';

  var application = undefined,
      server = undefined;

  qunit.module('Acceptance | computed properties', {
    beforeEach: function beforeEach() {
      application = startApp['default']();
      server = new Pretender['default']();
    },

    afterEach: function afterEach() {
      Ember['default'].run(application, 'destroy');
      server.shutdown();
    }
  });

  // BEGIN-SNIPPET rm-test-example

  qunit.test('visiting /computed-properties', function (assert) {

    new RestaurantMenu['default'](assert).visit(server, '/computed-properties/composable-cpm')

    // Make sure we're at the right place
    .assertPath('computed-properties.composable-cpm')

    // Add a few burgers
    .clickMenuAddButton('Hamburger').clickMenuAddButton('Hamburger').clickMenuAddButton('Hamburger').clickMenuAddButton('Hamburger').assertSubtotal('$ 36.00')

    // Remove one
    .clickRemoveTopOrderItemButton().assertSubtotal('$ 27.00')

    // And another
    .clickRemoveTopOrderItemButton().assertSubtotal('$ 18.00')

    // Change the tip percentage
    .toggleConfiguration().setTip(31).assertTotal('$ 19.66')

    // Change the tax percentage
    .toggleConfiguration().setTax(8.5).assertTotal('$ 20.11');
  });
  // END-SNIPPET

});
define('wge-examples/tests/acceptance/computed-properties-test.jscs-test', function () {

  'use strict';

  module('JSCS - acceptance');
  test('acceptance/computed-properties-test.js should pass jscs', function() {
    ok(true, 'acceptance/computed-properties-test.js should pass jscs.');
  });

});
define('wge-examples/tests/acceptance/computed-properties-test.jshint', function () {

  'use strict';

  module('JSHint - acceptance');
  test('acceptance/computed-properties-test.js should pass jshint', function() { 
    ok(true, 'acceptance/computed-properties-test.js should pass jshint.'); 
  });

});
define('wge-examples/tests/adapters/application.jscs-test', function () {

  'use strict';

  module('JSCS - adapters');
  test('adapters/application.js should pass jscs', function() {
    ok(true, 'adapters/application.js should pass jscs.');
  });

});
define('wge-examples/tests/adapters/application.jshint', function () {

  'use strict';

  module('JSHint - adapters');
  test('adapters/application.js should pass jshint', function() { 
    ok(true, 'adapters/application.js should pass jshint.'); 
  });

});
define('wge-examples/tests/app.jscs-test', function () {

  'use strict';

  module('JSCS - .');
  test('app.js should pass jscs', function() {
    ok(true, 'app.js should pass jscs.');
  });

});
define('wge-examples/tests/app.jshint', function () {

  'use strict';

  module('JSHint - .');
  test('app.js should pass jshint', function() { 
    ok(true, 'app.js should pass jshint.'); 
  });

});
define('wge-examples/tests/components/nav-bar.jscs-test', function () {

  'use strict';

  module('JSCS - components');
  test('components/nav-bar.js should pass jscs', function() {
    ok(true, 'components/nav-bar.js should pass jscs.');
  });

});
define('wge-examples/tests/components/nav-bar.jshint', function () {

  'use strict';

  module('JSHint - components');
  test('components/nav-bar.js should pass jshint', function() { 
    ok(true, 'components/nav-bar.js should pass jshint.'); 
  });

});
define('wge-examples/tests/components/wge-card-action.jscs-test', function () {

  'use strict';

  module('JSCS - components');
  test('components/wge-card-action.js should pass jscs', function() {
    ok(true, 'components/wge-card-action.js should pass jscs.');
  });

});
define('wge-examples/tests/components/wge-card-action.jshint', function () {

  'use strict';

  module('JSHint - components');
  test('components/wge-card-action.js should pass jshint', function() { 
    ok(true, 'components/wge-card-action.js should pass jshint.'); 
  });

});
define('wge-examples/tests/components/wge-card.jscs-test', function () {

  'use strict';

  module('JSCS - components');
  test('components/wge-card.js should pass jscs', function() {
    ok(true, 'components/wge-card.js should pass jscs.');
  });

});
define('wge-examples/tests/components/wge-card.jshint', function () {

  'use strict';

  module('JSHint - components');
  test('components/wge-card.js should pass jshint', function() { 
    ok(true, 'components/wge-card.js should pass jshint.'); 
  });

});
define('wge-examples/tests/controllers/components/index.jscs-test', function () {

  'use strict';

  module('JSCS - controllers/components');
  test('controllers/components/index.js should pass jscs', function() {
    ok(true, 'controllers/components/index.js should pass jscs.');
  });

});
define('wge-examples/tests/controllers/components/index.jshint', function () {

  'use strict';

  module('JSHint - controllers/components');
  test('controllers/components/index.js should pass jshint', function() { 
    ok(true, 'controllers/components/index.js should pass jshint.'); 
  });

});
define('wge-examples/tests/controllers/computed-properties.jscs-test', function () {

  'use strict';

  module('JSCS - controllers');
  test('controllers/computed-properties.js should pass jscs', function() {
    ok(true, 'controllers/computed-properties.js should pass jscs.');
  });

});
define('wge-examples/tests/controllers/computed-properties.jshint', function () {

  'use strict';

  module('JSHint - controllers');
  test('controllers/computed-properties.js should pass jshint', function() { 
    ok(true, 'controllers/computed-properties.js should pass jshint.'); 
  });

});
define('wge-examples/tests/controllers/computed-properties/composable-cpm.jscs-test', function () {

  'use strict';

  module('JSCS - controllers/computed-properties');
  test('controllers/computed-properties/composable-cpm.js should pass jscs', function() {
    ok(true, 'controllers/computed-properties/composable-cpm.js should pass jscs.');
  });

});
define('wge-examples/tests/controllers/computed-properties/composable-cpm.jshint', function () {

  'use strict';

  module('JSHint - controllers/computed-properties');
  test('controllers/computed-properties/composable-cpm.js should pass jshint', function() { 
    ok(true, 'controllers/computed-properties/composable-cpm.js should pass jshint.'); 
  });

});
define('wge-examples/tests/controllers/computed-properties/cpm.jscs-test', function () {

  'use strict';

  module('JSCS - controllers/computed-properties');
  test('controllers/computed-properties/cpm.js should pass jscs', function() {
    ok(true, 'controllers/computed-properties/cpm.js should pass jscs.');
  });

});
define('wge-examples/tests/controllers/computed-properties/cpm.jshint', function () {

  'use strict';

  module('JSHint - controllers/computed-properties');
  test('controllers/computed-properties/cpm.js should pass jshint', function() { 
    ok(true, 'controllers/computed-properties/cpm.js should pass jshint.'); 
  });

});
define('wge-examples/tests/controllers/computed-properties/index.jscs-test', function () {

  'use strict';

  module('JSCS - controllers/computed-properties');
  test('controllers/computed-properties/index.js should pass jscs', function() {
    ok(true, 'controllers/computed-properties/index.js should pass jscs.');
  });

});
define('wge-examples/tests/controllers/computed-properties/index.jshint', function () {

  'use strict';

  module('JSHint - controllers/computed-properties');
  test('controllers/computed-properties/index.js should pass jshint', function() { 
    ok(true, 'controllers/computed-properties/index.js should pass jshint.'); 
  });

});
define('wge-examples/tests/fixtures/restaurant-menu.jscs-test', function () {

  'use strict';

  module('JSCS - fixtures');
  test('fixtures/restaurant-menu.js should pass jscs', function() {
    ok(true, 'fixtures/restaurant-menu.js should pass jscs.');
  });

});
define('wge-examples/tests/fixtures/restaurant-menu.jshint', function () {

  'use strict';

  module('JSHint - fixtures');
  test('fixtures/restaurant-menu.js should pass jshint', function() { 
    ok(true, 'fixtures/restaurant-menu.js should pass jshint.'); 
  });

});
define('wge-examples/tests/helpers/nice-currency.jscs-test', function () {

  'use strict';

  module('JSCS - helpers');
  test('helpers/nice-currency.js should pass jscs', function() {
    ok(true, 'helpers/nice-currency.js should pass jscs.');
  });

});
define('wge-examples/tests/helpers/nice-currency.jshint', function () {

  'use strict';

  module('JSHint - helpers');
  test('helpers/nice-currency.js should pass jshint', function() { 
    ok(true, 'helpers/nice-currency.js should pass jshint.'); 
  });

});
define('wge-examples/tests/helpers/resolver', ['exports', 'ember/resolver', 'wge-examples/config/environment'], function (exports, Resolver, config) {

  'use strict';

  var resolver = Resolver['default'].create();

  resolver.namespace = {
    modulePrefix: config['default'].modulePrefix,
    podModulePrefix: config['default'].podModulePrefix
  };

  exports['default'] = resolver;

});
define('wge-examples/tests/helpers/resolver.jscs-test', function () {

  'use strict';

  module('JSCS - helpers');
  test('helpers/resolver.js should pass jscs', function() {
    ok(true, 'helpers/resolver.js should pass jscs.');
  });

});
define('wge-examples/tests/helpers/resolver.jshint', function () {

  'use strict';

  module('JSHint - helpers');
  test('helpers/resolver.js should pass jshint', function() { 
    ok(true, 'helpers/resolver.js should pass jshint.'); 
  });

});
define('wge-examples/tests/helpers/start-app', ['exports', 'ember', 'wge-examples/app', 'wge-examples/router', 'wge-examples/config/environment'], function (exports, Ember, Application, Router, config) {

  'use strict';



  exports['default'] = startApp;
  function startApp(attrs) {
    var application = undefined;

    var attributes = Ember['default'].merge({}, config['default'].APP);
    attributes = Ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    Ember['default'].run(function () {
      application = Application['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }

});
define('wge-examples/tests/helpers/start-app.jscs-test', function () {

  'use strict';

  module('JSCS - helpers');
  test('helpers/start-app.js should pass jscs', function() {
    ok(true, 'helpers/start-app.js should pass jscs.');
  });

});
define('wge-examples/tests/helpers/start-app.jshint', function () {

  'use strict';

  module('JSHint - helpers');
  test('helpers/start-app.js should pass jshint', function() { 
    ok(true, 'helpers/start-app.js should pass jshint.'); 
  });

});
define('wge-examples/tests/models/menu-item.jscs-test', function () {

  'use strict';

  module('JSCS - models');
  test('models/menu-item.js should pass jscs', function() {
    ok(true, 'models/menu-item.js should pass jscs.');
  });

});
define('wge-examples/tests/models/menu-item.jshint', function () {

  'use strict';

  module('JSHint - models');
  test('models/menu-item.js should pass jshint', function() { 
    ok(true, 'models/menu-item.js should pass jshint.'); 
  });

});
define('wge-examples/tests/page-objects/base', ['exports'], function (exports) {

  'use strict';

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  // BEGIN-SNIPPET po-basic-example

  var Base = (function () {
    function Base(assert) {
      _classCallCheck(this, Base);

      this.assert = assert;
    }

    _createClass(Base, [{
      key: "assertPath",
      value: function assertPath(path) {
        var _this = this;

        andThen(function () {
          _this.assert.equal(currentPath(), path);
        });
        return this;
      }
    }, {
      key: "$",
      value: (function (_$) {
        function $(_x) {
          return _$.apply(this, arguments);
        }

        $.toString = function () {
          return _$.toString();
        };

        return $;
      })(function (selector) {
        var results = $(selector);
        if (results.length === 0) {
          this.assert.ok(false, "No element found with selector \"" + selector + "\"");
        }
        return results;
      })
    }, {
      key: "_getSelectorByAutoId",
      value: function _getSelectorByAutoId(autoId) {
        return "[data-autoid=\"" + autoId + "\"]";
      }
    }, {
      key: "_getElementByAutoId",
      value: function _getElementByAutoId(autoId) {
        return this.$(this._getSelectorByAutoId(autoId))[0];
      }
    }, {
      key: "_clickByAutoId",
      value: function _clickByAutoId(autoId) {
        click(this._getSelectorByAutoId(autoId));
        return this;
      }
    }, {
      key: "_valueByAutoId",
      value: function _valueByAutoId(autoId) {
        return this._getElementByAutoId(autoId).innerHTML;
      }
    }]);

    return Base;
  })();

  exports['default'] = Base;
  // END-SNIPPET

});
define('wge-examples/tests/page-objects/base.jscs-test', function () {

  'use strict';

  module('JSCS - page-objects');
  test('page-objects/base.js should pass jscs', function() {
    ok(true, 'page-objects/base.js should pass jscs.');
  });

});
define('wge-examples/tests/page-objects/base.jshint', function () {

  'use strict';

  module('JSHint - page-objects');
  test('page-objects/base.js should pass jshint', function() { 
    ok(true, 'page-objects/base.js should pass jshint.'); 
  });

});
define('wge-examples/tests/page-objects/restaurant-menu', ['exports', 'wge-examples/tests/page-objects/base'], function (exports, Base) {

  'use strict';

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

  // BEGIN-SNIPPET po-rm-example

  var RestaurantMenu = (function (_Base) {
    function RestaurantMenu() {
      _classCallCheck(this, RestaurantMenu);

      if (_Base != null) {
        _Base.apply(this, arguments);
      }
    }

    _inherits(RestaurantMenu, _Base);

    _createClass(RestaurantMenu, [{
      key: 'prepareRequests',
      value: function prepareRequests(server) {
        server.get('/api/menu_items', function () {
          return [200, {}, JSON.stringify({
            'menu-items': [{
              id: 1,
              name: 'Hamburger',
              price: 9
            }, {
              id: 2,
              name: 'Fries',
              price: 4.5
            }, {
              id: 3,
              name: 'Hot Dog',
              price: 4
            }]
          })];
        });
      }
    }, {
      key: 'visit',
      value: (function (_visit) {
        function visit(_x, _x2) {
          return _visit.apply(this, arguments);
        }

        visit.toString = function () {
          return _visit.toString();
        };

        return visit;
      })(function (server, url) {
        this.prepareRequests(server);
        visit(url);
        return this;
      })
    }, {
      key: 'clickMenuAddButton',
      value: function clickMenuAddButton(itemName) {
        click('tr[data-item-name="' + itemName + '"] button');
        return this;
      }
    }, {
      key: 'subtotal',
      value: function subtotal() {
        return this._valueByAutoId('subtotal-amount');
      }
    }, {
      key: 'total',
      value: function total() {
        return this._valueByAutoId('total-amount');
      }
    }, {
      key: 'tax',
      value: function tax() {
        return this.$('[data-autoid="tax-amount"]')[0].innerHTML;
      }
    }, {
      key: 'tip',
      value: function tip() {
        return this.$('[data-autoid="tip-amount"]')[0].innerHTML;
      }
    }, {
      key: 'assertSubtotal',
      value: function assertSubtotal(subtotal) {
        var _this = this;

        andThen(function () {
          _this.assert.equal(_this.subtotal(), subtotal, 'Subtotal should be ' + subtotal);
        });
        return this;
      }
    }, {
      key: 'assertTotal',
      value: function assertTotal(total) {
        var _this2 = this;

        andThen(function () {
          _this2.assert.equal(_this2.total(), total, 'Total should be ' + total);
        });
        return this;
      }
    }, {
      key: 'clickRemoveTopOrderItemButton',
      value: function clickRemoveTopOrderItemButton() {
        var sel = this._getSelectorByAutoId('order-table');
        click('' + sel + ' tr:first-child .btn');
        return this;
      }
    }, {
      key: 'toggleConfiguration',
      value: function toggleConfiguration() {
        click('.configure-collapsible li:first-child .collapsible-header');
        return this;
      }
    }, {
      key: 'setTip',
      value: function setTip(val) {
        var _this3 = this;

        andThen(function () {
          _this3.$('.tip-field input').val(val);
          _this3.$('.tip-field input').blur();
        });
        return this;
      }
    }, {
      key: 'setTax',
      value: function setTax(val) {
        var _this4 = this;

        andThen(function () {
          _this4.$('.tax-field input').val(val);
          _this4.$('.tax-field input').blur();
        });
        return this;
      }
    }, {
      key: 'setDiscount',
      value: function setDiscount(val) {
        var _this5 = this;

        andThen(function () {
          _this5.$('.discount-field input').val(val);
          _this5.$('.discount-field input').blur();
        });
        return this;
      }
    }]);

    return RestaurantMenu;
  })(Base['default']);

  exports['default'] = RestaurantMenu;
  // END-SNIPPET

});
define('wge-examples/tests/page-objects/restaurant-menu.jscs-test', function () {

  'use strict';

  module('JSCS - page-objects');
  test('page-objects/restaurant-menu.js should pass jscs', function() {
    ok(true, 'page-objects/restaurant-menu.js should pass jscs.');
  });

});
define('wge-examples/tests/page-objects/restaurant-menu.jshint', function () {

  'use strict';

  module('JSHint - page-objects');
  test('page-objects/restaurant-menu.js should pass jshint', function() { 
    ok(true, 'page-objects/restaurant-menu.js should pass jshint.'); 
  });

});
define('wge-examples/tests/router.jscs-test', function () {

  'use strict';

  module('JSCS - .');
  test('router.js should pass jscs', function() {
    ok(true, 'router.js should pass jscs.');
  });

});
define('wge-examples/tests/router.jshint', function () {

  'use strict';

  module('JSHint - .');
  test('router.js should pass jshint', function() { 
    ok(true, 'router.js should pass jshint.'); 
  });

});
define('wge-examples/tests/routes/components.jscs-test', function () {

  'use strict';

  module('JSCS - routes');
  test('routes/components.js should pass jscs', function() {
    ok(true, 'routes/components.js should pass jscs.');
  });

});
define('wge-examples/tests/routes/components.jshint', function () {

  'use strict';

  module('JSHint - routes');
  test('routes/components.js should pass jshint', function() { 
    ok(true, 'routes/components.js should pass jshint.'); 
  });

});
define('wge-examples/tests/routes/components/index.jscs-test', function () {

  'use strict';

  module('JSCS - routes/components');
  test('routes/components/index.js should pass jscs', function() {
    ok(true, 'routes/components/index.js should pass jscs.');
  });

});
define('wge-examples/tests/routes/components/index.jshint', function () {

  'use strict';

  module('JSHint - routes/components');
  test('routes/components/index.js should pass jshint', function() { 
    ok(true, 'routes/components/index.js should pass jshint.'); 
  });

});
define('wge-examples/tests/routes/computed-properties.jscs-test', function () {

  'use strict';

  module('JSCS - routes');
  test('routes/computed-properties.js should pass jscs', function() {
    ok(true, 'routes/computed-properties.js should pass jscs.');
  });

});
define('wge-examples/tests/routes/computed-properties.jshint', function () {

  'use strict';

  module('JSHint - routes');
  test('routes/computed-properties.js should pass jshint', function() { 
    ok(true, 'routes/computed-properties.js should pass jshint.'); 
  });

});
define('wge-examples/tests/routes/computed-properties/composable-cpm.jscs-test', function () {

  'use strict';

  module('JSCS - routes/computed-properties');
  test('routes/computed-properties/composable-cpm.js should pass jscs', function() {
    ok(true, 'routes/computed-properties/composable-cpm.js should pass jscs.');
  });

});
define('wge-examples/tests/routes/computed-properties/composable-cpm.jshint', function () {

  'use strict';

  module('JSHint - routes/computed-properties');
  test('routes/computed-properties/composable-cpm.js should pass jshint', function() { 
    ok(true, 'routes/computed-properties/composable-cpm.js should pass jshint.'); 
  });

});
define('wge-examples/tests/routes/computed-properties/cpm.jscs-test', function () {

  'use strict';

  module('JSCS - routes/computed-properties');
  test('routes/computed-properties/cpm.js should pass jscs', function() {
    ok(true, 'routes/computed-properties/cpm.js should pass jscs.');
  });

});
define('wge-examples/tests/routes/computed-properties/cpm.jshint', function () {

  'use strict';

  module('JSHint - routes/computed-properties');
  test('routes/computed-properties/cpm.js should pass jshint', function() { 
    ok(true, 'routes/computed-properties/cpm.js should pass jshint.'); 
  });

});
define('wge-examples/tests/routes/computed-properties/index.jscs-test', function () {

  'use strict';

  module('JSCS - routes/computed-properties');
  test('routes/computed-properties/index.js should pass jscs', function() {
    ok(true, 'routes/computed-properties/index.js should pass jscs.');
  });

});
define('wge-examples/tests/routes/computed-properties/index.jshint', function () {

  'use strict';

  module('JSHint - routes/computed-properties');
  test('routes/computed-properties/index.js should pass jshint', function() { 
    ok(true, 'routes/computed-properties/index.js should pass jshint.'); 
  });

});
define('wge-examples/tests/routes/design-patterns.jscs-test', function () {

  'use strict';

  module('JSCS - routes');
  test('routes/design-patterns.js should pass jscs', function() {
    ok(true, 'routes/design-patterns.js should pass jscs.');
  });

});
define('wge-examples/tests/routes/design-patterns.jshint', function () {

  'use strict';

  module('JSHint - routes');
  test('routes/design-patterns.js should pass jshint', function() { 
    ok(true, 'routes/design-patterns.js should pass jshint.'); 
  });

});
define('wge-examples/tests/routes/design-patterns/index.jscs-test', function () {

  'use strict';

  module('JSCS - routes/design-patterns');
  test('routes/design-patterns/index.js should pass jscs', function() {
    ok(true, 'routes/design-patterns/index.js should pass jscs.');
  });

});
define('wge-examples/tests/routes/design-patterns/index.jshint', function () {

  'use strict';

  module('JSHint - routes/design-patterns');
  test('routes/design-patterns/index.js should pass jshint', function() { 
    ok(true, 'routes/design-patterns/index.js should pass jshint.'); 
  });

});
define('wge-examples/tests/routes/index.jscs-test', function () {

  'use strict';

  module('JSCS - routes');
  test('routes/index.js should pass jscs', function() {
    ok(true, 'routes/index.js should pass jscs.');
  });

});
define('wge-examples/tests/routes/index.jshint', function () {

  'use strict';

  module('JSHint - routes');
  test('routes/index.js should pass jshint', function() { 
    ok(true, 'routes/index.js should pass jshint.'); 
  });

});
define('wge-examples/tests/routes/testing.jscs-test', function () {

  'use strict';

  module('JSCS - routes');
  test('routes/testing.js should pass jscs', function() {
    ok(true, 'routes/testing.js should pass jscs.');
  });

});
define('wge-examples/tests/routes/testing.jshint', function () {

  'use strict';

  module('JSHint - routes');
  test('routes/testing.js should pass jshint', function() { 
    ok(true, 'routes/testing.js should pass jshint.'); 
  });

});
define('wge-examples/tests/routes/testing/index.jscs-test', function () {

  'use strict';

  module('JSCS - routes/testing');
  test('routes/testing/index.js should pass jscs', function() {
    ok(true, 'routes/testing/index.js should pass jscs.');
  });

});
define('wge-examples/tests/routes/testing/index.jshint', function () {

  'use strict';

  module('JSHint - routes/testing');
  test('routes/testing/index.js should pass jshint', function() { 
    ok(true, 'routes/testing/index.js should pass jshint.'); 
  });

});
define('wge-examples/tests/routes/testing/pageobject.jscs-test', function () {

  'use strict';

  module('JSCS - routes/testing');
  test('routes/testing/pageobject.js should pass jscs', function() {
    ok(true, 'routes/testing/pageobject.js should pass jscs.');
  });

});
define('wge-examples/tests/routes/testing/pageobject.jshint', function () {

  'use strict';

  module('JSHint - routes/testing');
  test('routes/testing/pageobject.js should pass jshint', function() { 
    ok(true, 'routes/testing/pageobject.js should pass jshint.'); 
  });

});
define('wge-examples/tests/routes/testing/test.jscs-test', function () {

  'use strict';

  module('JSCS - routes/testing');
  test('routes/testing/test.js should pass jscs', function() {
    ok(true, 'routes/testing/test.js should pass jscs.');
  });

});
define('wge-examples/tests/routes/testing/test.jshint', function () {

  'use strict';

  module('JSHint - routes/testing');
  test('routes/testing/test.js should pass jshint', function() { 
    ok(true, 'routes/testing/test.js should pass jshint.'); 
  });

});
define('wge-examples/tests/test-helper', ['wge-examples/tests/helpers/resolver', 'ember-qunit'], function (resolver, ember_qunit) {

	'use strict';

	ember_qunit.setResolver(resolver['default']);

});
define('wge-examples/tests/test-helper.jscs-test', function () {

  'use strict';

  module('JSCS - .');
  test('test-helper.js should pass jscs', function() {
    ok(true, 'test-helper.js should pass jscs.');
  });

});
define('wge-examples/tests/test-helper.jshint', function () {

  'use strict';

  module('JSHint - .');
  test('test-helper.js should pass jshint', function() { 
    ok(true, 'test-helper.js should pass jshint.'); 
  });

});
define('wge-examples/tests/unit/adapters/application-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor('adapter:application', 'Unit | Adapter | application', {});

  // Replace this with your real tests.
  ember_qunit.test('it exists', function (assert) {
    var adapter = this.subject();
    assert.ok(adapter);
  });

  // Specify the other units that are required for this test.
  // needs: ['serializer:foo']

});
define('wge-examples/tests/unit/adapters/application-test.jscs-test', function () {

  'use strict';

  module('JSCS - unit/adapters');
  test('unit/adapters/application-test.js should pass jscs', function() {
    ok(true, 'unit/adapters/application-test.js should pass jscs.');
  });

});
define('wge-examples/tests/unit/adapters/application-test.jshint', function () {

  'use strict';

  module('JSHint - unit/adapters');
  test('unit/adapters/application-test.js should pass jshint', function() { 
    ok(true, 'unit/adapters/application-test.js should pass jshint.'); 
  });

});
define('wge-examples/tests/unit/components/nav-bar-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleForComponent('nav-bar', 'Unit | Component | nav bar', {
    // Specify the other units that are required for this test
    // needs: ['component:foo', 'helper:bar'],
    unit: true
  });

  ember_qunit.test('it renders', function (assert) {
    assert.expect(2);

    // Creates the component instance
    var component = this.subject();
    assert.equal(component._state, 'preRender');

    // Renders the component to the page
    this.render();
    assert.equal(component._state, 'inDOM');
  });

});
define('wge-examples/tests/unit/components/nav-bar-test.jscs-test', function () {

  'use strict';

  module('JSCS - unit/components');
  test('unit/components/nav-bar-test.js should pass jscs', function() {
    ok(true, 'unit/components/nav-bar-test.js should pass jscs.');
  });

});
define('wge-examples/tests/unit/components/nav-bar-test.jshint', function () {

  'use strict';

  module('JSHint - unit/components');
  test('unit/components/nav-bar-test.js should pass jshint', function() { 
    ok(true, 'unit/components/nav-bar-test.js should pass jshint.'); 
  });

});
define('wge-examples/tests/unit/components/wge-card-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleForComponent('wge-card', 'Unit | Component | wge card', {
    // Specify the other units that are required for this test
    // needs: ['component:foo', 'helper:bar'],
    unit: true
  });

  ember_qunit.test('it renders', function (assert) {
    assert.expect(2);

    // Creates the component instance
    var component = this.subject();
    assert.equal(component._state, 'preRender');

    // Renders the component to the page
    this.render();
    assert.equal(component._state, 'inDOM');
  });

});
define('wge-examples/tests/unit/components/wge-card-test.jscs-test', function () {

  'use strict';

  module('JSCS - unit/components');
  test('unit/components/wge-card-test.js should pass jscs', function() {
    ok(true, 'unit/components/wge-card-test.js should pass jscs.');
  });

});
define('wge-examples/tests/unit/components/wge-card-test.jshint', function () {

  'use strict';

  module('JSHint - unit/components');
  test('unit/components/wge-card-test.js should pass jshint', function() { 
    ok(true, 'unit/components/wge-card-test.js should pass jshint.'); 
  });

});
define('wge-examples/tests/unit/controllers/computed-properties-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor('controller:computed-properties', {});

  // Replace this with your real tests.
  ember_qunit.test('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });

  // Specify the other units that are required for this test.
  // needs: ['controller:foo']

});
define('wge-examples/tests/unit/controllers/computed-properties-test.jscs-test', function () {

  'use strict';

  module('JSCS - unit/controllers');
  test('unit/controllers/computed-properties-test.js should pass jscs', function() {
    ok(true, 'unit/controllers/computed-properties-test.js should pass jscs.');
  });

});
define('wge-examples/tests/unit/controllers/computed-properties-test.jshint', function () {

  'use strict';

  module('JSHint - unit/controllers');
  test('unit/controllers/computed-properties-test.js should pass jshint', function() { 
    ok(true, 'unit/controllers/computed-properties-test.js should pass jshint.'); 
  });

});
define('wge-examples/tests/unit/controllers/computed-properties/index-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor('controller:computed-properties/index', {});

  // Replace this with your real tests.
  ember_qunit.test('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });

  // Specify the other units that are required for this test.
  // needs: ['controller:foo']

});
define('wge-examples/tests/unit/controllers/computed-properties/index-test.jscs-test', function () {

  'use strict';

  module('JSCS - unit/controllers/computed-properties');
  test('unit/controllers/computed-properties/index-test.js should pass jscs', function() {
    ok(true, 'unit/controllers/computed-properties/index-test.js should pass jscs.');
  });

});
define('wge-examples/tests/unit/controllers/computed-properties/index-test.jshint', function () {

  'use strict';

  module('JSHint - unit/controllers/computed-properties');
  test('unit/controllers/computed-properties/index-test.js should pass jshint', function() { 
    ok(true, 'unit/controllers/computed-properties/index-test.js should pass jshint.'); 
  });

});
define('wge-examples/tests/unit/models/menu-item-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleForModel('menu-item', 'Unit | Model | menu item', {
    // Specify the other units that are required for this test.
    needs: []
  });

  ember_qunit.test('it exists', function (assert) {
    var model = this.subject();
    // var store = this.store();
    assert.ok(!!model);
  });

});
define('wge-examples/tests/unit/models/menu-item-test.jscs-test', function () {

  'use strict';

  module('JSCS - unit/models');
  test('unit/models/menu-item-test.js should pass jscs', function() {
    ok(true, 'unit/models/menu-item-test.js should pass jscs.');
  });

});
define('wge-examples/tests/unit/models/menu-item-test.jshint', function () {

  'use strict';

  module('JSHint - unit/models');
  test('unit/models/menu-item-test.js should pass jshint', function() { 
    ok(true, 'unit/models/menu-item-test.js should pass jshint.'); 
  });

});
define('wge-examples/tests/unit/routes/components-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor('route:components', 'Unit | Route | components', {});

  ember_qunit.test('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });

  // Specify the other units that are required for this test.
  // needs: ['controller:foo']

});
define('wge-examples/tests/unit/routes/components-test.jscs-test', function () {

  'use strict';

  module('JSCS - unit/routes');
  test('unit/routes/components-test.js should pass jscs', function() {
    ok(true, 'unit/routes/components-test.js should pass jscs.');
  });

});
define('wge-examples/tests/unit/routes/components-test.jshint', function () {

  'use strict';

  module('JSHint - unit/routes');
  test('unit/routes/components-test.js should pass jshint', function() { 
    ok(true, 'unit/routes/components-test.js should pass jshint.'); 
  });

});
define('wge-examples/tests/unit/routes/components/index-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor('route:components/index', 'Unit | Route | components/index', {});

  ember_qunit.test('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });

  // Specify the other units that are required for this test.
  // needs: ['controller:foo']

});
define('wge-examples/tests/unit/routes/components/index-test.jscs-test', function () {

  'use strict';

  module('JSCS - unit/routes/components');
  test('unit/routes/components/index-test.js should pass jscs', function() {
    ok(true, 'unit/routes/components/index-test.js should pass jscs.');
  });

});
define('wge-examples/tests/unit/routes/components/index-test.jshint', function () {

  'use strict';

  module('JSHint - unit/routes/components');
  test('unit/routes/components/index-test.js should pass jshint', function() { 
    ok(true, 'unit/routes/components/index-test.js should pass jshint.'); 
  });

});
define('wge-examples/tests/unit/routes/computed-properties-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor('route:computed-properties', 'Unit | Route | computed properties', {});

  ember_qunit.test('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });

  // Specify the other units that are required for this test.
  // needs: ['controller:foo']

});
define('wge-examples/tests/unit/routes/computed-properties-test.jscs-test', function () {

  'use strict';

  module('JSCS - unit/routes');
  test('unit/routes/computed-properties-test.js should pass jscs', function() {
    ok(true, 'unit/routes/computed-properties-test.js should pass jscs.');
  });

});
define('wge-examples/tests/unit/routes/computed-properties-test.jshint', function () {

  'use strict';

  module('JSHint - unit/routes');
  test('unit/routes/computed-properties-test.js should pass jshint', function() { 
    ok(true, 'unit/routes/computed-properties-test.js should pass jshint.'); 
  });

});
define('wge-examples/tests/unit/routes/computed-properties/composable-cpm-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor('route:computed-properties/composable-cpm', 'Unit | Route | computed properties/composable cpm', {});

  ember_qunit.test('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });

  // Specify the other units that are required for this test.
  // needs: ['controller:foo']

});
define('wge-examples/tests/unit/routes/computed-properties/composable-cpm-test.jscs-test', function () {

  'use strict';

  module('JSCS - unit/routes/computed-properties');
  test('unit/routes/computed-properties/composable-cpm-test.js should pass jscs', function() {
    ok(true, 'unit/routes/computed-properties/composable-cpm-test.js should pass jscs.');
  });

});
define('wge-examples/tests/unit/routes/computed-properties/composable-cpm-test.jshint', function () {

  'use strict';

  module('JSHint - unit/routes/computed-properties');
  test('unit/routes/computed-properties/composable-cpm-test.js should pass jshint', function() { 
    ok(true, 'unit/routes/computed-properties/composable-cpm-test.js should pass jshint.'); 
  });

});
define('wge-examples/tests/unit/routes/computed-properties/cpm-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor('route:computed-properties/cpm', 'Unit | Route | computed properties/cpm', {});

  ember_qunit.test('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });

  // Specify the other units that are required for this test.
  // needs: ['controller:foo']

});
define('wge-examples/tests/unit/routes/computed-properties/cpm-test.jscs-test', function () {

  'use strict';

  module('JSCS - unit/routes/computed-properties');
  test('unit/routes/computed-properties/cpm-test.js should pass jscs', function() {
    ok(true, 'unit/routes/computed-properties/cpm-test.js should pass jscs.');
  });

});
define('wge-examples/tests/unit/routes/computed-properties/cpm-test.jshint', function () {

  'use strict';

  module('JSHint - unit/routes/computed-properties');
  test('unit/routes/computed-properties/cpm-test.js should pass jshint', function() { 
    ok(true, 'unit/routes/computed-properties/cpm-test.js should pass jshint.'); 
  });

});
define('wge-examples/tests/unit/routes/design-patterns-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor('route:design-patterns', 'Unit | Route | design patterns', {});

  ember_qunit.test('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });

  // Specify the other units that are required for this test.
  // needs: ['controller:foo']

});
define('wge-examples/tests/unit/routes/design-patterns-test.jscs-test', function () {

  'use strict';

  module('JSCS - unit/routes');
  test('unit/routes/design-patterns-test.js should pass jscs', function() {
    ok(true, 'unit/routes/design-patterns-test.js should pass jscs.');
  });

});
define('wge-examples/tests/unit/routes/design-patterns-test.jshint', function () {

  'use strict';

  module('JSHint - unit/routes');
  test('unit/routes/design-patterns-test.js should pass jshint', function() { 
    ok(true, 'unit/routes/design-patterns-test.js should pass jshint.'); 
  });

});
define('wge-examples/tests/unit/routes/design-patterns/index-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor('route:design-patterns/index', 'Unit | Route | design patterns/index', {});

  ember_qunit.test('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });

  // Specify the other units that are required for this test.
  // needs: ['controller:foo']

});
define('wge-examples/tests/unit/routes/design-patterns/index-test.jscs-test', function () {

  'use strict';

  module('JSCS - unit/routes/design-patterns');
  test('unit/routes/design-patterns/index-test.js should pass jscs', function() {
    ok(true, 'unit/routes/design-patterns/index-test.js should pass jscs.');
  });

});
define('wge-examples/tests/unit/routes/design-patterns/index-test.jshint', function () {

  'use strict';

  module('JSHint - unit/routes/design-patterns');
  test('unit/routes/design-patterns/index-test.js should pass jshint', function() { 
    ok(true, 'unit/routes/design-patterns/index-test.js should pass jshint.'); 
  });

});
define('wge-examples/tests/unit/routes/index-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor('route:index', 'Unit | Route | index', {});

  ember_qunit.test('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });

  // Specify the other units that are required for this test.
  // needs: ['controller:foo']

});
define('wge-examples/tests/unit/routes/index-test.jscs-test', function () {

  'use strict';

  module('JSCS - unit/routes');
  test('unit/routes/index-test.js should pass jscs', function() {
    ok(false, 'unit/routes/index-test.js should pass jscs.\nVariable declarations should use `let` or `const` not `var` at unit/routes/index-test.js :\n     7 |\n     8 |test(\'it exists\', function(assert) {\n     9 |  var route = this.subject();\n----------^\n    10 |  assert.ok(route);\n    11 |});');
  });

});
define('wge-examples/tests/unit/routes/index-test.jshint', function () {

  'use strict';

  module('JSHint - unit/routes');
  test('unit/routes/index-test.js should pass jshint', function() { 
    ok(true, 'unit/routes/index-test.js should pass jshint.'); 
  });

});
define('wge-examples/tests/unit/routes/testing-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor('route:testing', 'Unit | Route | testing', {});

  ember_qunit.test('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });

  // Specify the other units that are required for this test.
  // needs: ['controller:foo']

});
define('wge-examples/tests/unit/routes/testing-test.jscs-test', function () {

  'use strict';

  module('JSCS - unit/routes');
  test('unit/routes/testing-test.js should pass jscs', function() {
    ok(true, 'unit/routes/testing-test.js should pass jscs.');
  });

});
define('wge-examples/tests/unit/routes/testing-test.jshint', function () {

  'use strict';

  module('JSHint - unit/routes');
  test('unit/routes/testing-test.js should pass jshint', function() { 
    ok(true, 'unit/routes/testing-test.js should pass jshint.'); 
  });

});
define('wge-examples/tests/unit/routes/testing/index-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor('route:testing/index', 'Unit | Route | testing/index', {});

  ember_qunit.test('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });

  // Specify the other units that are required for this test.
  // needs: ['controller:foo']

});
define('wge-examples/tests/unit/routes/testing/index-test.jscs-test', function () {

  'use strict';

  module('JSCS - unit/routes/testing');
  test('unit/routes/testing/index-test.js should pass jscs', function() {
    ok(true, 'unit/routes/testing/index-test.js should pass jscs.');
  });

});
define('wge-examples/tests/unit/routes/testing/index-test.jshint', function () {

  'use strict';

  module('JSHint - unit/routes/testing');
  test('unit/routes/testing/index-test.js should pass jshint', function() { 
    ok(true, 'unit/routes/testing/index-test.js should pass jshint.'); 
  });

});
define('wge-examples/tests/unit/routes/testing/pageobject-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor('route:testing/pageobject', 'Unit | Route | testing/pageobject', {});

  ember_qunit.test('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });

  // Specify the other units that are required for this test.
  // needs: ['controller:foo']

});
define('wge-examples/tests/unit/routes/testing/pageobject-test.jscs-test', function () {

  'use strict';

  module('JSCS - unit/routes/testing');
  test('unit/routes/testing/pageobject-test.js should pass jscs', function() {
    ok(true, 'unit/routes/testing/pageobject-test.js should pass jscs.');
  });

});
define('wge-examples/tests/unit/routes/testing/pageobject-test.jshint', function () {

  'use strict';

  module('JSHint - unit/routes/testing');
  test('unit/routes/testing/pageobject-test.js should pass jshint', function() { 
    ok(true, 'unit/routes/testing/pageobject-test.js should pass jshint.'); 
  });

});
define('wge-examples/tests/unit/routes/testing/test-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor('route:testing/test', 'Unit | Route | testing/test', {});

  ember_qunit.test('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });

  // Specify the other units that are required for this test.
  // needs: ['controller:foo']

});
define('wge-examples/tests/unit/routes/testing/test-test.jscs-test', function () {

  'use strict';

  module('JSCS - unit/routes/testing');
  test('unit/routes/testing/test-test.js should pass jscs', function() {
    ok(true, 'unit/routes/testing/test-test.js should pass jscs.');
  });

});
define('wge-examples/tests/unit/routes/testing/test-test.jshint', function () {

  'use strict';

  module('JSHint - unit/routes/testing');
  test('unit/routes/testing/test-test.js should pass jshint', function() { 
    ok(true, 'unit/routes/testing/test-test.js should pass jshint.'); 
  });

});
define('wge-examples/tests/unit/utils/inject-object-test', ['wge-examples/utils/inject-object', 'qunit'], function (injectObject, qunit) {

  'use strict';

  qunit.module('Unit | Utility | inject object');

  // Replace this with your real tests.
  qunit.test('it works', function (assert) {
    var result = injectObject['default']();
    assert.ok(result);
  });

});
define('wge-examples/tests/unit/utils/inject-object-test.jscs-test', function () {

  'use strict';

  module('JSCS - unit/utils');
  test('unit/utils/inject-object-test.js should pass jscs', function() {
    ok(true, 'unit/utils/inject-object-test.js should pass jscs.');
  });

});
define('wge-examples/tests/unit/utils/inject-object-test.jshint', function () {

  'use strict';

  module('JSHint - unit/utils');
  test('unit/utils/inject-object-test.js should pass jshint', function() { 
    ok(true, 'unit/utils/inject-object-test.js should pass jshint.'); 
  });

});
define('wge-examples/tests/utils/inject-object.jscs-test', function () {

  'use strict';

  module('JSCS - utils');
  test('utils/inject-object.js should pass jscs', function() {
    ok(true, 'utils/inject-object.js should pass jscs.');
  });

});
define('wge-examples/tests/utils/inject-object.jshint', function () {

  'use strict';

  module('JSHint - utils');
  test('utils/inject-object.js should pass jshint', function() { 
    ok(true, 'utils/inject-object.js should pass jshint.'); 
  });

});
define('wge-examples/utils/inject-object', ['exports', 'ember'], function (exports, Ember) {

  'use strict';



  exports['default'] = injectObject;
  var computed = Ember['default'].computed;

  function injectObject(containerKey) {
    return computed({
      get: function get() {
        return this.get('container').lookup(containerKey);
      }
    }).readOnly();
  }

});
define('wge-examples/views/application', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].View.extend({});

});
/* jshint ignore:start */

/* jshint ignore:end */

/* jshint ignore:start */

define('wge-examples/config/environment', ['ember'], function(Ember) {
  var prefix = 'wge-examples';
/* jshint ignore:start */

try {
  var metaName = prefix + '/config/environment';
  var rawConfig = Ember['default'].$('meta[name="' + metaName + '"]').attr('content');
  var config = JSON.parse(unescape(rawConfig));

  return { 'default': config };
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

/* jshint ignore:end */

});

if (runningTests) {
  require("wge-examples/tests/test-helper");
} else {
  require("wge-examples/app")["default"].create({"name":"wge-examples","version":"0.0.0.15856947"});
}

/* jshint ignore:end */
//# sourceMappingURL=wge-examples.map