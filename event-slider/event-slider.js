'use strict';
  
  var data,
      source,
      template;
	  
	// Get the template source
	source = $("#my-template").html();
	  
	// Compile the template into a Handlebars function
	template = Handlebars.compile(source);
	
	data = {"slides":[{"title":"SAP Events","description":"SAP S/4HANA Cloud SDK","image":"https://as.ftcdn.net/r/v1/pics/ea2e0032c156b2d3b52fa9a05fe30dedcb0c47e3/landing/images_photos.jpg","link":"http://www.taradaleregistry.com/motor-vehicles","detail":"Palm Springs, CA (USA) March 3-4, 2018"},{"title":"SAP Events 1.1","description":"SAP S/4HANA Cloud SDK","image":"https://www.usnews.com/dims4/USNEWS/7c03e59/2147483647/thumbnail/640x420/quality/85/?url=http%3A%2F%2Fmedia.beam.usnews.com%2F7f%2F94e0a80d28f20469ee71ab3037b441%2Fresizes%2F1500%2Fmedia%3A95e0718ed2484810aa184d72b23dc688Iran_Plane_Crash_52195.jpg","link":"https://www.newvision.co.ug/new_vision/news/1408774/car-dealers-motor-vehicles-phased","detail":"Palm Springs, CA (USA) March 3-4, 2018"},{"title":"SAP Events 1.2","description":"SAP S/4HANA Cloud SDK","image":"https://wallpaper-house.com/data/out/10/wallpaper2you_460917.jpg","link":"https://www.greentechmedia.com/articles/read/uber-autonomous-cars-death","detail":"Palm Springs, CA (USA) March 3-4, 2018"}]};
	
	$('#sap-event-template').html(template(data));
	$(".anim-slider").animateSlider(
	{
		autoplay	:true,
		interval	:5500,
		animations 	: 
		{
			0	: 	//Slide No1
			{
				li	: 
				{
					show   	  : "fadeIn",
					hide 	  : "fadeOutLeftBig",
					delayShow : "delay0.5s"
				}	
			},
			1	: //Slide No2
			{	
				li			:
				{
					show 		: "fadeInLeft",
					hide 		: "fadeOutLeftBig",
					delayShow   : "delay0-5s"
				}
			},
			2:
			{
				li			:
				{
					show 		: "fadeInUp",
					hide 		: "fadeOutDownBig",
					delayShow   : "delay0-5s"
				},
			}
		}
	});