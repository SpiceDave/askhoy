/******************************************************************************************
*
* to perfom when page loads...
*
*******************************************************************************************/
jQuery(document).ready(function(){

	/******************************************************************************************
	*
	* for the custom dropdown boxes 
	*
	*******************************************************************************************/
	  var ddDuration = [
			{ text: "<strong>2-3</strong> hours", value: 1 },
			{ text: "<strong>3-4</strong> hours", value: 2 },
			{ text: "<strong>4-5</strong> hours", value: 3 },
			{ text: "<strong>5-6</strong> hours", value: 4 },
			{ text: "<strong>6-7</strong> hours", value: 5 },
			{ text: "<strong>7+</strong> hours", value: 6 }
		];
		
		$('#ddDuration').ddslick({
			data: ddDuration,
			selectText: "How long do you train each week?"
		});
		
	var ddSport = [
			{ text: "Cycling", value: 1 },
			{ text: "Running", value: 2 },
			{ text: "Triathlon", value: 3 }
		];
		
		$('#ddSport').ddslick({
			data: ddSport,
			selectText: "What's your sport?"
		});
		
	var ddTopic = [
			{ text: "Preparation", value: 1 },
			{ text: "Performance", value: 2 },
			{ text: "Recovery", value: 3 },
			{ text: "Preparation, Perfomance and Recovery", value: 4 }
		];
		
		$('#ddTopic').ddslick({
			data: ddTopic,
			selectText: "What would you like to know about?"
		});
		
	/******************************************************************************************
	*
	* for the gender and optin checkboxes toggling
	*
	*******************************************************************************************/		

	jQuery('.check-box').click(function(){jQuery('.dot').toggle()});
	jQuery('#optin').click(function(){jQuery('.opt').toggle()});
	
	/******************************************************************************************
	*
	* function to set the height of the video player
	*
	*******************************************************************************************/
	$(window).resize(function() {
	  $('#video-main').height(jQuery('#video-main').width()/1.797323135755258);
	  setHeaderHeight();
	});
	$('#video-main').height(jQuery('#video-main').width()/1.797323135755258);
	setHeaderHeight();
	//also set the header height to compensate...
	function setHeaderHeight(){
		if(jQuery('#video-main').width() < 900)
	  	{
		  	jQuery('#header').height( $('#video-main').height() +20 );
	  	}
	  	else
	  	{
		    jQuery('#header').height(546);
	  	}
	} 
	
	/******************************************************************************************
	*
	* Twitter and facebook share buttons
	*
	*******************************************************************************************/
	jQuery('.twitter-share, .facebook-share').click(function(){
		if(this.className == 'twitter-share' && jQuery(this).attr('id') == 'tw-top')
		{
			//share on twitter (top link)
			window.open('https://twitter.com/intent/tweet?text=Got a question about nutrition? Go to http://ASKHOY.com and Sir Chris will talk through the right nutrition for you. ' ,'_blank');
		}
		else if(this.className == 'twitter-share' && jQuery(this).attr('id') == 'tw-footer')
		{
			//share on twitter (bottom link)
			window.open('https://twitter.com/intent/tweet?text=Sir Chris Hoy just talked me through the right nutrition for '+ sport +'! Go to http://ASKHOY.com and he’ll do the same for you.  ' ,'_blank');
		}
		
		else if(this.className == 'facebook-share' && jQuery(this).attr('id') == 'fb-top')
		{
			//share on facebook (top link)
			window.open('http://www.facebook.com/sharer/sharer.php?s=100&p[url]=http://askhoy.com/&p[images][0]=http://54.217.223.91/apple-touch-icon-144x144-precomposed.png&p[title]=Got a question about nutrition%3F&p[summary]=Go to ASKHOY.com and Sir Chris will talk through the right nutrition for you.' ,'_blank', 'width=626,height=436');
		}
		else if(this.className == 'facebook-share' && jQuery(this).attr('id') == 'fb-footer')
		{
			//share on facebook (bottom link)
			window.open('http://www.facebook.com/sharer/sharer.php?s=100&p[url]=http://askhoy.com/&p[images][0]=http://54.217.223.91/apple-touch-icon-144x144-precomposed.png&p[title]=Sir Chris Hoy just talked me through the right nutrition for '+ sport +'!&p[summary]=Go to http://ASKHOY.com and he’ll do the same for you.' ,'_blank', 'width=626,height=436');
		}
	});
	
	

	/******************************************************************************************
	*
	* for the add and remove textfield text...
	*
	*******************************************************************************************/

	
  	jQuery('#name-txt').click(function(){
	  //if user clicks when the message is up
	  if(jQuery(this).val() == 'What\'s your name?')
	  {
		  //clear box
		 jQuery(this).val('');
	  }
	  //if user clicks in other box before entering data, add message back
	  if(jQuery('#email-txt').val() == '')
	  {
		  jQuery('#email-txt').val('What\'s your email address?');
	  }
  });
  //repeat for other box
  jQuery('#email-txt').click(function(){
	  //if user clicks when the message is up
	  if(jQuery(this).val() == 'What\'s your email address?')
	  {
		  //clear box
		 jQuery(this).val('');
	  }

	  if(jQuery('#name-txt').val() == '')
	  {
		  jQuery('#name-txt').val('What\'s your name?');
	  }
  });	
});

