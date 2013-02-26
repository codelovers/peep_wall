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
		}
	},
	paths: {
		jquery: 'js/lib/jquery/jquery.min.1.9.1',
		underscore: 'js/lib/underscore/underscore.min.1.4.4',
		backbone: 'js/lib/backbone/backbone.min.0.9.10',
		text: 'js/lib/require/text'
	}
});

require([
	'tests/test'
], function() {
	// initialize routing and start Backbone.history()
});
