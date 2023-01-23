<?php

require_once 'AppController.php';
require_once __DIR__ .'/../models/User.php';
require_once __DIR__.'/../repository/UserRepository.php';
class SecurityController extends AppController
{
    public function login(){
        $userRepository = new \repository\UserRepository();

        if (!$this->isPost()) {
            return $this->render('mainpage');
        }

        $email = $_POST["email"];
        $password = $_POST["password"];

        $user = $userRepository->getUser($email);
        var_dump($user);
        die();

        if(!$user){
            return $this->render('mainpage', ['messages' => ['User does not exist!']]);
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