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
	$qry = "INSERT INTO activity (tos_id, tos_session_key, url, title, activity_duration, activity_duration_tracked_by, activity_start, activity_end, tracking_type, realtime_tracking, transferred_with) VALUES (".$data->TOSId.", '".$data->TOSSessionKey."', '".$data->URL."', '".$data->title."', ".$data->activityDuration.", '".$data->activityDurationTrackedBy."', '".$data->activityStart."', '".$data->activityEnd."', '".$data->trackingType."', ".$data->realTimeTracking.", '".$data->trasferredWith."')";
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
