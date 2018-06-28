(function(window, document, $, undefined) {
  'use strict';
  
  var data,
      source,
      template;
  
  // Our data object
  data = {
    name: "Scott"	
  };
  
  window.Handlebars.registerHelper('select',      function( value, options ){
        var $el = $('<select />').html(       options.fn(this) );
        $el.find('[value="' + value + '"]').attr({'selected':'selected'});
        return $el.html();
    });
  
  // Get the template source
  source = $("#build-profile-template-script").html();
	  
  // Compile the template into a Handlebars function
  template = Handlebars.compile(source);
	
  // Pass our data object to the compiled Handlebars function
  // Insert back into the page
	$('#build-profile-template').html(template(data));
  
})(window, document, jQuery);