(function(window, document, $, undefined) {
  'use strict';
  
  var data,
      source,
      template;
  
	  // Get the template source
	  source = $("#my-template").html();
		  
	  // Compile the template into a Handlebars function
	  template = Handlebars.compile(source);
	$.get( "https://my-json-server.typicode.com/IndiaSuthar/SAPTest/interests", function( res ) {
	  //$( ".result" ).html( data );
	  data = {interests:res};
	  console.log( "Load was performed.",data );
	    // Pass our data object to the compiled Handlebars function
	  // Insert back into the page
		$('#interest-in-template').html(template(data));
	});
	//data = {interests : [{"value":"Java"},{"value":"AngularJS"},{"value":"NodeJS"},{"value":"Heroku"},{"value":"Tomcat"},{"value":"Salesforce"},{"value":"Handlebars.js"}]};
})(window, document, jQuery);