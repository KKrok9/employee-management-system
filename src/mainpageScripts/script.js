let loginBtn = document.querySelector('.nav__login');
let modalLogin = document.querySelector('.modal-login');
let overlay = document.querySelector('.overlay');
let closeModalBtn = document.querySelector('.close-modal--btn');

const openModal = () =>{
    modalLogin.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

const closeModal = () =>{
    modalLogin.classList.add('hidden');
    overlay.classList.add('hidden');
}

loginBtn.addEventListener('click',openModal);
closeModalBtn.addEventListener('click',closeModal);