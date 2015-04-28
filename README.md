
Usage steps:

1, Include this line in your PHP file

	require_once('FirePHP/lib/FirePHPCore/FirePHP.class.php');

2, Optionally, enable this setting for output buffering

		ob_start();

3, Start using (more examples in home.php),

<?php
$firephp = FirePHP::getInstance(true);

$firephp->setEnabled(true);

// simple example with array
$var = array('i'=>10, 'j'=>20);
$firephp->log($var, 'Iterators');


More Information:

Please visit firePHP's document page for more information
	http://www.firephp.org/HQ/Learn.htm
