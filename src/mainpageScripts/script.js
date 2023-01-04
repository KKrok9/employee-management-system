let loginBtn = document.querySelector('.nav__login');
let registerBtn = document.querySelector('.nav__register');
let modalLogin = document.querySelector('.modal-login');
let modalRegister = document.querySelector('.modal-register');
let overlay = document.querySelector('.overlay');
let closeLoginModalBtn = document.querySelector('.close-loginModal--btn');
let closeRegisterModalBtn = document.querySelector('.close-registerModal--btn');

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