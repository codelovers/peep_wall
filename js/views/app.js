define([
	'jquery',
	'underscore',
	'backbone',
	'text!js/templates/example_template.html'
], function( $, _, Backbone, exampleTemplate, App) {

	var AppView = Backbone.View.extend({

		// Instead of generating a new element, bind to the existing skeleton of
		// the App already present in the HTML.
		el: '#app-wrapper',

		// compile template
		template: _.template(exampleTemplate),

		// delegated events
		events: {
			'click .foobar' : 'exampleFunction'
		},

		initialize: function() {
			// is called by initalize the object
		},

		// Re-rendering the App just means refreshing the statistics -- the rest
		// of the app doesn't change.
		render: function() {
			// render function
			$(this.el).html(this.template);
			console.log('yippie i´m here');
		},

		// helper functions
		////////////////////////////////////////
		exampleFunction: function() {
			
		}

	});

	return new AppView;
});
