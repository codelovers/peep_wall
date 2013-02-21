define([
	'jquery',
	'underscore',
	'backbone',
	'../collections/tweets',
	'text!js/templates/example_template.html',
	'text!js/templates/main_navigation.html',
	'text!js/templates/tweet.html'
], function( $, _, Backbone, CollectionTweets, exampleTemplate, mainNavigationTemplate, tweetTemplate) {

	var AppView = Backbone.View.extend({

		// Instead of generating a new element, bind to the existing skeleton of
		// the App already present in the HTML.
		el: '#app-wrapper',
		nav: '#nav',
		tweetsWrapper: '#peep',
		collectionTweets: '',

		// compile template
		template: _.template(exampleTemplate, { test: 'the Tweets' }),

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
			that = this;
			this.collectionTweets = new CollectionTweets();
			this.collectionTweets.fetch({
				success: function(collection) {
					var theTweets = collection.models[0].attributes.statuses;
					that.renderTweets(theTweets);
				},
                error: function(){
                    console.log('error');
                }
			});
		},

		renderTweets: function(theTweets) {

			that = this;
			var test = '';
			_.each(theTweets, function(value, key){
				time = value.user.created_at;
				test += _.template(tweetTemplate, { tweet: value.text, author: value.user.name, time: time.substr(0, 19) });
				console.log(value);
			});
			$(this.tweetsWrapper).append(test);
		}

	});

	return AppView;
});
