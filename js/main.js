//save the user record
function save_record(){
	//get the user values
	var name = 'testname';
	var email = 'testemail';
	var gender = 'testgender';
	var sport = 'testsport';
	var hours = 'testhours';
	var topic = 'testtopic';
	var optin = 'YES';
	
	
	$.post("save_user.php", { NAME: name, EMAIL: email, GENDER: gender, SPORT:sport, HOURS:hours, TOPIC: topic, OPTIN: optin})
	.done(function(data) {
	 	 jQuery('.message').text(data);
	});
}