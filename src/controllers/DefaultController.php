<?php

require_once 'AppController.php';

class DefaultController extends AppController {

    public function index()
    {
        $this->render('mainpage');
    }

    public function projects()
    {
        $this->render('app');
    }
    public function workers(){
        $this->render('workers');
    }
}