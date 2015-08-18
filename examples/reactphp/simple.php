<?php
require __DIR__.'/../../vendor/autoload.php';

$i = 0;

$app = function ($request, $response) use (&$i) {
    $i++;

    $text = "This is request number $i.\n";
    $headers = array('Content-Type' => 'text/plain');

    $response->writeHead(200, $headers);
    if($i >= 10) {
    	$response->end("Hello World\n");
    } else {
    	$response->end($text);
    }
};

$loop = React\EventLoop\Factory::create();
$socket = new React\Socket\Server($loop);
$http = new React\Http\Server($socket);

$http->on('request', $app);
echo "Server running at http://127.0.0.1:1337\n";

$socket->listen(1337);
$loop->run();