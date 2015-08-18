<?php

// pipe a connection into itself

require __DIR__.'/../../vendor/autoload.php';

$loop = React\EventLoop\Factory::create();
$socket = new React\Socket\Server($loop);

$socket->on('connection', function ($conn) {
    $conn->pipe($conn);
});

echo "Socket server listening on port 1337.\n";
echo "You can connect to it by running: telnet localhost 1337\n";

$socket->listen(1337);
$loop->run();
