const express = require('express');
const router = express.Router();

const home = require('../controllers/home');
const publications = require('../controllers/publications');

module.exports = app =>{
router.get('/', home.index);
router.get('/publications/:publication_id', publications.index);
router.post('/publications/', publications.create);
router.post('/publications/:publications_id/like', publications.like);
router.post('/publications/:publications_id/comment', publications.comment);
router.delete('/publications/:publications_id', publications.delete);

app.use(router);
};
