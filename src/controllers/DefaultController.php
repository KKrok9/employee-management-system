<?php

require_once 'AppController.php';

class DefaultController extends AppController {

    public function index()
    {
        $this->render('mainpage');
    }
    public function transactionHistory(){
        $this->render('transactionHistory');
    }
    public function projects()
    {
        $this->render('app');
    }
    public function workers(){
        $this->render('workers');
    }

    public function availableOrders(){
        $this->render('availableOrders');
    }

    public function activeOrders(){
        $this->render('activeOrders');
    }
}