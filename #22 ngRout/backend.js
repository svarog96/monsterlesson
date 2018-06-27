var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(cors());

app.get('/', function(req, res) {
    res.send('index.html');
});

app.post('/books', function(req, res) {
    books.push({
        name: req.body.name
    });
    res.send(200);
});

var server = app.listen(3001, function() {
    console.log('backend started');
});
