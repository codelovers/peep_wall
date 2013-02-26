define([
	'jquery',
	'backbone',
	'../views/app'
], function($, Backbone, AppView) {

	var appView = new AppView();

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
			appView.render();
		}

	});

	return Router;
});
