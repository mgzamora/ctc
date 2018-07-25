const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

var corsOptions = {
    origin: 'http://example.com',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204 
}

app.use(bodyParser.json());

app.use(cors(corseOptions));

app.listen(8000, () => {
    console.log("Server started!!!");
});

app.route('api/rooms').get((req, res) => {
    res.send({
        rooms: [{ owner: 'Juan', adderss: 'C/ La cabra, 9' }, 
                { owner: 'Antonio', address: 'C/ El Pescao, 7' },
                {owner: 'Manuel', address: 'C/ Antonio Bermúdez, 38'} ]
    });
});

app.route('/api/rooms/:owner').get((req, res) => {
    const requestedOwner = req.params['owner'];
    res.send({ name: requestedOwner });
});

app.route('/api/rooms').post((req, res) => {
    res.send(201, req.body);
});

app.route('/api/rooms/:owner').put((req, res) => {
    res.send(200, req.body);
});

app.route('/api/cats/:owner').delete((req, res) => {
    res.sendStatus(204);
});