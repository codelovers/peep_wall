var express = require('./node_modules/express');
var mongoose = require('./node_modules/mongoose');
var oAuth = require('./node_modules/oauth').OAuth;
var app = null;
var oa = null;
var lastTweetId = 0;

init();

// init
///////////////////////////////////////////////////////////
function init(){
    // init db
    dbConnector();

    // init express
    app = express();
    app.use(express.bodyParser());
    app.all('*', function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Methods", "POST, GET");
        res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type");
        next();
    });

    oa = new oAuth(
        "http://twitter.com/oauth/request_token",
        "http://twitter.com/oauth/access_token",
        'y127hdBETk3KoJrzQdmw', '9zUx9bK9cFbjqh6bSnvNG7J8uDX9YrCS1h8XvLGYY',
        "1.0A", null, "HMAC-SHA1"
    );

}

// request/response handling
///////////////////////////////////////////////////////////

app.get('/test', function(req, res) {
    console.log('request GET: /test');
    res.send(req.params);
});

app.get('/test/:id', function(req, res) {
    //mongoose.set(req.params.id, req.params.id)
    console.log('request GET: /test/id' + req.params.id);
    res.send(req.params.id);
});

app.get('/tweet/:hashtag', function(req, res) {
    oa.get("https://api.twitter.com/1.1/search/tweets.json?q=%23" + req.params.hashtag + "&lang=en&result_type=recent&since_id=" + lastTweetId + "&count=3", '155494201-Errz5Sd3TQQzeXYnr75RXaymFHFlyIfbTZK3XQwJ', 'SX3thT8nwek6cGAYzgilQ3wnbaYbq6A7yS9EqJlI8Y', function(error, data) {
        res.setHeader("Content-Type", "application/json");
        res.send(data);
        var dataAsJson = JSON.parse(data);
        lastTweetId = dataAsJson.search_metadata.max_id_str;
    });
});

app.post('/test', function(req, res) {
    console.log('request POST: /test');
    res.send('request POST: /test/id');
});

// db handling
///////////////////////////////////////////////////////////
function dbConnector(){
    mongoose.connect('mongodb://localhost/test');

    var db = mongoose.connection;
        db.on('error', console.error.bind(console, 'connection error:'));
        db.once('open', function callback () {
            console.log('db connection: successfull');
        });

}


// server listen on port X
///////////////////////////////////////////////////////////
app.listen(3000);