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
	  data = {"title":"Connect with developers","description":"Get connected and stay connected with the SAP Developer community.","social":[{"icon":"https://www.sap.com/dam/application/shared/images/social-icons/svg-icon-social-network-facebook.svg","color":"#008fd3","url":"https://www.facebook.com/indiasuthar1"},{"icon":"https://www.sap.com/dam/application/shared/images/social-icons/svg-icon-social-network-twitter02.svg","color":"#008fd3","url":"https://twitter.com/IndiaSuthar"},{"icon":"https://www.sap.com/dam/application/shared/images/social-icons/svg-icon-social-network-google-plus.svg","color":"#008fd3","url":"https://plus.google.com/108610988900186649489"},{"icon":"https://www.sap.com/dam/application/shared/images/social-icons/svg-icon-social-network-linked-in.svg","color":"#008fd3","url":"https://www.linkedin.com/in/bharat-bhushan-suthar-341144ba/"}]};
	  console.log( "Load was performed.",data );
	    // Pass our data object to the compiled Handlebars function
	  // Insert back into the page
		$('#interest-in-template').html(template(data));
	});
	//data = {interests : [{"value":"Java"},{"value":"AngularJS"},{"value":"NodeJS"},{"value":"Heroku"},{"value":"Tomcat"},{"value":"Salesforce"},{"value":"Handlebars.js"}]};
})(window, document, jQuery);