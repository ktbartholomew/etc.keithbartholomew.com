<?php
	include('multi_choice.php');
	$data = explode(',',$_GET['data']);
	echo get_result(get_coords($data));
?>