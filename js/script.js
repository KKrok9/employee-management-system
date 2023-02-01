let loginBtn = document.querySelector('.nav__login');
let registerBtn = document.querySelector('.nav__register');
let modalLogin = document.querySelector('.modal-login');
let modalRegister = document.querySelector('.modal-register');
let overlay = document.querySelector('.overlay');
let closeLoginModalBtn = document.querySelector('.close-loginModal--btn');
let closeRegisterModalBtn = document.querySelector('.close-registerModal--btn');

//SETTING USER ID IN LOCALSTORAGE
let userID = document.querySelector('.modal-login--form__input');
let loginFormBtn = document.querySelector('.modal-login--form__btn');
loginFormBtn.addEventListener('click',function (){
    localStorage.setItem('currentUserID',JSON.stringify(userID.value));
})

const openModal = (modal) =>{
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

const closeModal = (modal) =>{
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

loginBtn.addEventListener('click',()=>{openModal(modalLogin)});
closeLoginModalBtn.addEventListener('click',()=>{closeModal(modalLogin)});

registerBtn.addEventListener('click',()=>{openModal(modalRegister)});
closeRegisterModalBtn.addEventListener('click',()=>{closeModal(modalRegister)});
