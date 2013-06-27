/******************************************************************************************
*
* to perfom when page loads...
*
*******************************************************************************************/
var noOfProducts;//now global so that it can be used by resize function
var page = 1;
var count = 0;

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
		
	var ddFilter = [
			{ text: "Preparation Products", value: 1 },
			{ text: "Performance Products", value: 2 },
			{ text: "Recovery Products", value: 3 },
			{ text: "All Related Products", value: 4 }
		];
		
		$('#ddFilter').ddslick({
			data: ddFilter,
			selectText: "All Related Products"
		});
		
		//fix z-index issue with custom drop-downs in ie7
		if (navigator.appVersion.indexOf("MSIE 7.") != -1){
		   var zIndexNumber = 1000;
		   // Put your target element(s) in the selector below!
		   $('.my-text-field').each(function() {
			   $(this).css({'zIndex': zIndexNumber,'position':'relative'});
			   zIndexNumber -= 10;
		   });
		}


		//bind behaviour to the filter button
		$('#filter-dd').find('.dd-option').click(function(){
			var filterChoice = jQuery(this).find('input').val();
			
			switch (filterChoice){
				case '1':
					getOtherTopic('Preparation');
					break;
				case '2':
					getOtherTopic('Performance');
					break;
				case '3':
					getOtherTopic('Recovery');
					break;
				case '4':
					getOtherTopic('Preparation, Perfomance and Recovery');

			}
		});
		
		//rollover image swaps
		var buttonName = '';
		jQuery('.swap').hover(function(){
			buttonName = jQuery(this).attr('src');
			
			newName =  buttonName.replace('.jpg','-over.jpg');
			
			jQuery(this).attr('src', newName);
			
			},function(){
				jQuery(this).attr('src', buttonName);
		});
		//nav button rollover fades
		{
			jQuery('.nav_btn').hover(function(){jQuery(this).clearQueue().animate({opacity: 0.2}, 200)}, function(){jQuery(this).animate({opacity: 1}, 200)});
		}
	/******************************************************************************************
	*
	* for the gender and optin checkboxes toggling
	*
	*******************************************************************************************/		

	jQuery('.check-box').click(function(){jQuery('.dot').toggle()});
	jQuery('#optin').click(function(){jQuery('.opt').toggle()});
	
	/******************************************************************************************
	*
	* function to set the height of the video player, and reset the carousel
	* also other general non css responsiveness
	*
	*******************************************************************************************/
	$(window).resize(function() {
		$('#video-main').height(jQuery('#video-main').width()/1.797323135755258);
		setHeaderHeight();
		doCarousel(noOfProducts);
		
		if(jQuery(document).width() < 610)
		{
			jQuery('#fb-footer').attr('coords','125,15,149,42');
			jQuery('#tw-footer').attr('coords','97,15,122,41');
		}
		else
		{
			jQuery('#fb-footer').attr('coords','102,19,126,42');
			jQuery('#tw-footer').attr('coords','77,19,99,42');
		}
		
		if(jQuery('#slider').width() == 290 && page == 2)
		{
			jQuery('.signature').hide();
			jQuery('#carousel').css({'background':'none'});
		}
		else
		{
			jQuery('.signature, .dsh').show();
		}
		
		
		
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
	
	if(jQuery(document).width() < 610)
	{
		jQuery('#fb-footer').attr('coords','125,15,149,42');
		jQuery('#tw-footer').attr('coords','97,15,122,41');
	}
	else
	{
		jQuery('#fb-footer').attr('coords','102,19,126,42');
		jQuery('#tw-footer').attr('coords','77,19,99,42');
	}
	
	
	
	jQuery('.twitter-share, .facebook-share').click(function(){
		if(this.className == 'twitter-share' && jQuery(this).attr('id') == 'tw-top')
		{
			//share on twitter (top link)
			window.open('https://twitter.com/intent/tweet?text=Got a question about nutrition? Go to http://ASKHOY.com and Sir Chris will talk through the right nutrition for you. ' ,'_blank');
		}
		else if(this.className == 'twitter-share' && jQuery(this).attr('id') == 'tw-footer')
		{
			//share on twitter (bottom link)
			window.open('https://twitter.com/intent/tweet?text=Sir Chris Hoy just talked me through the right nutrition for '+ sport +'! Go to http://ASKHOY.com and he\'ll do the same for you.  ' ,'_blank');
		}
		
		else if(this.className == 'facebook-share' && jQuery(this).attr('id') == 'fb-top')
		{
			//share on facebook (top link)
			window.open('http://www.facebook.com/sharer/sharer.php?s=100&p[url]=http://askhoy.com/&p[images][0]=http://askhoy.com/apple-touch-icon-144x144-precomposed.jpg&p[title]=Got a question about nutrition%3F&p[summary]=Go to ASKHOY.com and Sir Chris will talk through the right nutrition for you.' ,'_blank', 'width=626,height=436');
		}
		else if(this.className == 'facebook-share' && jQuery(this).attr('id') == 'fb-footer')
		{
			//share on facebook (bottom link)
			window.open('http://www.facebook.com/sharer/sharer.php?s=100&p[url]=http://askhoy.com/&p[images][0]=http://askhoy.com/apple-touch-icon-144x144-precomposed.jpg&p[title]=Sir Chris Hoy just talked me through the right nutrition for '+ sport +'!&p[summary]=Go to http://ASKHOY.com and he\'ll do the same for you.' ,'_blank', 'width=626,height=436');
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
var originalTopic;
var optin;
var products_list = '';
//save the user record
function get_results(){
	/* save the record */
	
	//get the user values
	name = String(jQuery('#name-txt').val());
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
	originalTopic = topic;
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
	
 

    if(name == 'What\'s your name?')
	{
		alert('Please fill in your name');
        return false;
    }
	else
	{
		name = name.replace(/[^a-zA-Z 0-9-]/g, '');
		console.log(name);
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
			 //let's see the video
			 $("html, body").animate({ scrollTop: 0 }, "slow");
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
	page = 2;
	jQuery('#form').hide();
	jQuery('#carousel, dsh').show();
	
	if(jQuery('#slider').width() == 290 && page == 2)
	{
		jQuery('.signature').hide();
	}
	else
	{
		jQuery('.signature, .dsh').show();
		jQuery('.signature').css('margin-top','-70px');
	}
	
	
	
	
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
	}
	if (originalTopic == 'Preparation, Perfomance and Recovery')
	{
		jQuery('#preparation-thumb, #performance-thumb, #recovery-thumb').hide();
		jQuery('#filter-dd').show();
		jQuery('.sub-footer-text').text('Invite your friends to Ask Hoy');
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
			products_list = '1,2,4,9';
			
		}
		else if (duration =='Long')
		{
			products_list = '1,2,4,5,6,9';
		}
	}
	
	else if(topic == 'Performance')
	{
		products_list = '7,4,8,3,9';
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
	
	if(count == 0)//only play the video once
	{
		count++;
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
		isValid = false;
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
var mobile_html  = new Array('never used','','','','','','','','','','','','','','',''); //extra element to keep references straight forward! (array start at zero)

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
			 
			 carousel_html += '<div class="sis-product-container" id="'+ php_data[0] +'"><div class="carousel-image"><img src="img/products/'+php_data[6]+'" title="'+ title[0] +'" alt="'+ title[0] +'"/></div><div class="rh-col"><div class="carousel-title">'+ title[0] +'</div><div class="carousel-bullets"><ul>'+ li +'</ul></div><div class="carousel-more button" onclick="moreInfo(\''+ php_data[0] +'\')" target="_blank" ><img src="img/page/more-info.png" alt="More information" title="MORE INFO" /></div></div></div>';
			 
			 overlay_html[php_data[0]] = '<div class="sis-product-overlay" id="overlay-'+ php_data[0] +'"><div class="overlay-image"><img src="img/products/'+php_data[6]+'" title="'+ title[0] +'" alt="'+ title[0] +'"/></div><div class="product-full-copy"><div class="overlay-title">'+ title[0] +'</div><div class="overlay-subtitle">'+ php_data[2] +'</div><div class="product-details">Product Details</div><div class="product-description">'+p+'</div><div class="overlay-bullets"><ul>'+ li +'</ul></div><div style="cursor:pointer" class="overlay-more" onclick="goToSiS(\'' + user_id + '\',\''+ php_data[1] + '\',\''+ php_data[5] +'\')" target="_blank" ><img src="img/page/see-range.gif" alt="See full range" title="SEE FULL RANGE" height="32" width="196" /></div></div></div><div class="close-overlay" style="width:100px; height:60px; cursor:pointer; position:absolute; top:0px; right:0px"></div>';
			 
			 mobile_html[php_data[0]] = '<div class="sis-product-overlay-mobile" id="mobile-overlay-'+ php_data[0] +'"><div class="close-overlay"><img src="img/page/close.gif" alt="close" title="Close" height="47" width="91" /></div><div class="mobile-overlay-image"><img src="img/products/'+php_data[6]+'" title="'+ title[0] +'" alt="'+ title[0] +'"/></div><div><div class="overlay-title">'+ title[0] +'</div><div class="overlay-subtitle">'+ php_data[2] +'</div><div class="product-details">Product Details</div><div class="product-description">'+p+'</div><div class="overlay-bullets"><ul>'+ li +'</ul></div><div style="cursor:pointer" class="overlay-more" onclick="goToSiS(\'' + user_id + '\',\''+ php_data[1] + '\',\''+ php_data[5] +'\')" target="_blank" ><img src="img/page/see-range.gif" alt="See full range" title="SEE FULL RANGE" height="32" width="196" /></div><div class="close-overlay"><img src="img/page/close.gif" alt="close" title="Close" height="47" width="91" /></div></div></div>';
			 
		 }
		 jQuery('#c-content').html(carousel_html).width((all_data.length-1)*290);
		 noOfProducts = all_data.length-1;
		 doCarousel();
	});
	
}

/******************************************************************************************
*
* Function to create carousel 
*
*******************************************************************************************/
function doCarousel(){
	var left = 0;
	//restart the carousel
	jQuery('#c-content').css({'left':'0'});
	//just show the single version if there are only two products
	/*if(noOfProducts == 2)
	{
		jQuery('#slider').width('290');
		jQuery('#carousel').css({'background':'none'});
	}
	else if(jQuery('#carousel').css('background') != 'none'){
		jQuery('#slider').width('870');
		jQuery('#carousel').css({'background':'url(../img/page/grad-sep-bg.png) no-repeat'});
	}*/
	if(noOfProducts == 2 && jQuery('#slider').width() == 870)
	{
		jQuery('#c-content').css({'margin':'0 auto'});
		jQuery('#carousel').css({'background':'none'});
	}
	else if(jQuery('#slider').width() == 870)
	{
		jQuery('#carousel').css({'background':'url(../img/page/grad-sep-bg.png) no-repeat'});
	}
	else
	{
		jQuery('#c-content').css({'margin':'auto'});
	}

	
	var swidth = jQuery('#slider').width();
	console.log(swidth);
	
	//show the more button if there are more products to show
	if((noOfProducts > 3 && swidth == 870) || ( noOfProducts > 1 && swidth == 290))
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
			if((jQuery('#c-content').width()) == (left + (productsDisplayed*290)))
			//if(left > (noOfProducts - productsDisplayed-1)*290)
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
	if(jQuery(document).width() > 750 && jQuery(window).height() > 515)
	{
		jQuery('#overlay-main').html(overlay_html[id]);
		jQuery('.black_overlay, #overlay-main').fadeIn("slow");
		jQuery('.black_overlay, .close-overlay').click(function(){lessInfo()});
	}
	else
	{
		jQuery('#overlay-mobile').html(mobile_html[id]);
		jQuery('.white_overlay, #overlay-mobile').fadeIn("slow");
		window.scrollTo(0,0);
		jQuery('.close-overlay').click(function(){lessInfo()});
	}
}
function lessInfo(){
	jQuery('.black_overlay, .white_overlay, #overlay-mobile, #overlay-main').fadeOut("slow", function(){jQuery('#overlay-main').html('');});
}

/******************************************************************************************
*
* store user cta and go to link
*
*******************************************************************************************/
function goToSiS(uid,pid,hlink){
	window.open(hlink,'_blank');
	$.post("save_user_choice.php", { USER_ID: uid, PRODUCT_ID: pid})
}

/******************************************************************************************
*
* takes the user back through for a different topic selection
*
*******************************************************************************************/
function getOtherTopic(newtopic)
{
	topic = newtopic;
	//redo the output
	tailor_results();
	jQuery('#next_btn, #prev_btn').hide();
}
/******************************************************************************************
*
* code for videoplayer
*
*******************************************************************************************/

var player;  
var modVP;
 
function myTemplateLoaded(experienceID) {  
	player = brightcove.api.getExperience(experienceID);   
	modVP = player.getModule(brightcove.api.modules.APIModules.VIDEO_PLAYER); 
}  

