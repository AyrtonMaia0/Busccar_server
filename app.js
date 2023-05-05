var express = require('express'),
path = require('path'),
bodyParser = require('body-parser'),
cors = require('cors'),
mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://127.0.0.1:27017/busccar', { useNewUrlParser: true, useUnifiedTopology: true }).then(
  () => {console.log('Database is connected') },
  err => { console.log('Can not connect to the database'+ err)});


const carroRoute = require('./routes/carro.route');

//Inicializa o aplicativo Express
var app = express();

//Config do corpo de solicitação
app.use(bodyParser.json());

//Config do Cors
app.use(cors());

app.use('/carro', carroRoute);

app.get('/', function(req, res){
   res.send("Hello World!");
});

app.listen(3000,function(){
    console.log('Listening on port 3000!');
});