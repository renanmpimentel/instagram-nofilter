var config  = require('config');
    express = require('express'),
    app     = express(),
    api     = require('instagram-node').instagram(),

app.configure(function() {
  // The usual...
});

console.log('ae');
console.log(config.get('instagram_api.client_id'));

api.use({
  client_id: config.get('instagram_api.client_id'),
  client_secret: config.get('instagram_api.client_secret')
});

api.tag('nofilter', function(err, result, remaining, limit) {
  console.log(result, remaining);
});
