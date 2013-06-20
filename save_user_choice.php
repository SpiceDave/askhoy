<?php
	include '../config.php';
	
	
	$user_id = $_POST['USER_ID'];
	$product_id = $_POST['PRODUCT_ID'];

	// Create connection
	$con = mysqli_connect("localhost", $db_user, $db_pass, $db_name);
	
	// Check connection
	if (mysqli_connect_errno($con))
	{
	  	echo "Failed to connect to database: " . mysqli_connect_error();
	}
	else
	{
		$sql = "UPDATE `tbl_user` SET `user_clickedthrough_product`='$product_id' WHERE `user_id` = '$user_id'";
		if (!mysqli_query($con, $sql))
		{
		  die('Error: ' . mysqli_error($con));
		}
	}

	
?>
