define([
    'jquery', 'underscore', 'backbone', '../models/tweets'
], function($, _, Backbone, tweetsModel) {

    var collection = Backbone.Collection.extend({
        model: tweetsModel,
        url: 'http://localhost:3000/tweet/PS4',

        parse: function(response){ // manipulate response data

            var newTweet = '';
            var timestamp = '';
            var tweetsModels = [];

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

            return tweetsModels;

        },

        getTweets: function(view){
            that = this;
            this.fetch({
                success: function(collection) {
                    console.log('ready');
                    view.renderTweets(collection.models);

                },
                error: function(){
                    console.log('error - collections/tweets.js');
                }
            });

        },

        saveTweets: function(){

        }

    });


    return collection;
});