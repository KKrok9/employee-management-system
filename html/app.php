<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="../styles/app.css" />
    <link rel="icon" type="image/x-icon" href="../images/logo.png" />
    <title>Workify</title>
  </head>
  <body>
    <div class="container">
      <div class="company-name">
        <h2>Pyszne.pl</h2>
      </div>
      <section class="money-section">
        <div class="expenses-and-income">
          <p class="expenses-amount">Expenses : 100$</p>
          <p class="income-amount">Income : 101$</p>
        </div>
        <p class="balance">Balance : 1$</p>
      </section>
      <main>
        <!--- MENU SECTION START -->
        <div class = "menu">
            <ul>
                <li>
                    <button class="menu-btn menu-btn__workers">WORKERS</button>
                </li>
                <li>
                    <button class="menu-btn menu-btn__activeOrders">ACTIVE ORDERS</button>
                </li>
                <li>
                    <button class="menu-btn menu-btn__avaliableOrders">AVALIABLE ORDERS</button>
                </li>
                <li>
                    <button class="menu-btn menu-btn__transactions">TRANSACTION HISTORY</button>
                </li>
            </ul>
        </div>
        <!--- MENU SECTION END --->
    </main>
    <footer class = "page-footer">
    <img
        src="../images/navbar-logo.png"
        alt="Company logo"
        class="footer-img footer-item"
        id="logo"
      />
      <p class = "footer-name footer-item">WORKIFY</p>
    </footer>
    </div>
  </body>
</html>
