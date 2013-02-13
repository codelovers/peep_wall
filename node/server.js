var express = require('./node_modules/express');
var mongoose = require('./node_modules/mongoose');
var app = null;

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

};

// request/response handling
///////////////////////////////////////////////////////////

app.get('/test', function(req, res) {
        console.log('request GET: /test');
        res.send(testData);
});

app.get('/test/:id', function(req, res) {
        //mongoose.set(req.params.id, req.params.id)
        console.log('request GET: /test/id' + req.params.id);
        res.send(req.params.id);
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