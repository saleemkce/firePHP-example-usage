<?php
namespace env\config;

return array(
	'version'=> '2.0.0',
	'env' => array(
		'development' => 'http://devapi.english.com/data/collect',
    	'test'=> 'http://testapi.english.com/data/collect',
   	 	'stage'=> 'http://stageapi.english.com/data/collect',
    	'production'=> 'http://api.english.com/data/collect',
    	'defaultUrl'=> 'http://devapi.english.com/data/collect'
    	),
	);