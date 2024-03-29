<?php
require 'Routing.php';

$path = trim($_SERVER['REQUEST_URI'], '/');
$path = parse_url( $path, PHP_URL_PATH);



Router::get('index', 'DefaultController');
Router::get('projects', 'DefaultController');
Router::get('workers','DefaultController');
Router::get('transactionHistory','DefaultController');
Router::get('availableOrders','DefaultController');
Router::get('activeOrders','DefaultController');
Router::post('login', 'SecurityController');
Router::post('register', 'SecurityController');
Router::run($path);