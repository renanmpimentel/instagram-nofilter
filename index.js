var config  = require('config');
    express = require('express'),
    app     = express(),
    api     = require('instagram-node').instagram(),

app.configure(function() {
  // The usual...
});

api.use({
  client_id: config.get('instagram_api.access_token'),
  client_secret: config.get('instagram_api.client_secret')
});
