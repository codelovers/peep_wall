// Require.js allows us to configure shortcut alias
require.config({
	// The shim config allows us to configure dependencies for
	// scripts that do not call define() to register a module
	shim: {
		backbone: {
			deps: [
				'underscore',
				'jquery'
			],
			exports: 'Backbone'
		},
		underscore: { // template
			exports: '_'
		}, dropdown: {
			deps: [
				'jquery'
			]
		}
	},
	paths: {
		jquery: 'js/lib/jquery/jquery.min.1.9.1',
		underscore: 'js/lib/underscore/underscore.min.1.4.4',
		backbone: 'js/lib/backbone/backbone.min.0.9.10',
		text: 'js/lib/require/text',
		dropdown: 'js/lib/twitter_bootstrap/bootstrap-collapse'
	}
});

require([
	'js/routers/router',
	'jquery',
	'dropdown'
], function(Router, $, dropdown) {

	// initialize routing and start Backbone.history()
	new Router();
	Backbone.history.start();

});
