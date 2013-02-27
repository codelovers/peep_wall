define([
    'jquery', 'underscore', 'backbone', '../models/tweets'
], function($, _, Backbone, tweetsModel) {

    var query_url = 'http://localhost:3100/old_tweets';
    var first = false;
    var collection = Backbone.Collection.extend({
        model: tweetsModel,
        url: function() {
            return query_url;
        },

        parse: function(response){ // manipulate response data
            var newTweet = '';
            var timestamp = '';
            var tweetsModels = [];

            if(response.old){
                //Database
                _.each(response.theTweets, function(value, key){
                    newTweet = new tweetsModel();

                    newTweet.attributes.title = value.title;
                    newTweet.attributes.author = value.author;
                    newTweet.attributes.date = value.date;
                    newTweet.attributes.max_id = value.max_id;
                    newTweet.attributes.timestamp = value.timestamp;

                    tweetsModels.push(newTweet);

                });
            } else {
                // Twitter
                _.each(response.statuses, function(value, key){
                    newTweet = new tweetsModel();

                    newTweet.attributes.title = value.text;
                    newTweet.attributes.author = value.user.name;
                    newTweet.attributes.date = value.created_at;
                    newTweet.attributes.max_id = value.id;

                    timestamp = new Date().getTime();
                    newTweet.attributes.timestamp = timestamp;

                    tweetsModels.push(newTweet);

                });
            }


            return tweetsModels;

        },

        getTweets: function(view){

            var that = this;
            this.fetch({
                success: function(collection) {
                    console.log('success - getTweets');
                    // if(first){
                    //     that.saveTweets();
                    // }

                    first = true;
                    query_url = 'http://localhost:3100/tweet/ps4';

                    // callback to the view
                    view.renderTweets(collection.models);
                },
                error: function(){
                    console.log('error - collections/tweets.js');
                }
            });

        },

        saveTweets: function(){
            if(!_.isEmpty(this.models)) {
                _.each(this.models, function(value, key){
                    value.save();
                });
            }
        }

    });


    return collection;
});