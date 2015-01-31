var express = require('express'),
    router  = express.Router(),
    Photo   = require('../models/Photo');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Instagram #nofilter - Fail' });
});

router.get('/recents', function(req, res) {
  var promise = Photo.getMediaRecentByTag('nofilter');
  promise.then(function(resolve, reject) {
    res.json({"photos": resolve});
  });
});

module.exports = router;
