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
			{ text: "Running", value: 3 },
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

//save the user record
function get_results(){
	/* save the record */
	
	//get the user values
	var name = jQuery('#name-txt').val();
	var email = jQuery('#email-txt').val();
	
	//get the gender according to visiblity of elements
	var gender;
	if(jQuery('#female').is(':visible'))
	{
		gender = 'female';
	}
	else
	{
		gender = 'male';
	}
	
	//get the user's sport selection
	var sport = jQuery('#user_sport').find('.dd-selected-text').text();
	if(sport.length < 1)
	{
		//if user not selected
		jQuery('#user_sport').find('.dd-selected').css({'color':'#900'});
		return false;
	}

	//get the user's duration selection
	var hours  = jQuery('#user_duration').find('.dd-selected-text').text();
	if(hours.length < 1)
	{
		//if user not selected
		jQuery('#user_duration').find('.dd-selected').css({'color':'#900'});
		return false;
	}
	
	//get the user's topic selection
	var topic = jQuery('#user_topic').find('.dd-selected-text').text();
	if(topic.length < 1)
	{
		//if user not selected
		jQuery('#user_topic').find('.dd-selected').css({'color':'#900'});
		return false;
	}
	
	//get the user's opt in selection
	var optin = 'YES';
	if(jQuery('#opt-dot').is(':visible'))
	{
		optin = 'yes';
	}
	else
	{
		gender = 'no';
	}
	
	if (check_email(email))
	{
		//post the values to the server for writing to db
		$.post("save_user.php", { NAME: name, EMAIL: email, GENDER: gender, SPORT:sport, HOURS:hours, TOPIC: topic, OPTIN: optin})
		.done(function(data) {
			 jQuery('.message').text(data);
			 tailor_results(sport, duration, topic);
			 //need to get the id of the user once written, return in from server and write to hidden field or cookie
		});
	}
	else
	{
		alert('Email address given is not valid. Please re-enter.');
	}
}

/******************************************************************************************
*
* function to determine what is shown to user based upon his or her selection
*
*******************************************************************************************/
	
function tailor_results(sport, duration, topic){
	if(sport == 'cycling')
	{
		//do the cycling stuff
		if(duration == 'short')
		{
			//do short duration stuff
			if(topic == 'preparation')
			{
				//preparation
				showVideo(1);
			}
			else if(topic == 'performance')
			{
				//performance
				showVideo(2);
			}
			else if(topic == 'recovery')
			{
				//recovery
				showVideo(3);
			}
			else if(topic == 'all-three')
			{
				//all three
				showVideo(4);
			}
		}
		else if(duration == 'long')
		{
			//do long duration stuff
			if(topic == 'preparation')
			{
				//preparation
				showVideo(5);
			}
			else if(topic == 'performance')
			{
				//performance
				showVideo(2);
			}
			else if(topic == 'recovery')
			{
				//recovery
				showVideo(6);
			}
			else if(topic == 'all-three')
			{
				//all three
				showVideo(7);
			}
		}
		
	}
	else if(sport == 'running')
	{
		//do the running stuff
		if(duration == 'short')
		{
			//do short duration stuff
			if(topic == 'preparation')
			{
				//preparation
				showVideo(8);
			}
			else if(topic == 'performance')
			{
				//performance
				showVideo(9);
			}
			else if(topic == 'recovery')
			{
				//recovery
				showVideo(10);
			}
			else if(topic == 'all-three')
			{
				//all three
				showVideo(11);
			}
		}
		else if(duration == 'long')
		{
			//do long duration stuff
			if(topic == 'preparation')
			{
				//preparation
				showVideo(12);
			}
			else if(topic == 'performance')
			{
				//performance
				showVideo(9);
			}
			else if(topic == 'recovery')
			{
				//recovery
				showVideo(13);
			}
			else if(topic == 'all-three')
			{
				//all three
				showVideo(14);
			}
		}
	}
	else if(sport == 'triathalon')
	{
		//do the tri stuff
		if(duration == 'short')
		{
			//do short duration stuff
			if(topic == 'preparation')
			{
				//preparation
				showVideo(15);
			}
			else if(topic == 'performance')
			{
				//performance
				showVideo(16);
			}
			else if(topic == 'recovery')
			{
				//recovery
				showVideo(17);
			}
			else if(topic == 'all-three')
			{
				//all three
				showVideo(18);
			}
		}
		else if(duration == 'long')
		{
			//do long duration stuff
			if(topic == 'preparation')
			{
				//preparation
				showVideo(19);
			}
			else if(topic == 'performance')
			{
				//performance
				showVideo(16);
			}
			else if(topic == 'recovery')
			{
				//recovery
				showVideo(20);
			}
			else if(topic == 'all-three')
			{
				//all three
				showVideo(21);
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
