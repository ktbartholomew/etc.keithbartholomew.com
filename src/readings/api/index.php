<?php 

require_once("lib/index.php");
header('Content-Type: application/json');

$reading = new ReadingsHttp();
echo $reading->getToday();

exit();