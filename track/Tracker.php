<?php
//namespace SDKTracker;
require_once 'errors/TrackerErrorsException.php';

class Tracker extends TrackerErrorsException
{
	protected $appId, $sdkVersion, $appPlatform;

    public function __construct($track = array()) {
    	if(array_key_exists('appId', $track)){
    		//die('key exists : '.$track['appId']);
    		$this->appId = $track['appId'];
    	}
    	if(array_key_exists('sdkVersion', $track)){
    		$this->sdkVersion = $track['sdkVersion'];
    	} else {
    		$this->sdkVersion = '1.0.0';
    	}
    	if(array_key_exists('appPlatform', $track)){
    		$this->appPlatform = $track['appPlatform'];
    	}  else {
    		$this->appPlatform = 'web';
    	}

    	$this->methods();
    }

    public function methods() {
    	try{
    		if(empty($this->appId) || is_null($this->appId)) {
    			throw new TrackerErrorsException('Application id is empty!');
    		}

    		die('Everything looks good.');
    	}
    	catch (TrackerErrorsException $e){
    		echo 'Caught exception: ',  $e->getMessage(), "\n".
    		$e->getLine();
    	}
    }
}

$trackData = array('appId' => 'PE-APP-1847', 'sdkVersion' => '2.0.0', 'appPlatform'=>'web');
$track = new Tracker($trackData);