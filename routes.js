// node imports
const router = require('express').Router();

const homeService = require('./services/home.service');

// router.get()

// app.route('/api/rooms').get((req, res) => {
//     res.send(
//         [{ owner: 'Juan', address: 'C/ La cabra, 9' }, 
//         { owner: 'Antonio', address: 'C/ El Pescao, 7' },
//         {owner: 'Manuel', address: 'C/ Antonio Bermúdez, 38'} ]
//     );
// });

// app.route('/api/rooms/:owner').get((req, res) => {
//     const requestedOwner = req.params['owner'];
//     res.send({ name: requestedOwner });
// });

// app.route('/api/rooms').post((req, res) => {
//     res.send(201, req.body);
// });

// app.route('/api/rooms/:owner').put((req, res) => {
//     res.send(200, req.body);
// });

router.get('/home', homeService.getAll);
router.post('/home', homeService.create);
// router.get('/api/home/:id', homeService.find);
// router.delete('/api/home/:id', homeService.remove);
// router.put('/api/home/:id', homeService.update);

// router.get('/api/room', homeService.getAll);
// router.post('/api/room', homeService.create);
// router.get('/api/room/:id', homeService.find);
// router.delete('/api/room/:id', homeService.remove);
// router.put('/api/room/:id', homeService.update);


module.exports = router;