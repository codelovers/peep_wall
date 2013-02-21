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
			this.collectionTweets = new CollectionTweets();
			that = this;
			this.collectionTweets.getTweets(this);
			setInterval(function(){
				that.collectionTweets.getTweets(that);
			}, 30000);
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

		renderTweets: function(theTweets) {
			that = this;
			var renderedTweets = '';
			_.each(theTweets, function(value, key){

				renderedTweets += _.template(tweetTemplate, { tweet: value.attributes.title, author: value.attributes.author, time: value.attributes.date });

			});

			$(this.tweetsWrapper).prepend(renderedTweets);
			$(this.tweetsWrapper).find('.tweet').show('400');

		}

	});

	return AppView;
});
