<?php
	include('multi_choice.php');
	header('Content-Type: image/jpeg');
	
	$data = explode(',',$_GET['data']);
	show_image(get_coords($data));
?>