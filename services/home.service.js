// node imports
const repository = require('../repositories/home.repository');
const utils = require('../utils/utils');

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

var find = function (req, res, next) {

	const id = req.params.id;
	if (!utils.isValidId(id)) {
		res.send(400);
		return;
	}

	repository.find(id).then((response) => {
		if (response) {
			res.json(response);	
		} else {
			res.send(404);
		}
	}).catch((error) => {
		throw new Error(error);
	});
};

var update = function (req, res) {
	
	const id = req.params.id;
	if (!utils.isValidId(id)) {
		res.send(400);
		return;
	}

	repository.update(req.params.id, req.body).then((response) => {
		if (response) {
			res.json(response);	
		} else {
			res.send(404);
		}
	}).catch((error) => {
		if (error.type !== null && error.type === 'notFound') {
			four0four.send404(req, res, error.message);
		} else {
			throw new Error(error);
		}
	});
};

var remove = function (req, res, next) {
	
	const id = req.params.id;
	if (!utils.isValidId(id)) {
		res.send(400);
		return;
	}

	repository.remove(id).then((response) => {
		if (response) {
			res.json(response);	
		} else {
			res.send(404);
		}
	}).catch((error) => {
		throw new Error(error);
	});
};

module.exports.getAll = getAll;
module.exports.find = find;
module.exports.create = create;
module.exports.update = update;
module.exports.remove = remove;