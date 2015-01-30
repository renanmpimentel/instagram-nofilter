(function($){
  var source      = $("#photo").html(),
      template    = Handlebars.compile(source),
      $container  = $('#container');

  $container.html('Loading...');

  $.ajax({
    url: '/recents',
    type: 'GET',
    success: function(data){
      $container.html(template(data));
    }
  });
}(jQuery));
