const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');
const config = require('config');

const app = express();

var corsOptions = {
    origin: 'http://localhost:4200',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204 
}

app.use(bodyParser.json());

app.use(cors(corsOptions));

app.use('/api', routes);

app.listen(8000, () => {
    console.log("Server started!!!");
    connectMongo();
});

var connectMongo = function(){
	mongoose.connect(config.get('database'), { useNewUrlParser: true }).
	then(function(){
		console.log('Connected correctly to MongoDB: %s\n', config.get('database'));
	}).catch(err => {
		console.log(err);
		throw new Error(err);
	});

	mongoose.set('debug', config.get('mongooseDebug'));
};