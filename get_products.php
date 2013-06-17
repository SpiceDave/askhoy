<?php
	include '../config.php';
	
	
	/*$products_list = $_POST['PRODUCTS_LIST'];
	$size = $_POST['SIZE'];*/
	$products_list = '30,40,60';

	// Create connection
	$con = mysqli_connect("localhost", $db_user, $db_pass, $db_name);
	
	// Check connection
	if (mysqli_connect_errno($con))
	{
	  	echo "Failed to connect to database: " . mysqli_connect_error();
	}
	else
	{
		$query = "SELECT * FROM `tbl_product` WHERE `product_id` IN ('$products_list');";
		if ($result = mysqli_query($con, $query)) 
		{

			/* fetch associative array */
			while ($row = mysqli_fetch_assoc($result)) 
			{
					$product_id = $row["product_id"];
					$product_title = $row["product_title"];
					$product_subtitle = $row["product_subtitle"];
					$product_desc_html = $row["product_desc_html"];
					$product_bullet_html = $row["product_bullet_html"];
					$product_link = $row["product_link"];
					$product_image = $row["product_image"];
					$items = $product_id.'|'.$product_title.'|'.$product_subtitle.'|'.$product_desc_html.'|'.$product_bullet_html.'|'.$product_link.'|'.$product_image.'^';
					
					echo $items;
					
					
			}
	
			/* free result set */
			mysqli_free_result($result);
		}

	}
	$con->close();
?>
