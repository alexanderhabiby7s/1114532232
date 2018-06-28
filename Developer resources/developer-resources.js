(function(window, document, $, undefined) {
  'use strict';
  
  var data, source, template;
  data = {
	card : [{"title":"Developer Resources","viewAllLink":"https://www.example.com","description":"Get access to additional documentation, overview and how-to videos, our monthly newsletter, and more.","items":{"list1":["Blogs","Podcasts/Video"],"list2":["Documentation","Newsletters"]}},{"title":"Trials & Downloads","viewAllLink":"https://www.example.com","description":"Get access to free trials, tools and downloads to explore SAP products and start building your first apps.","items":{"list1":["Product /Platforms","Developer Tools"]}}]
  }
  // Get the template source
  source = $("#Developer-Resources-template-script").html();
	  
  // Compile the template into a Handlebars function
  template = Handlebars.compile(source);
	
  // Pass our data object to the compiled Handlebars function
  // Insert back into the page
	$('#Developer-Resources-template').html(template(data));
  
})(window, document, jQuery);