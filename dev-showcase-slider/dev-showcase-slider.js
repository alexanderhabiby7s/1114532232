'use strict';
  
  var data,
      source,
      template;
	  
	// Get the template source
	source = $("#my-template").html();
	  
	// Compile the template into a Handlebars function
	template = Handlebars.compile(source);
	
	data = {"slides":[{"title":"Developer Showcases","description":"Connected Race Car Dashboard by McCoy-URE","image":"http://www.taradaleregistry.com/uploads/images/headers/motor-vehicles.jpg","link":"http://www.taradaleregistry.com/motor-vehicles"},{"title":"Developer Showcases 1.1","description":"Connected Race Car Dashboard by McCoy-URE","image":"https://www.newvision.co.ug/w-images/01d5fe4b-29b8-4c28-85d7-7d1134c909d9/7/2015_8largeimg228_Aug_2015_161055930-703x422.jpg","link":"https://www.newvision.co.ug/new_vision/news/1408774/car-dealers-motor-vehicles-phased"},{"title":"Developer Showcases 1.2","description":"Connected Race Car Dashboard by McCoy-URE","image":"https://dqbasmyouzti2.cloudfront.net/assets/content/cache/made/content/images/articles/Uber_Driverless_Car_XL_721_420_80_s_c1.jpg","link":"https://www.greentechmedia.com/articles/read/uber-autonomous-cars-death"}]};
	
	$('#dev-showcase-template').html(template(data));
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