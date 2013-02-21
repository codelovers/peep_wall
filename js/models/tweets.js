define([
	'underscore',
	'backbone'
], function( _, Backbone) {

	var tweetsModel = Backbone.Model.extend({
		// Default key/values
		defaults: {
			title: '',
			author: '',
			date: '',
			max_id: 0,
			timestamp: ''
		}
	});

	return tweetsModel;
});
