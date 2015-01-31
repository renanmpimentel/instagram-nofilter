(function($){
  var source      = $("#photo").html(),
      template    = Handlebars.compile(source),
      $container  = $('#container');

  $.ajax({
    url: '/recents',
    type: 'GET',
    success: function(data){
      $container.html(template(data));
    }
  });

  $("#more-images").click(function(e){
    $.ajax({
      url: '/recents',
      type: 'GET',
      success: function(data){
        console.log(data);
        $container.append(template(data));
      }
    });
  });
 }(jQuery));
