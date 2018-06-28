
  'use strict';
  
  var data,
      source,
      template;
  
	function interestChanged(){
		var ineterest = $(".interest-select option:selected").val();
        data.interest = ineterest;
		var interestSelected = true;
		if(ineterest == "Start here...")
			interestSelected = false;
		setDataInTemplate(interestSelected);
	}
	//Definition for optionsPartial partials
	Handlebars.registerPartial('optionsPartial',
    $("#options-partial").html());
	
	Handlebars.registerPartial('buildProfilePartial',
    $("#build-profile-template-script").html());
	
	Handlebars.registerPartial('productCardPartial',
    $("#product-card-partial-template").html());
	
	Handlebars.registerPartial('expendedInterestListing',
		$("#expended-interest-listing-partial-template").html());
	Handlebars.registerPartial('blueprintPartial',
		$("#bluprint-partial-template").html());
		
	Handlebars.registerHelper("interestSelected",
		function(item) {
			if(item && item != null && item != "Start here...")
				return false;
			else
				return true;
		}
	);
		
	Handlebars.registerHelper('getComponentName', function(name) {
		return name;
	});
	
	Handlebars.registerHelper('changeComponentBySelectedInterest', function(interest) {
		return name;
	});
	
	Handlebars.registerHelper('select', function( value, options ){
        var $el = $('<select />').html( options.fn(this) );
        $el.find('[value="' + value + '"]').attr({'selected':'selected'});
        return $el.html();
    });

	
		
	Handlebars.registerPartial('quotationPartial',
    $("#quotation-slider-partial-script").html());
	
	function setDataInTemplate(interestSelected){
		// Pass our data object to the compiled Handlebars function
		// Insert back into the page
		$('#interest-in-template').html(template(data));
		if(!interestSelected){
			$('.flexslider').flexslider({
				animation: "slide"
			});
		}
	}
	
	  // Get the template source
	  source = $("#my-template").html();
	  
	  // Compile the template into a Handlebars function
	  template = Handlebars.compile(source);
		$.get( "https://my-json-server.typicode.com/IndiaSuthar/SAPTest/interests", function( res ) {
	  //$( ".result" ).html( data );
	  data = {interests:res, quotation : [{"quote":"Developing on SAP Cloud Platform was very quick to pick up and incredibly powerful.", "writer":"Bradley Hollander", "link":"https://www.example.com", "image":"https://webhostinggeeks.com/assets/app/assets/images/hero-man.png","title":"SAP Cloud Platform"},
		{"quote":"Measuring programming progress by lines of code is like measuring aircraft building progress by weight.", "writer":"Bill Gates", "link":"https://archive.sap.com/discussions/thread/3791806", "image":"http://www.pngall.com/wp-content/uploads/2016/05/Man-Download-PNG.png","title":"SAP Cloud Platform"},
		{"quote":"Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live.", "writer":"Martin Golding", "link":"https://archive.sap.com/discussions/thread/3791806", "image":"http://www.stickpng.com/assets/images/580b57fbd9996e24bc43be24.png","title":"SAP Cloud Platform"},
		{"quote":"I don't care if it works on your machine! We are not shipping your machine!", "writer":"Vidiu Platon", "link":"https://archive.sap.com/discussions/thread/3791806", "image":"http://www.pngpix.com/wp-content/uploads/2016/10/PNGPIX-COM-Bill-Gates-PNG-Image-1-500x466.png","title":"SAP Cloud Platform"}], "componentName" : "quotationPartial", "products":[{"productIconImage":"https://image.ibb.co/cdOXPo/cloud_platform_2x.png","productTitle":"SAP Cloud Platform","productDescription":"Build, extend, and run innovative enterprise applications in the cloud."},{"productIconImage":"https://image.ibb.co/dn0w0T/abap_2x.png","productTitle":"SAP Cloud Platform","productDescription":"Apple and SAP Partner to Revolutionize Work on iPhone® and iPad®"},{"productIconImage":"https://image.ibb.co/mWv778/s_4_hana_2x.png","productTitle":"SAP S/4HANA Cloud SDK","productDescription":"This Software Development Toolkit enables you to build and run enterprise applications on SAP Cloud Platform within minutes."}], "blueprints":[
		{"image":"https://image.ibb.co/hB6NPo/blueprint.png", "title":"Trending Tutorials", "description":"This blueprint provides common information, guidance, and direction for implementing SAP Assertion SSO from SAP Cloud Platform to the backend system that is running on-premise to achieve Single Sign-On. It will allow you to use this method for any endpoint service that accept SAP assertion tickets."
		}], "devshowcases":[{"image":"https://image.ibb.co/mZJ2Po/devshowcase.png","title":"Search Your Cloud","description":"SearchYourCloud is a solution to help users who have information stored in many different places — such as cloud stores, email, Enterprise Document Management Systems, and their desktops — securely find and access it quickly with one search."}], "devshowcase":[{"image":"https://image.ibb.co/mZJ2Po/devshowcase.png","title":"Search Your Cloud","description":"SearchYourCloud is a solution to help users who have information stored in many different places — such as cloud stores, email, Enterprise Document Management Systems, and their desktops — securely find and access it quickly with one search."}]};
		console.log( "Load was performed.",data );
		setDataInTemplate();
	});
	//data = {interests : [{"value":"Java"},{"value":"AngularJS"},{"value":"NodeJS"},{"value":"Heroku"},{"value":"Tomcat"},{"value":"Salesforce"},{"value":"Handlebars.js"}]};