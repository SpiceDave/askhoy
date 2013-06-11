<?php
	include '../config.php';
	
	
	$name = $_POST['NAME'];
	$email =$_POST['EMAIL'];
	$gender = $_POST['GENDER'];
	$sport = $_POST['SPORT'];
	$duration = $_POST['HOURS'];
	$topic = $_POST['TOPIC'];
	$optin = $_POST['OPTIN'];
	

	// Create connection
	$con = mysqli_connect("localhost", $db_user, $db_pass, $db_name);
	
	// Check connection
	if (mysqli_connect_errno($con))
	{
	  	echo "Failed to connect to database: " . mysqli_connect_error();
	}
	else
	{
		$sql = "INSERT INTO `tbl_user`(`user_name`, `user_email`, `user_gender`, `user_sport`, `user_length`, `user_topic`, `user_optin`) VALUES ('$name', '$email', '$gender', '$sport', '$duration', '$topic', '$optin')";
		if (!mysqli_query($con, $sql))
		{
		  die('Error: ' . mysqli_error($con));
		}
		echo "1 record added";
	}

	
?>