/******************************************************************************************
*
* function to collect the results of the 'form' and write to database via php script
*
*******************************************************************************************/

var user_id = 0;
var name;
var email;
var gender;
var sport;
var hours;
var duration;
var topic;
var optin;
var products_list = '';
//save the user record
function get_results(){
	/* save the record */
	
	//get the user values
	name = jQuery('#name-txt').val();
	email = jQuery('#email-txt').val();
	
	//get the gender according to visiblity of elements
	gender;
	if(jQuery('#female').is(':visible'))
	{
		gender = 'female';
	}
	else
	{
		gender = 'male';
	}
	
	//get the user's sport selection
	sport = jQuery('#user_sport').find('.dd-selected-text').text();
	if(sport.length < 1)
	{
		//if user not selected
		jQuery('#user_sport').find('.dd-selected').css({'color':'#900'});
		return false;
	}

	//get the user's duration selection
	hours  = jQuery('#user_duration').find('.dd-selected-text').text();
	if(hours.length < 1)
	{
		//if user not selected
		jQuery('#user_duration').find('.dd-selected').css({'color':'#900'});
		return false;
	}
	
	//get the user's topic selection
	topic = jQuery('#user_topic').find('.dd-selected-text').text();
	if(topic.length < 1)
	{
		//if user not selected
		jQuery('#user_topic').find('.dd-selected').css({'color':'#900'});
		return false;
	}
	
	//get the user's opt in selection
	optin = 'YES';
	if(jQuery('#opt-dot').is(':visible'))
	{
		optin = 'yes';
	}
	else
	{
		optin = 'no';
	}
	
	if (check_email(email))
	{
		//post the values to the server for writing to db
		$.post("save_user.php", { NAME: name, EMAIL: email, GENDER: gender, SPORT:sport, HOURS:hours, TOPIC: topic, OPTIN: optin})
		.done(function(data) {
			 var php_data =  data.split('|');
			 jQuery('.message').text(php_data[0]);
			 
			 //simplify hours results to long or short duration
			 duration = 'Long';
			 if(hours == '2-3 hours' || hours == '3-4 hours' || hours == '4-5 hours')
			 { 
			 	duration = 'Short';
			 }
			 tailor_results();
			 //need to get the id of the user once written, return in from server and write to hidden field or cookie
			 user_id = php_data[1];
		});
	}
	else
	{
		alert('Email address given is not valid. Please re-enter.');
	}
}

/******************************************************************************************
*
* function to determine what is shown to user based upon his or her selection.
*
* this function also is used to take the user through again from the breadcrumb
*
*******************************************************************************************/
	
