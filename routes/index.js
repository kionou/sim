var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});
router.get('/but', function(req, res, next) {
  res.render('but',);
});

router.get('/match', function(req, res, next) {
  res.render('match',);
});

router.get('/serieA', function(req, res, next) {
  res.render('serie',);
});


router.get('/seriebut', function(req, res, next) {
  res.render('sbut',);
});












module.exports = router;
