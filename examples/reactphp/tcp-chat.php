<?php

// socket based chat

require __DIR__.'/../../vendor/autoload.php';

$loop = React\EventLoop\Factory::create();
$socket = new React\Socket\Server($loop);

$conns = new \SplObjectStorage();

$socket->on('connection', function ($conn) use ($conns) {
    $conns->attach($conn);

    $conn->on('data', function ($data) use ($conns, $conn) {
        foreach ($conns as $current) {
            if ($conn === $current) {
                continue;
            }

            $current->write($conn->getRemoteAddress().': ');
            $current->write($data);
        }
    });

    $conn->on('end', function () use ($conns, $conn) {
        $conns->detach($conn);
    });
});

echo "Socket server listening on port 1337.\n";
echo "You can connect to it by running: telnet localhost 1337\n";

$socket->listen(1337);
$loop->run();
