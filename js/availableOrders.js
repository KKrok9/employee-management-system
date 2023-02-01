// TWORZYMY W LOCAL STORAGE KLUCZ AVAILABLE ORDERS I ACTIVE ORDERS oraz dwie tablice o tych samych nazwach
// DO PRZYCISKÓW, DODAJĘ EVENT LISTNERA, KAŻDY PRZYCISK BĘDZIE USUWAŁ Z LISTY WYBRANE ZGŁOSZENIE I
// DODAWAŁ JE DO AKTYWNYCH

//NEW ORDER INPUTS
let newOrderDescription = document.querySelector('.newOrder-input-description');
let newOrderLocation = document.querySelector('.newOrder-input-location');
let newOrderValue = document.querySelector('.newOrder-input-value');
let allNewOrderInputs = document.getElementsByClassName('order-add--form__input');
let allAvailableOrdersHTML = document.querySelector('.availableOrders-list');
let submitNewAvailableOrder = document.querySelector('.order-add--form__submit');

//LOCAL STORAGE LISTS
let activeOrdersArray = JSON.parse(localStorage.getItem('active-orders'));
let availableOrdersArray = JSON.parse(localStorage.getItem('available-orders'));
let currentUserID = JSON.parse(localStorage.getItem('currentUserID'));
console.log(availableOrdersArray);
if(activeOrdersArray==null){
    activeOrdersArray=[];
}
console.log(localStorage);
if(availableOrdersArray==null){
    availableOrdersArray=[];
}

const clearNewOrderInputs = () =>{
    for(let i = 0; i<allNewOrderInputs.length; i++){
        allNewOrderInputs[i].value = '';
    }
}

const checkIfNull = function(){
    let flag = 0 ; // not null
    for(let i = 0; i<allNewOrderInputs.length; i++){
        console.log(allNewOrderInputs[i].value);
        if(allNewOrderInputs[i].value==''){
            flag=1;
            allNewOrderInputs[i].classList.add('empty-input');
        }
        else{
            allNewOrderInputs[i].classList.remove('empty-input');
        }
    }
    return flag;
}

const addAvailableOrderToLocalStorage = () =>{
    localStorage.setItem('available-orders', JSON.stringify(availableOrdersArray))
}

const addActiveOrderToLocalStorage = () =>{
    localStorage.setItem('active-orders', JSON.stringify(activeOrdersArray));
}

const addOrderToList = (orderDescription, orderLocation, orderValue, bossID) =>{
    let order = {
        description : orderDescription,
        location : orderLocation,
        value : orderValue,
        owner : bossID
    }
    availableOrdersArray.push(order);
    addAvailableOrderToLocalStorage();
}

const displayActiveOrders = () =>{
    allAvailableOrdersHTML.innerHTML = '';
    for(let i = 0; i<availableOrdersArray.length;i++){
        if(availableOrdersArray[i].owner){
        let htmlRow = `
        <div class ="availableOrder-row">
            <div class="availableOrder-row__item availableOrder-row__itemDescription ">${availableOrdersArray[i].description}</div>
            <div class="availableOrder-row__item availableOrder-row__itemLocation">${availableOrdersArray[i].location}</div>
            <div class="availableOrder-row__item availableOrder-row__itemValue" >${availableOrdersArray[i].value}$</div>
            <button class="availableOrder-row__item start-order__btn type--${i}">Start order</button>
            </div>
        `
        allAvailableOrdersHTML.insertAdjacentHTML('afterbegin',htmlRow);
        let className = ("type--"+i)
        let startOrderBtn = document.querySelector(`.${className}`);
        startOrderBtn.addEventListener('click', function (e){
            e.preventDefault();
            activeOrdersArray.push(availableOrdersArray[i]);
            availableOrdersArray.splice(i,1);

            addActiveOrderToLocalStorage();
            addAvailableOrderToLocalStorage();

            displayActiveOrders();
        })
        }
    }
}
displayActiveOrders();
const addNewOrder = () =>{
    // POBIERAMY WARTOŚĆI Z INPUTÓW I DODAJEMY DO TABLICY NOWY OBIEKT
    //UPDATUJEMY LOCAL STORAGE, TYM CO MAMY TABLICY
    if(checkIfNull()==0){
        addOrderToList(newOrderDescription.value,newOrderLocation.value,newOrderValue.value,currentUserID);
        displayActiveOrders();
        clearNewOrderInputs();
    }
    else{
        return;
    }
}


submitNewAvailableOrder.addEventListener('click',function(e){
    e.preventDefault();
    addNewOrder()
    console.log(localStorage);
});