function tailor_results(){
	
	jQuery('#form').hide();
	jQuery('#carousel').show();
	
	jQuery('#preparation-thumb, #performance-thumb, #recovery-thumb').show();
	
	//set the correct background header image
	if(topic == 'Preparation')
	{
		jQuery('#header').css({'background-image':'url(../img/page/preparation-hdr.jpg)'});
		jQuery('#preparation-thumb').hide();
	}
	else if(topic == 'Performance')
	{
		jQuery('#header').css({'background-image':'url(../img/page/performance-hdr.jpg)'});
		jQuery('#performance-thumb').hide();
	}
	else if(topic == 'Recovery')
	{
		jQuery('#header').css({'background-image':'url(../img/page/recovery-hdr.jpg)'});
		jQuery('#recovery-thumb').hide();
	}
	else
	{
		jQuery('#header').css({'background-image':'url(../img/page/all-three-hdr.jpg)'});
		jQuery('#preparation-thumb, #performance-thumb, #recovery-thumb').hide();
	}
	
	//set the submessage text
	jQuery('#sub-message').html('<strong>You selected: </strong>' + sport + ', ' + hours + ' pw, ' + topic )
	
	/**
	* get the appropriate products
	**/
	
	if(topic == 'Preparation')
	{
		if(duration == 'Short')
		{
			products_list = '1,2,4';
			
		}
		else if (duration =='Long')
		{
			products_list = '1,2,4,5,6';
		}
	}
	
	else if(topic == 'Performance')
	{
		products_list = '7,8,3,9';
	}
	
	else if(topic == 'Recovery')
	{
		if(duration == 'Short')
		{
			products_list = '10,12';
			
		}
		else if (duration =='Long')
		{
			products_list = '11,13,14,15';
		}
	} 
	
	//all three
	else 
	{
		if(duration == 'Short')
		{
			products_list = '1,2,4,7,8,3,9,10,12';
			
		}
		else if (duration =='Long')
		{
			products_list = '1,2,4,5,6,7,8,3,9,11,13,14,15';
		}
	}
	showProducts();

		
	/**
	* get the appropriate video
	**/
	if(sport == 'Cycling')
	{
		//do the Cycling stuff
		if(duration == 'Short')
		{
			//do Short duration stuff
			if(topic == 'Preparation')
			{
				//Preparation
				modVP.loadVideoByReferenceID(1);
				
			}
			else if(topic == 'Performance')
			{
				//Performance
				modVP.loadVideoByReferenceID(2);
			}
			else if(topic == 'Recovery')
			{
				//Recovery
				modVP.loadVideoByReferenceID(3);
			}
			else if(topic == 'Preparation, Perfomance and Recovery')
			{
				//all three
				modVP.loadVideoByReferenceID(4);
			}
		}
		else if(duration == 'Long')
		{
			//do Long duration stuff
			if(topic == 'Preparation')
			{
				//Preparation
				modVP.loadVideoByReferenceID(5);
			}
			else if(topic == 'Performance')
			{
				//Performance
				modVP.loadVideoByReferenceID(2);
			}
			else if(topic == 'Recovery')
			{
				//Recovery
				modVP.loadVideoByReferenceID(6);
			}
			else if(topic == 'Preparation, Perfomance and Recovery')
			{
				//all three
				modVP.loadVideoByReferenceID(7);
			}
		}
		
	}
	else if(sport == 'Running')
	{
		//do the running stuff
		if(duration == 'Short')
		{
			//do Short duration stuff
			if(topic == 'Preparation')
			{
				//Preparation
				modVP.loadVideoByReferenceID(8);
			}
			else if(topic == 'Performance')
			{
				//Performance
				modVP.loadVideoByReferenceID(9);
			}
			else if(topic == 'Recovery')
			{
				//Recovery
				modVP.loadVideoByReferenceID(10);
			}
			else if(topic == 'Preparation, Perfomance and Recovery')
			{
				//all three
				modVP.loadVideoByReferenceID(11);
			}
		}
		else if(duration == 'Long')
		{
			//do Long duration stuff
			if(topic == 'Preparation')
			{
				//Preparation
				modVP.loadVideoByReferenceID(12);
			}
			else if(topic == 'Performance')
			{
				//Performance
				modVP.loadVideoByReferenceID(9);
			}
			else if(topic == 'Recovery')
			{
				//Recovery
				modVP.loadVideoByReferenceID(13);
			}
			else if(topic == 'Preparation, Perfomance and Recovery')
			{
				//all three
				modVP.loadVideoByReferenceID(14);
			}
		}
	}
	else if(sport == 'Triathlon')
	{
		//do the tri stuff
		if(duration == 'Short')
		{
			//do Short duration stuff
			if(topic == 'Preparation')
			{
				//Preparation
				modVP.loadVideoByReferenceID(15);
			}
			else if(topic == 'Performance')
			{
				//Performance
				modVP.loadVideoByReferenceID(16);
			}
			else if(topic == 'Recovery')
			{
				//Recovery
				modVP.loadVideoByReferenceID(17);
			}
			else if(topic == 'Preparation, Perfomance and Recovery')
			{
				//all three
				modVP.loadVideoByReferenceID(18);
			}
		}
		else if(duration == 'Long')
		{
			//do Long duration stuff
			if(topic == 'Preparation')
			{
				//Preparation
				modVP.loadVideoByReferenceID(19);
			}
			else if(topic == 'Performance')
			{
				//Performance
				modVP.loadVideoByReferenceID(16);
			}
			else if(topic == 'Recovery')
			{
				//Recovery
				modVP.loadVideoByReferenceID(20);
			}
			else if(topic == 'Preparation, Perfomance and Recovery')
			{
				//all three
				modVP.loadVideoByReferenceID(21);
			}
		}
	}
}

