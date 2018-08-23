// node imports
const repository = require('../repositories/home.repository');

var getAll = function (req, res, next) {

		repository.getAll(req.requestData).then((response) => {
			res.json(response);
		}).catch((error) => {
			throw new Error(error);
		});
};

var create = function (req, res, next) {
	
	repository.create(req.body).then((response) => {
		res.header('Location', response._id);
		res.json(response);
	}).catch((error) => {
		throw new Error(error);
	});
};

// var find = function (req, res, next) {
// 	req.requestData.params.id = req.params.id;
// 	const id = req.params.id;
// 	const requestData = req.requestData;
// 	const mode = req.query.mode;
// 	repository.find(req.requestData).then((response) => {
// 		if (mode === 'read') {
// 			response.views++;
// 			repository.update(id, requestData, {views: response.views}).then((response) => {
// 				res.json(response);
// 			}).catch((error) => {
// 				if (error.type !== null && error.type === 'notFound') {
// 					four0four.send404(req, res, error.message);
// 				} else {
// 					throw new Error(error);
// 				}
// 			});
// 		}else {
// 			res.json(response);	
// 		}
// 	}).catch((error) => {
// 		if (error.type !== null && error.type === 'notFound') {
// 			four0four.send404(req, res, error.message);
// 		} else {
// 			throw new Error(error);
// 		}
// 	});
// };

// var update = function (req, res) {
	
// 	repository.update(req.params.id, req.requestData, req.requestData.updateData).then((response) => {
// 		res.json(response);
// 	}).catch((error) => {
// 		if (error.type !== null && error.type === 'notFound') {
// 			four0four.send404(req, res, error.message);
// 		} else {
// 			throw new Error(error);
// 		}
// 	});
// };

// var remove = function (req, res, next) {
	
// 	repository.remove(req.params.id).then((response) => {
// 		res.json(response);
// 	}).catch((error) => {
// 		if (error.type !== null && error.type === 'notFound') {
// 			four0four.send404(req, res, error.message);
// 		} else {
// 			throw new Error(error);
// 		}
// 	});
// };

module.exports.getAll = getAll;
// module.exports.find = find;
module.exports.create = create;
// module.exports.update = update;
// module.exports.remove = remove;