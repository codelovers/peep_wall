define([
    'jquery', 'underscore', 'backbone', 'models/example'
], function($, _, Backbone, exampleModel) {

    var collection = Backbone.Collection.extend({
        model: exampleModel,          
        url: ''
    });
      
    return collection;
});