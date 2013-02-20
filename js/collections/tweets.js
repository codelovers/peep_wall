define([
    'jquery', 'underscore', 'backbone', '../models/tweets'
], function($, _, Backbone, tweetsModel) {

    var collection = Backbone.Collection.extend({
        // model: tweetsModel,
        url: 'http://localhost:3000/tweets'
    });
      
    return collection;
});