/******************************************************************************************
*
* function to check for mistakes in email address
*
*******************************************************************************************/

function check_email(address){
	var isValid = true;
	var mailFilter = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	if(!(mailFilter.test(address)))
	{
		jQuery('.errorEmail').text('*Invalid email address');
		jQuery('.errorEmailConfirm').text('*Invalid email address'), isValid = false;
	}
	if(!isValid)
	{
		return false;
	}
	else
	{
		return true;
	}
}

/******************************************************************************************
*
* get the associated products for the user's selection
*
*******************************************************************************************/

var overlay_html  = new Array('never used','','','','','','','','','','','','','','',''); //extra element to keep references straight forward! (array start at zero)

function showProducts(){
	var carousel_html = '<div>';

	
	jQuery.post("get_products.php", { PRODUCTS_LIST: products_list, SIZE: 'LARGE'})
	.done(function(data) {
		//split into products
		 var all_data = data.split('^');
		 for(i = 0; i< all_data.length -1; i++)// all_data.length *'-1'* because of the last ^ at the end of the record creates an empty record
		 {
			 //split into product fields
			 var php_data =  all_data[i].split('|');
			 
			 //lose the flavour if attached
			 var title = php_data[1].split('[');
			 
			 // convert the li tags back to html
			 var li = php_data[4].replace(/\[/g,"<");
			 li = li.replace(/\]/g,">");
			 
			 // convert the p tags back to html
			 var p = php_data[3].replace(/\[/g,"<");
			 p = p.replace(/\]/g,">");
			 
			 carousel_html += '<div class="sis-product-container" id="'+ php_data[0] +'"><div class="carousel-image"><img src="img/products/'+php_data[6]+'" title="'+ title[0] +'" alt="'+ title[0] +'"/></div><div class="rh-col"><div class="carousel-title">'+ title[0] +'</div><div class="carousel-bullets"><ul>'+ li +'</ul></div><div class="carousel-more"><a href="javascript:moreInfo(\''+ php_data[0] +'\')" target="_blank" ><img src="img/page/more-info.png" alt="More information" title="MORE INFO" height="17" width="103" /></a></div></div></div>';
			 
			 overlay_html[php_data[0]] = '<div class="sis-product-overlay" id="overlay-'+ php_data[0] +'"><div class="overlay-image"><img src="img/products/'+php_data[6]+'" title="'+ title[0] +'" alt="'+ title[0] +'"/></div><div class="product-full-copy"><div class="overlay-title">'+ title[0] +'</div><div class="overlay-subtitle">'+ php_data[2] +'</div><div class="product-details">Product Details</div><div class="product-description">'+p+'</div><div class="overlay-bullets"><ul>'+ li +'</ul></div><div class="overlay-more"><a href="javascript:goToSiS(\'' + user_id + '\',\''+ php_data[1] + '\',\''+ php_data[5] +'\')" target="_blank" ><img src="img/page/see-range.gif" alt="See full range" title="SEE FULL RANGE" height="32" width="196" /></a></div></div></div><div class="close-overlay" style="width:100px; height:60px; cursor:pointer; position:absolute; top:0px; right:0px"></div>';
		 }
		 jQuery('#c-content').html(carousel_html).width((all_data.length-1)*290);
		 doCarousel(all_data.length-1);
	});
	
}

