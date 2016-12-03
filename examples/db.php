<?php
if($_SERVER['REQUEST_METHOD'] == 'POST') {

	$data = json_decode(file_get_contents("php://input"));
	//print_r($data);

	// Mysql DB credentials
	$host = "localhost";
	$user = "root";
	$password = "";
	$database = "test";

	$con = mysqli_connect($host, $user, $password, $database);
	// Check connection
	if (mysqli_connect_errno())
	{
		echo "Failed to connect to MySQL: " . mysqli_connect_error();
	}

	// Perform queries
	$qry = "INSERT INTO tos (tos_id, tos_session_key, url, title, entry_time, exit_time, timeonpage, timeonpage_tracked_by, timeonsite, trackingtype, realtime_tracking, transferred_with) VALUES (".$data->TOSId.", '".$data->TOSSessionKey."', '".$data->URL."', '".$data->title."', '".$data->entryTime."', '".$data->exitTime."', ".$data->timeOnPage.", '".$data->timeOnPageTrackedBy."', ".$data->timeOnSite.", '".$data->trackingType."', ".$data->realTimeTracking.", '".$data->trasferredWith."')";
	//echo $qry;
	$res = mysqli_query($con, $qry);

	mysqli_close($con);
	if($res) {
		echo 'success';
	} else {
		echo json_encode($res);
	}
} else {
	echo 'No data received!';
}
