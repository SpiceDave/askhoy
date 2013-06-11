//stuff to do when page loads
jQuery(document).ready(function(){
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


//save the user record
function get_results(){
	/* save the record */
	
	//get the user values
	var name = 'testname';
	var email = jQuery('#email-txt').val();
	var gender = 'testgender';
	var sport = 'testsport';
	var hours = 'testhours';
	var topic = 'testtopic';
	var optin = 'YES';
	
	if (check_email(email))
	{
		//post the values to the server for writing to db
		$.post("save_user.php", { NAME: name, EMAIL: email, GENDER: gender, SPORT:sport, HOURS:hours, TOPIC: topic, OPTIN: optin})
		.done(function(data) {
			 jQuery('.message').text(data);
			 tailor_results();
		});
	}
	else
	{
		alert('Email address given is not valid. Please re-enter.');
	}
	
	function tailor_results(){
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
}

//check for mistakes in email address
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