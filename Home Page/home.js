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
Handlebars.registerPartial('startWithTutorialPartial',
	$("#start-with-tutorial-template").html());
Handlebars.registerPartial('SAPEventsPartial',
	$("#sap-events-template-script").html());
Handlebars.registerPartial('DevShowcasePartial',
	$("#dev-showcase-partial-template").html());
Handlebars.registerPartial('ResourcesPartial',
	$("#Developer-Resources-template-script").html());
Handlebars.registerPartial('DeveloperSocialConnectPartial',
	$("#connect-with-developers-partial").html());
Handlebars.registerPartial('SAPNewlatterPartial',
	$("#SAP-Newslatter-text-partial").html());
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
	}], "devshowcases":[{"image":"https://image.ibb.co/mZJ2Po/devshowcase.png","title":"Search Your Cloud","description":"SearchYourCloud is a solution to help users who have information stored in many different places — such as cloud stores, email, Enterprise Document Management Systems, and their desktops — securely find and access it quickly with one search."}], "devshowcase":[{"image":"https://image.ibb.co/mZJ2Po/devshowcase.png","title":"Search Your Cloud","description":"SearchYourCloud is a solution to help users who have information stored in many different places — such as cloud stores, email, Enterprise Document Management Systems, and their desktops — securely find and access it quickly with one search."}],"slides":[{"title":"SAP Events","description":"SAP S/4HANA Cloud SDK","image":"https://as.ftcdn.net/r/v1/pics/ea2e0032c156b2d3b52fa9a05fe30dedcb0c47e3/landing/images_photos.jpg","link":"http://www.taradaleregistry.com/motor-vehicles","detail":"Palm Springs, CA (USA) March 3-4, 2018"},{"title":"SAP Events 1.1","description":"SAP S/4HANA Cloud SDK","image":"https://www.usnews.com/dims4/USNEWS/7c03e59/2147483647/thumbnail/640x420/quality/85/?url=http%3A%2F%2Fmedia.beam.usnews.com%2F7f%2F94e0a80d28f20469ee71ab3037b441%2Fresizes%2F1500%2Fmedia%3A95e0718ed2484810aa184d72b23dc688Iran_Plane_Crash_52195.jpg","link":"https://www.newvision.co.ug/new_vision/news/1408774/car-dealers-motor-vehicles-phased","detail":"Palm Springs, CA (USA) March 3-4, 2018"},{"title":"SAP Events 1.2","description":"SAP S/4HANA Cloud SDK","image":"https://wallpaper-house.com/data/out/10/wallpaper2you_460917.jpg","link":"https://www.greentechmedia.com/articles/read/uber-autonomous-cars-death","detail":"Palm Springs, CA (USA) March 3-4, 2018"}],"card" : [{"title":"Developer Resources","viewAllLink":"https://www.example.com","description":"Get access to additional documentation, overview and how-to videos, our monthly newsletter, and more.","items":{"list1":["Blogs","Podcasts/Video"],"list2":["Documentation","Newsletters"]}},{"title":"Trials & Downloads","viewAllLink":"https://www.example.com","description":"Get access to free trials, tools and downloads to explore SAP products and start building your first apps.","items":{"list1":["Product /Platforms","Developer Tools"]}}],"SocialConnect":{"title":"Connect with developers","description":"Get connected and stay connected with the SAP Developer community.","social":[{"icon":"https://www.sap.com/dam/application/shared/images/social-icons/svg-icon-social-network-facebook.svg","color":"#008fd3","url":"https://www.facebook.com/indiasuthar1"},{"icon":"https://www.sap.com/dam/application/shared/images/social-icons/svg-icon-social-network-twitter02.svg","color":"#008fd3","url":"https://twitter.com/IndiaSuthar"},{"icon":"https://www.sap.com/dam/application/shared/images/social-icons/svg-icon-social-network-google-plus.svg","color":"#008fd3","url":"https://plus.google.com/108610988900186649489"},{"icon":"https://www.sap.com/dam/application/shared/images/social-icons/svg-icon-social-network-linked-in.svg","color":"#008fd3","url":"https://www.linkedin.com/in/bharat-bhushan-suthar-341144ba/"}]}};
	console.log( "Load was performed.",data );
	setDataInTemplate();
});