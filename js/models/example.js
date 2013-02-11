define([
	'underscore',
	'backbone'
], function( _, Backbone ) {

	var ExampleModel = Backbone.Model.extend({
		// Default key/values
		defaults: {
			title: '',
			completed: false
		}
	});

	return ExampleModel;
});
