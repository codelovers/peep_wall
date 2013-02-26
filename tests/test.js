define([
    'jquery',
    'underscore',
    'backbone',
    '../js/views/app',
    '../js/collections/tweets'
], function( $, _, Backbone, AppView, Collection) {

    module('AppView');
        test('Rendering Tweets', 3, function(){
            var view = new AppView();
            var theTweets = [{
                attributes: {
                    author: 'Hans',
                    date: 'heute',
                    title: 'Der Tweet'
                }
            }];

            // clone object for testing
            var obj = {};
             _.extend(obj, view);

            var renderTweets = obj.renderTweets(theTweets);

            var author = $(renderTweets).find('strong').text();
            var date = $(renderTweets).find('span').text();
            var title = $(renderTweets).find('p').text();

            equal(author, 'Hans', 'Author is Hans');
            equal(date, 'heute', 'Date is heute');
            equal(title, 'Der Tweet', 'Title is Der Tweet');
        });

    module('Collection');
        fetchTweetsTest();
        function fetchTweetsTest(){
            var collection = new Collection();
            var view = new AppView();
            collection.url = function(){
                return 'data/collection.json';
            };

            // clone object for testing
            var obj = {};
             _.extend(obj, collection);

            var counter = 0;
            obj.fetch({
                success: function(collection){
                    _.each(collection._byId, function(value, key){
                        switch(counter) {
                            case 0:
                                test('First Tweet', 5, function(){
                                    equal(value.attributes.author, 'Paul', 'Author ok!');
                                    equal(value.attributes.date, 'heute', 'Date ok!');
                                    equal(value.attributes.max_id, 1, 'max_id ok!');
                                    equal(value.attributes.timestamp, 0, 'timestamp ok!');
                                    equal(value.attributes.title, 'Tweet one', 'Tweet ok!');
                                });
                                counter++;
                                break;
                            case 1:
                                test('Second Tweet', 5, function(){
                                    equal(value.attributes.author, 'Thomas', 'Author ok!');
                                    equal(value.attributes.date, 'gestern', 'Date ok!');
                                    equal(value.attributes.max_id, 2, 'max_id ok!');
                                    equal(value.attributes.timestamp, 0, 'timestamp ok!');
                                    equal(value.attributes.title, 'Tweet two', 'Tweet ok!');
                                });
                                counter++;
                                break;
                            case 2:
                                test('Third Tweet', 5, function(){
                                    equal(value.attributes.author, 'Magda', 'Author ok!');
                                    equal(value.attributes.date, 'morgen', 'Date ok!');
                                    equal(value.attributes.max_id, 3, 'max_id ok!');
                                    equal(value.attributes.timestamp, 0, 'timestamp ok!');
                                    equal(value.attributes.title, 'Tweet three', 'Tweet ok!');
                                });
                                break;
                        }

                    });
                }
            });
        }
});
