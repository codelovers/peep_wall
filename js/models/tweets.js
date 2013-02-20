define([
	'underscore',
	'backbone'
], function( _, Backbone ) {

	var TweetsModel = Backbone.Model.extend({
		// Default key/values
		defaults: {
			title: '',
			completed: false
		}
	});

	return TweetsModel;
});
