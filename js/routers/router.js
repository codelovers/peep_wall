define([
	'jquery',
	'backbone',
	'js/views/app'
], function($, Backbone, AppView) {

	var Router = Backbone.Router.extend({
		routes:{
			'foobar' : 'foobar', // #foobar
			'*actions': 'defaultAction'
		},

		foobar : function(){
			console.log('foobar');
		},

		defaultAction: function(value) {
			console.log('routing point - defaultAction');
			AppView.render();
		}

	});

	return Router;
});
