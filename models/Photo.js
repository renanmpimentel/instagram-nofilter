var config  = require('config'),
    Promise = require('promise'),
    api     = require('instagram-node').instagram();

var Photos = {
  init: function() {
    api.use({
      client_id: config.get('instagram_api.client_id'),
      client_secret: config.get('instagram_api.client_secret')
    });
  },

  getMediaRecentByTag: function(tag) {
    return new Promise(function(resolve, reject) {
      var json = [];
      api.tag_media_recent(tag, function(err, result, remaining, limit) {
        result.forEach(function(each) {
          json.push({"standard": each.images.standard_resolution.url });
        });

        resolve(json);
        reject([]);
      });
    });
  }
};

Photos.init();

module.exports = Photos;
