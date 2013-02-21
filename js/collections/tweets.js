define([
    'jquery', 'underscore', 'backbone', '../models/tweets'
], function($, _, Backbone, tweetsModel) {

    var collection = Backbone.Collection.extend({
        url: 'http://localhost:3000/tweet/circushalligalli',

        getTweets: function(view){

            this.fetch({
                success: function(collection) {
                    console.log('ready');
                    view.renderTweets(collection.models[0].attributes.statuses);

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