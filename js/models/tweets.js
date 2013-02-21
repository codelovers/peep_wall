define([
	'underscore',
	'backbone'
], function( _, Backbone) {

	var TweetsModel = Backbone.Model.extend({
		// Default key/values
		defaults: {
			title: '',
			author: '',
			datum: '',
			max_id: 0,
			timestamp: ''
		}
	});

	return TweetsModel;
});
