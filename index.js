var config  = require('config');
    express = require('express'),
    app     = express(),
    api     = require('instagram-node').instagram(),

api.use({
  client_id: config.get('instagram_api.client_id'),
  client_secret: config.get('instagram_api.client_secret')
});

api.tag('nofilter', function(err, result, remaining, limit) {
  console.log(result, remaining);
});
