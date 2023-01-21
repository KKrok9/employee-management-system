<?php

require_once 'AppController.php';
require_once __DIR__ .'/../models/User.php';
class SecurityController extends AppController
{
    public function login(){
        $user = new User('kkrok@abcd.pl', 'test', 'Startystyka');

        $email = $_POST["email"];
        $password = $_POST["password"];

        if (!$this->isPost()) {
            return $this->render('mainpage');
        }

        if($user->getEmail()!==$email){
            return $this->render('mainpage', ['messages' => ['User with this email not exist!']]);
        }

        if ($user->getPassword() !== $password) {
            return $this->render('mainpage', ['messages' => ['Wrong password!']]);
        }

        $url = "http://$_SERVER[HTTP_HOST]";
        header("Location: {$url}/projects");
    }

}