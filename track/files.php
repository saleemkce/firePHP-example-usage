<?php
require_once('env/config.php');
// Method: POST, PUT, GET etc
// Data: array("param" => "value") ==> index.php?param=value

use env\config as config;

var_dump(config);die();

$url = 'http://devapi.english.com/data/collect';

$rawData = array(
	'data' => array(
		'appid' => 'PE-APP-1847',
		'appplatform' => 'web',
		'campaigncontent' => '',
		'campaignid' => '',
		'campaignmedium' => '',
		'campaignsource' => '',
		'campaignterm' => '',
		'cookiedomainname' => '',
		'cookieprefix' => '',
		'directorpluginstatus' => '',
		'documentencoding' => 'UTF-8',
		'documenthost' => 'devapi.english.com',
		'documentlocation' => 'http%3A%2F%2Fdevapi.english.com%2Fgseservices%2Faboutus',
		'documentpage' => '/gseservices/aboutus',
		'documentsize' => '1352x409',
		'documenttitle' => 'GSE%20Data%20%26%20Services',
		'environment' => '',
		'flashplayerversion' => '18.0 r0',
		'googlegearpluginstatus' => '',
		'interactiontype' => 'pageview',
		'internalsessionid' => '',
		'iscookieenabled' => true,
		'isjavaenabled' => true,
		'latitudelogitude' => '',
		'pdfpluginstatus' => '',
		'qtpluginstatus' => '',
		'realppluginstatus' => '',
		'screendepth' => '24-bits',
		'screenresolution' => '1366x768',
		'sdkversion' => '2.0.0',
		'timestamp' => '2015-07-06T11:18:15.961Z',
		'timezone' => '+05:30',
		'url' => 'http://devapi.english.com/gseservices/aboutus',
		'useragent' => 'Mozilla%2F5.0%20(Windows%20NT%206.1%3B%20WOW64)%20AppleWebKit%2F537.36%20(KHTML%2C%20like%20Gecko)%20Chrome%2F43.0.2357.124%20Safari%2F537.36',
		'usercountry' => '',
		'userfirstname' => '',
		'usergender' => '',
		'userid' => 'anonymous',
		'userip' => '',
		'userlanguage' => '',
		'userlastname' => '',
		'userorigin' => '',
		'userssoorigin' => '',
		'viewport' => '1364x409',
		'wmapluginstatus' => '')
	);
$data = json_encode($rawData);

// $headers = array(
//     // "POST ".$page." HTTP/1.0", 
//     // "Content-type: text/xml;charset=\"utf-8\"", 
//     // "Accept: text/xml", 
//     // "Cache-Control: no-cache", 
//     // "Pragma: no-cache", 
//     // "SOAPAction: \"run\"", 
//     // "Content-length: ".strlen($xml_data), 
//     // "Authorization: Basic " . base64_encode($credentials)
//     'PETracker-APP-ID': 'PE-1847',
//     'Content-Type': 'application/json',
//     'Origin': 'devapi.english.com'
// ); 

function CallAPI($method, $headers, $url, $data = false)
{
    $curl = curl_init();

    switch ($method)
    {
        case "POST":
            curl_setopt($curl, CURLOPT_POST, 1);

            if ($data)
                curl_setopt($curl, CURLOPT_POSTFIELDS, $data);
            break;
        case "PUT":
            curl_setopt($curl, CURLOPT_PUT, 1);
            break;
        default:
            if ($data)
                $url = sprintf("%s?%s", $url, http_build_query($data));
    }

    // Optional Authentication:
    curl_setopt($curl, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
    curl_setopt($curl, CURLOPT_USERPWD, "username:password");

    if(count($headers) >= 1) {
    	curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
    }
    

    curl_setopt($curl, CURLOPT_URL, $url);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);

    $result = curl_exec($curl);

    curl_close($curl);

    return $result;
}
