define([
	'underscore',
	'backbone'
], function( _, Backbone) {

	var tweetsModel = Backbone.Model.extend({
		url: 'http://localhost:3100/save',
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
