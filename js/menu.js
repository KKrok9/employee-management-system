let expensesAmount = document.querySelector('.expenses-amount');
let incomeAmount = document.querySelector('.income-amount');
let balance = document.querySelector('.balance');
let menuGreeting = document.querySelector('.menu-greeting');
let currentUserID = JSON.parse(localStorage.getItem('currentUserID'))
let transactionsArray = JSON.parse(localStorage.getItem('transactions'));

if(transactionsArray==null){
    transactionsArray=[];
}


const capitalizeFirstLetter = (string) =>{
    return string.charAt(0).toUpperCase()+string.slice(1);
}

const formatMoney = (amount) =>{
    return ((amount).toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD'
    }))
}
const createGreeting = (email) =>{
    let helper = email.toString();
    let greeting = helper.substring(0, helper.indexOf('@'))
    return capitalizeFirstLetter(greeting);
}

menuGreeting.textContent=`Hello ${createGreeting(currentUserID)}!`

const calculateMoney = () =>{
    let totalExpenses = 0;
    let totalIncome = 0;
    let values = [];

    for(let i =0 ; i<transactionsArray.length; i++) {
        if (transactionsArray[i].owner == currentUserID) {
            if (transactionsArray[i].amount < 0) {
                totalExpenses = totalExpenses + Number(transactionsArray[i].amount);
            }
            if (transactionsArray[i].amount > 0) {
                totalIncome = totalIncome + Number(transactionsArray[i].amount);
            }
        }
    }
    let totalBalance = totalExpenses+totalIncome;

    values.push(totalExpenses,totalIncome,totalBalance);
    return values;
}

const updateUI = () =>{
    expensesAmount.textContent = `Expenses : ${formatMoney(Math.abs(calculateMoney()[0]))}`;
    incomeAmount.textContent = `Income : ${formatMoney(calculateMoney()[1])}`;
    balance.textContent=`Balance : ${formatMoney(calculateMoney()[2])}`;
}
updateUI();

