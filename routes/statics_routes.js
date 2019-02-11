/*  paginas staticas de Work Cloud */
const express = require('express');
let StaticsController = require('../controllers/statics');

let router = express.Router();

router.route('/').get(StaticsController.index);


module.exports = router;