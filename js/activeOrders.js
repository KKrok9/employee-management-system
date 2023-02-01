let activeOrdersCounter = document.querySelector('.activeOrders-statistics__item');
let activeOrdersEstimatedIncome = document.querySelector('.activeOrders-statistics__item--estimatedIncome');
let currentUserID = JSON.parse(localStorage.getItem('currentUserID'));

let activeOrdersArray = JSON.parse(localStorage.getItem('active-orders'));
let transactionsArray = JSON.parse(localStorage.getItem('transactions'));

let allActiveOrdersHTML = document.querySelector('.activeOrders-list')

if(activeOrdersArray==null){
    activeOrdersArray=[];
}
if(transactionsArray==null){
    transactionsArray=[];
}
console.log(localStorage);
const setStatistics = (counter, estimatedIncome) =>{
    activeOrdersCounter.textContent = `Active orders : ${counter}`;
    activeOrdersEstimatedIncome.textContent = `Estimated income : ${estimatedIncome}$`
}

const calculateEstimatedIncome = () => {
    let sum = 0;
    for(let i = 0; i < activeOrdersArray.length; i++){
        if(activeOrdersArray[i].owner==currentUserID) {
            sum = Number(activeOrdersArray[i].value) + sum;
        }
    }
    return sum;
}
const calculateLength = () =>{
    let sum = 0;
    for(let i = 0; i < activeOrdersArray.length; i++){
        if(activeOrdersArray[i].owner==currentUserID) {
            sum++
        }
    }
    return sum;
}

setStatistics(calculateLength(), calculateEstimatedIncome());

console.log(activeOrdersArray);
console.log('----------------');
console.log(transactionsArray);
//////////////////////////////////////DISPLAYING ACTIVE ORDERS
const refreshActiveOrders = () =>{
    localStorage.setItem('active-orders', JSON.stringify(activeOrdersArray));
}

const refreshTransactions = () =>{
    localStorage.setItem('transactions', JSON.stringify(transactionsArray));
}


const displayActiveOrders = () => {
    allActiveOrdersHTML.innerHTML = '';
    for (let i = 0; i < activeOrdersArray.length; i++) {
        if (activeOrdersArray[i].owner == currentUserID) {
            let htmlRow = `
        <div class ="activeOrder-row">
            <div class="activeOrder-row__item activeOrder-row__itemDescription ">${activeOrdersArray[i].description}</div>
            <div class="activeOrder-row__item activeOrder-row__itemLocation">${activeOrdersArray[i].location}</div>
            <div class="activeOrder-row__item activeOrder-row__itemValue" >${activeOrdersArray[i].value}$</div>
            <button class="activeOrder-row__item finish-order__btn type--${i}">Finish order</button>
        </div>
        `
            allActiveOrdersHTML.insertAdjacentHTML('afterbegin', htmlRow);
            let className = ("type--" + i)
            let finishOrderBtn = document.querySelector(`.${className}`);
            finishOrderBtn.addEventListener('click', function (e) {
                e.preventDefault();

                let expense = {
                    owner: currentUserID,
                    amount: (Number(activeOrdersArray[i].value)),
                    description: `${activeOrdersArray[i].description}`
                }
                transactionsArray.push(expense);


                activeOrdersArray.splice(i, 1);

                refreshActiveOrders();
                refreshTransactions();
                setStatistics(activeOrdersArray.length, calculateEstimatedIncome());
                displayActiveOrders();
            })
        }
    }
}
displayActiveOrders();