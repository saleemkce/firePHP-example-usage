<?php
// program to check timer status every 5 seconds.
require __DIR__.'/../../vendor/autoload.php';

$secondsToCheckTimer = 5;
$loop = React\EventLoop\Factory::create();

$i = 1;
$timer = $loop->addPeriodicTimer(1,  function() use (&$i) {
    echo 'Timer Count : ' . $i, PHP_EOL;
    ++$i;
});

$loop->addPeriodicTimer($secondsToCheckTimer, function () use ($timer, $loop, &$i) {
    if ($loop->isTimerActive($timer)) {
        echo 'Timer active', PHP_EOL;
    } else {
        echo 'Timer inactive', PHP_EOL;
    }
});

$loop->run();
