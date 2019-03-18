/*  paginas staticas de Work Cloud */
const express = require('express');
let StaticsController = require('../controllers/statics');

let router = express.Router();

router.route('/').get(StaticsController.index);
router.route('/help').get(StaticsController.help);
router.route('/404').get(StaticsController.error404);
router.route('/register').get(StaticsController.register);
router.route('/login').get(StaticsController.login);


module.exports = router;