define([
    'jquery',
    'underscore',
    'backbone',
    '../js/views/app'
], function( $, _, Backbone, AppView) {

    test( "Our first QUnit test - asserting results", function(){  
        // ok( boolean, message )

        // clone object for testing
        var obj = { counter: 0 };
         _.extend(obj, AppView);

        //equal( obj.testFoo(), 10, "passt");  
        ok( true, "passed!");  
        // equal( actualValue, expectedValue, message )  
        //equal( myString, "Hello Backbone.js", "The value expected is Hello Backbone.js!");  
    });
     
    
});
