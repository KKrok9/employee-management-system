<?php

class User{
    private $email;
    private $password;
    private $company_name;

    public function __construct(string $email,string $password,string $company_name){
        $this->email = $email;
        $this->password=$password;
        $this->company_name=$company_name;
    }

    public function getEmail() :string{
        return $this->email;
    }

    public function getPassword() :string{
        return $this->password;
    }

    public function getCompanyName() :string{
        return $this->company_name;
    }

    public function setEmail(string $email){
        $this->email = $email;
    }

    public function setPassword(string $password){
        $this->password = $password;
    }
    public function setCompanyName(string $company_name){
        $this->company_name = $company_name;
    }
}