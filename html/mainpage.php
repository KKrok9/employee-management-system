<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Workify</title>
    <link rel="stylesheet" href="../styles/mainpage.css" />
    <link rel="icon" type="image/x-icon" href="../images/logo.png" />
  </head>
  <body>
    <!--NAVBAR SECTION START-->
    <nav class="mainpage--navbar">
      <img
        src="../images/navbar-logo.png"
        alt="Company logo"
        class="mainpage--navbar__logo"
        id="logo"
      />
      <h1 class="mainpage--navbar__header">Make work easier !</h1>
      <ul class="mainpage--navbar__btns">
        <li class="nav__item">
          <button class="nav__btn nav__register">Register</button>
        </li>
        <li class="nav__item">
          <button class="nav__btn nav__login">Login</button>
        </li>
      </ul>
    </nav>
    <!--NAVBAR SECTION END-->

    <!-- MAINPAGE CONTENT SECTION START-->
    <div class="mainpage--header">
      <div class="mainpage--header__text">
        <h1>
          Take a
          <span class="highlight">look</span> for <br />
          <span class="highlight">your progress</span>
        </h1>
        <h4>A simpler managment for simpler life</h4>
      </div>
      <img
        src="../images/mainpage-content-managingTeam.jpg"
        alt="managing-team-jpg"
        class="mainpage--header__img"
      />
    </div>

    <!-- MAINPAGE CONTETN SECTION END-->

    <!---LOGIN FORM START-->

    
    <div class="modal-login hidden">
    
      <button class="close-loginModal--btn">&times;</button>
      <h2>
        Welcome
        <span class="highlight">back!</span>
      </h2>
      <form class="modal-login--form"  action="login" method="POST">
      <div class="messages">
      <?php
                        if(isset($messages)){
                            foreach($messages as $message) {
                                echo $message;
                            }
                        }
                    ?>
                </div>
        <label>Enter your e-mail</label>
        <input class="modal-login--form__input" name="email" type="email">
        <label>Enter your password</label>
        <input class="modal-login--form__input"name="password" type="password">
        <button class="modal-login--form__btn" type="submit">Login &rarr;</button>
      </form>
    </div>
    <div class="overlay hidden"></div>

    <!--LOGIN FORM END-->

    <!--REGISTER FORM START-->
    <div class="modal-register hidden">
      <button class="close-registerModal--btn">&times;</button>
      <h2>
        Hello
        <span class="highlight">there!</span>
      </h2>
      <form class="modal-register--form" action="register" method="POST">
          <div class="messages">
                                 <?php
                                      if(isset($messages)){
                                              foreach($messages as $message) {
                                                      echo $message;
                          }
                        }
                    ?>
          </div>

        <label>Enter your company name</label>
        <input class="modal-register--form__input" type="text" name="register-company_name"/>

        <label>Enter your e-mail</label>
        <input class="modal-register--form__input" type="email" name="register-email"/>

        <label>Enter your password</label>
        <input class="modal-register--form__input" type="password" name="register-password" />

        <button class="modal-register--form__btn">Submit &rarr;</button>
      </form>
    </div>
    <!--REGISTER FORM END-->

    <script src="../js/script.js" defer></script>
  </body>
</html>
