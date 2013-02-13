define([
	'jquery',
	'underscore',
	'backbone',
	'text!js/templates/example_template.html',
	'text!js/templates/main_navigation.html'
], function( $, _, Backbone, exampleTemplate, mainNavigation, App) {

	var AppView = Backbone.View.extend({

		// Instead of generating a new element, bind to the existing skeleton of
		// the App already present in the HTML.
		el: '#app-wrapper',
		nav: '#nav',
		tweetsWrapper: '#peep',
		tweets: {},
		hashtag: 'tatort',

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
			console.log('yippie i´m here');
			$(this.el).html(this.template);
			$(this.nav).html(this.navigation);
			if(!$.isEmptyObject(this.tweets)){
				for (var i = 0; i < this.tweets.tweets.length; i++) {
					$(this.tweetsWrapper).append('<div class="tweet">' + this.tweets.tweets[i].tweet + '<br>@' + this.tweets.tweets[i].author + ' – ' + this.tweets.tweets[i].date.substr(-15, 6)  + '<hr><br></div>');
				}
			}
		},

		// helper functions
		////////////////////////////////////////
		exampleFunction: function() {
		},

		getTweets: function() {
			var that = this;
			var request = $.ajax({
				type: "GET",
				url: "https://search.twitter.com/search.json",
				data: "q=%23" + this.hashtag,
				dataType: 'jsonp',
				success: function(r){
					console.log(r);
					that.tweets.tweets = [];
					for (var i = 0; i < r.results.length; i++) {
						that.tweets.tweets.push({'tweet' : r.results[i].text, 'author' : r.results[i].from_user, 'date' : r.results[i].created_at });

					}
					that.render();
				}
			});
		}
	});

	return new AppView;
});
