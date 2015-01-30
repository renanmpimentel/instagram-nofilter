(function($){
  var source      = $("#photo").html(),
      template    = Handlebars.compile(source),
      $container  = $('#container');

  $.ajax({
    url: '/recents',
    type: 'GET',
    success: function(data){
      console.log(template(data));
      $container.html(template(data));
    }
  });
}(jQuery));
