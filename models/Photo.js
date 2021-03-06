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

      api.tag_media_recent(tag, function(err, result, pagination, remaining, limit) {
        result.forEach(function(each) {
          if(each.filter !== 'Normal') {
            var ret = {
              "link": each.link,
              "standard": each.images.standard_resolution.url,
              "filter": each.filter,
              "username": each.user.username,
              "likes": each.likes.count,
            };

            ret.next_max_tag_id = pagination.next_max_tag_id,
            ret.min_tag_id = pagination.min_tag_id,

            json.push(ret);
          }
        });

        resolve(json);
        reject([]);
      });
    });
  }
};

Photos.init();

module.exports = Photos;
