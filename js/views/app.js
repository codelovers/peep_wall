define([
	'jquery',
	'underscore',
	'backbone',
	'../collections/tweets',
	'text!js/templates/example_template.html',
	'text!js/templates/main_navigation.html'
], function( $, _, Backbone, CollectionTweets, exampleTemplate, mainNavigation, App) {

	var AppView = Backbone.View.extend({

		// Instead of generating a new element, bind to the existing skeleton of
		// the App already present in the HTML.
		el: '#app-wrapper',
		nav: '#nav',
		tweetsWrapper: '#peep',
		collectionTweets: '',

		// compile template
		template: _.template(exampleTemplate),
		navigation: _.template(mainNavigation),

		// delegated events
		events: {
			'click .tweet' : 'exampleFunction'
		},

		initialize: function() {
			// is called by initalize the object
			this.getTweets();
		},

		// Re-rendering the App just means refreshing the statistics -- the rest
		// of the app doesn't change.
		render: function() {
			// render function

			$(this.el).html(this.template);
			$(this.nav).html(this.navigation);
		},

		// helper functions
		////////////////////////////////////////
		exampleFunction: function() {
		},

		getTweets: function(){
			this.collectionTweets = new CollectionTweets();
			this.collectionTweets.fetch({
				success: function(collection) {
					console.log(collection.models);
				},
                error: function(){
                    console.log('error');
                }
			});
		}

	});

	return new AppView;
});