/******************************************************************************************
*
* Function to create carousel 
*
*******************************************************************************************/

function doCarousel(noOfProducts){
	var left = 0;
	//just show the single version if there are only two products
	if(noOfProducts == 2)
	{
		jQuery('#slider').width('290');
		jQuery('#carousel').css({'background':'none'});
	}
	
	var swidth = jQuery('#slider').width();
	
	//show the more button if there are more products to show
	if((noOfProducts > 3 && swidth == 870) || swidth == 290)
	{
		jQuery('#next_btn').show();
	}

	 
	//nav next
	jQuery('#next_btn').click(function(){
		var productsDisplayed = jQuery('#slider').width()/290;
		jQuery('#carousel').css({'background':'none'});
		jQuery('#c-content').animate({left: '-=290'}, 500, function(){
			jQuery('#c-content').clearQueue();
			var left = 0 - ( parseInt(jQuery('#c-content').css('left')));
			jQuery('#prev_btn').show();	
			if(productsDisplayed > 1)
			{
				jQuery('#carousel').css({'background':'url(../img/page/grad-sep-bg.png) no-repeat'});
			}
			if(left > (noOfProducts - productsDisplayed - 1)*290)
			{
				jQuery('#next_btn').hide();
			}
		});
	});
	
	//nav prev
	jQuery('#prev_btn').click(function(){
		var productsDisplayed = jQuery('#slider').width()/290;
		jQuery('#carousel').css({'background':'none'});
		jQuery('#c-content').animate({left: '+=290'}, 500, function(){
			jQuery('#c-content').clearQueue();
			var left = 0 - ( parseInt(jQuery('#c-content').css('left')));
			jQuery('#next_btn').show();
			if(productsDisplayed > 1)
			{
				jQuery('#carousel').css({'background':'url(../img/page/grad-sep-bg.png) no-repeat'});
			}
			
			if(left == 0)
			{
				jQuery('#prev_btn').hide();
			}
		});
		
	});
	
}

/******************************************************************************************
*
* get the associated overlay for the user's selected product
*
*******************************************************************************************/
function moreInfo(id){
	//pop up the light box
	jQuery('#overlay-main').html(overlay_html[id]);
	jQuery('.black_overlay, #overlay-main').fadeIn("slow");
	
	jQuery('.black_overlay, .close-overlay').click(function(){lessInfo()});
}
function lessInfo(){
	jQuery('.black_overlay, #overlay-main').fadeOut("slow", function(){jQuery('#overlay-main').html('');});
}

/******************************************************************************************
*
* store user cta and go to link
*
*******************************************************************************************/
function goToSiS(uid,pid,hlink){
	$.post("save_user_choice.php", { USER_ID: uid, PRODUCT_ID: pid})
		.done(function(data) {
			 //window.location.assign(hlink);
			 window.open(hlink,'_blank');
		});
}

/******************************************************************************************
*
* takes the user back through for a different topic selection
*
*******************************************************************************************/
function getOtherTopic(newtopic)
{
	topic = newtopic;
	tailor_results();
}
/******************************************************************************************
*
* code for videoplayer
*
*******************************************************************************************/

var player;  
var modVP; 
/*var nextVideo = 0; 
var videos = new Array(1754276221001,1756137891001,1754276206001,1754276205001,1754234236001);*/    
function myTemplateLoaded(experienceID) {  
	player = brightcove.api.getExperience(experienceID);   
	modVP = player.getModule(brightcove.api.modules.APIModules.VIDEO_PLAYER); 
}   
/* remove this stub */
/*jQuery('#trim').click(function(){
	products_list = '1,2,3';
	showProducts();
	modVP.loadVideoByReferenceID(2);*/
	/*modVP.addEventListener(brightcove.api.events.MediaEvent.BEGIN, onMediaBegin);   
	modVP.addEventListener(brightcove.api.events.MediaEvent.COMPLETE, onMediaComplete);*/
/*});*/
/*function onMediaBegin(evt) {    
	 alert('video beginning');  
}
function onMediaComplete(evt) {    
	 alert('video complete');  
}*/

