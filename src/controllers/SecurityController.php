<?php

require_once 'AppController.php';
require_once __DIR__ .'/../models/User.php';
require_once __DIR__.'/../repository/UserRepository.php';

class SecurityController extends AppController {
    private $userRepository;

    public function __construct()
    {
                parent::__construct();
                $this->userRepository = new UserRepository();
    }

    public function login()
    {

        if (!$this->isPost()) {
            return $this->render('mainpage');
        }

        $email = $_POST['email'];
        $password = md5($_POST['password']);

        $user = $this->userRepository->getUser($email);

        if (!$user) {
            return $this->render('mainpage', ['messages' => ['User not found!']]);
        }

        if ($user->getEmail() !== $email) {
            return $this->render('mainpage', ['messages' => ['User with this email not exist!']]);
        }

        if ($user->getPassword() !== $password) {
            return $this->render('mainpage', ['messages' => ['Wrong password!']]);
        }

        $url = "http://$_SERVER[HTTP_HOST]";
        header("Location: {$url}/projects");
    }

    public function register()
    {
        if (!$this->isPost()) {
            return $this->render('mainpage');
        }

        $email = $_POST['register-email'];
        $password = $_POST['register-password'];
        $company_name = $_POST['register-company_name'];

        //TODO try to use better hash function
        $user = new User($email, md5($password),$company_name);
        $this->userRepository->addUser($user);


        return $this->render('mainpage', ['messages' => ['You\'ve been succesfully registrated!']]);
    }
}
?>