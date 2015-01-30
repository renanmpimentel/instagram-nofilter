(function($){
  var source   = $("#entry-template").html();

  console.log(source);
  var template = Handlebars.compile(source);

  $.ajax({
    url: '/recents',
    type: 'GET',
    success: function(data){
      var html = template(data);
      console.log(html);
    }
  });
}(jQuery));
