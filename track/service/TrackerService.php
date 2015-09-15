<?php
$config = require_once('../env/config.php');

class TrackerService
{
	protected $config;

    public function __construct($config) {
        $this->config = $config;
    }

    public function trackEvent($data = null) {
        $method = 'POST';
    	$url = $this->config['env']['development'];
        $headers = array(
            'PETracker-APP-ID'=> 'PE-APP-1847',
            'PETracker-sdkVersion' => '2.0.0',
            'Content-Type'=> 'application/json',
            //'Origin'=> 'devapi.english.com'
        );
        $data = $this->config['data'];
        $data = array('data' => $data);
        $data = json_encode($data);
        //echo '<pre>';var_dump($data);die();
        $result = $this->invokeAPI($method, $headers, $url, $data);
        echo $result;
    }

    public function invokeAPI($method, $headers, $url, $data)
    {
        $curl = curl_init();

        switch ($method)
        {
            case "POST":
                curl_setopt($curl, CURLOPT_POST, 1);
                curl_setopt($curl, CURLOPT_POSTFIELDS, $data);
                curl_setopt($curl, CURLOPT_HTTPHEADER, array('Content-Type: application/json')); 
                break;
            case "PUT":
                curl_setopt($curl, CURLOPT_PUT, 1);
                break;
            default:
                if ($data)
                    $url = sprintf("%s?%s", $url, http_build_query($data));
        }

        // Optional Authentication:
        //curl_setopt($curl, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
        //curl_setopt($curl, CURLOPT_USERPWD, "username:password");

        if(count($headers) >= 1) {
            curl_setopt($curl, CURLOPT_HTTPHEADER, $headers);
        }
        

        curl_setopt($curl, CURLOPT_URL, $url);
        curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);

        $result = curl_exec($curl);

        curl_close($curl);

        return $result;
    }
}

$track = new TrackerService($config);
// echo '<pre>';
// var_dump($track);die();
$track->trackEvent();