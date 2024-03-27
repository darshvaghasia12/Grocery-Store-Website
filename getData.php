<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

$jsonFile = file_get_contents('breakfast.json');
echo $jsonFile;

?>