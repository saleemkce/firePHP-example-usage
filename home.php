<?php
// Include the server library
require_once('FirePHP/lib/FirePHPCore/FirePHP.class.php');

// Start output buffering
//ob_start();

$firephp = FirePHP::getInstance(true);

$firephp->setEnabled(true);  // or FB::

// simple example with array
$var = array('i'=>10, 'j'=>20);
$firephp->log($var, 'Iterators');

// simple example with json_encode function
$name = 'saleemkhan';
$test = array('b'=>(bool) $name, 's'=>(string) $name, 'i'=>(integer) $name, 'f' =>(float) $name);
$tests = json_encode($test);
$firephp->log($tests,'Iterators');


/**
 * Example of using firePHP to debug Exceptions
 * Set parameters to true or false
 */
$firephp->registerErrorHandler(
            $throwErrorExceptions=true);
$firephp->registerExceptionHandler();
$firephp->registerAssertionHandler(
            $convertAssertionErrorsToExceptions=true,
            $throwAssertionExceptions=true);
try {
    throw new Exception('Test Exception');
} catch(Exception $e) {
    $firephp->error($e);  // or FB::
}


//multi dimension array example
$multiDimArr = array( 
                array( 'Title' => 'rose', 
                      'Price' => 1.25,
                      'Number' => 15 
                    ),
                array( 'Title' => 'daisy', 
                      'Price' => 0.75,
                      'Number' => 25,
                    ),
                array( 'Title' => 'orchid', 
                      'Price' => 1.15,
                      'Number' => 7 
                    )
             );
$firephp->log($multiDimArr, 'Iterators');


/**
 * Example using class object
 */
Class Tests
{
    public static function getDate($instance){
        return array(
            'classInstance' => $instance,
            'dateObject' => date('Y-m-d')
            );
    }
}
$instance = new Tests();
$data = Tests::getDate($instance);
$firephp->log($data);

/**
 * Inspecting firePHP object
 */
$firephp->log('inspecting firePHP object from console...');
$firephp->log($firephp);
