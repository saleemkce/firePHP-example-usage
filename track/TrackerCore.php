<?php
class TrackerCore
{
	public trackerProperties = array();
	
	// public function setupConstants = function(constants) {
	//     if (_.isObject(constants) && !_.isEmpty(constants)) {
	//         _.forEach(constants, function(v, k) {
	//             self[k] = v;
	//         });
	//     }
	// }

	// public function setProperties = function(properties) {
	//     if (_.isObject(properties) && !_.isEmpty(properties)) {
	//         _.forEach(properties, function(v, k) {
	//             $this->setProperty(k, v);
	//         });
	//     }
	// }

	public function setProperty($key, $value) {
	    $this->trackerProperties[$key] = $value;
	}

	public function getProperty($key) {
		if(array_key_exists($key, $this->trackerProperties)){
			return $this->trackerProperties[$key];
		}
		return null;
	}

	public function getProperties() {
	    return $this->trackerProperties;
	}

	public function setTrackerVersion($version) {
	    $this->setProperty('sdkversion', $version);
	}

	public function setAppId = function($appId) {
	    $this->setProperty('appid', $appId);
	}

	public function setInternalSessionId = function($sessionId) {
	    $this->setProperty('internalsessionid', $sessionId);
	}

	public function setUserId = function($userId) {
	    $this->setProperty('userid', $userId);
	}

	public function setUserOrigin = function($origin) {
	    $this->setProperty('userorigin', $origin);
	}

	public function setUserSsoOrigin = function($ssoOrigin) {
	    $this->setProperty('userssoorigin', $ssoOrigin);
	}

	public function setUserCountry = function($country) {
	    $this->setProperty('usercountry', $country);
	}

	public function setUserGender = function($gender) {
	    $this->setProperty('usergender', $gender);
	}

	public function setUserFirstname = function($firstname) {
	    $this->setProperty('userfirstname', $firstname);
	}

	public function setUserLastname = function($lastname) {
	    $this->setProperty('userlastname', $lastname);
	}

	public function setPlatform = function($platform) {
	    $this->setProperty('appplatform', $platform);
	}

	public function setScreenResolution = function($width, $height) {
	    $this->setProperty('screenresolution', $width + 'x' + $height);
	}

	public function setViewPort = function($width, $height) {
	    $this->setProperty('viewport', $width + 'x' + $height);
	}

	public function setScreenDepth = function($width, $height) {
	    $this->setProperty('screendepth', $width + 'x' + $height);
	}

	public function setTimezone = function($timezone) {
	    $this->setProperty('timezone', $timezone);
	}

	public function setLanguage = function($lang) {
	    $this->setProperty('userlanguage', $lang);
	}

	public function setTimestamp = function($timestamp) {
	    $this->setProperty('timestamp', $timestamp);
	}

	public function setDocumentEncoding = function($encode) {
	    $this->setProperty('documentencoding', $encode);
	}

	public function setIp = function($ip) {
	    $this->setProperty('userip', $ip);
	}

	public function setUserAgent = function($userAgent) {
	    $this->setProperty('useragent', $userAgent);
	}

	public function setCookieEnabled = function($cookie) {
	    $this->setProperty('iscookieenabled', $cookie);
	}

	public function setDocumentSize = function($size) {
	    $this->setProperty('documentsize', $size);
	}

	public function setGeoLocation = function($geoLocation) {
	    $this->setProperty('latitudelogitude', $geoLocation);
	}

	public function setJavaEnabled = function($java) {
	    $this->setProperty('isjavaenabled', $java);
	}

	public function setFlashPlayer = function($flashPlayer) {
	    $this->setProperty('flashplayerversion', $flashPlayer);
	}

	public function setPdfStatus = function($pdfStatus) {
	    $this->setProperty('pdfpluginstatus', $pdfStatus);
	}

	public function setQuickTimeStatus = function($qtStatus) {
	    $this->setProperty('qtpluginstatus', $qtStatus);
	}

	public function setRealPlayerStatus = function($rpStatus) {
	    $this->setProperty('realppluginstatus', $rpStatus);
	}

	public function setWindowsMediaPlayerStatus = function($wmStatus) {
	    $this->setProperty('wmapluginstatus', $wmStatus);
	}

	public function setDirectorPluginStatus = function($dpStatus) {
	    $this->setProperty('directorpluginstatus', $dpStatus);
	}

	public function setGooglePluginStatus = function($gpStatus) {
	    $this->setProperty('googlegearpluginstatus', $gpStatus);
	}

	public function resetTrackerCore = function() {
	    $this->trackerProperties = {}
	}
}
