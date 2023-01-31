let expensesAmount = document.querySelector('.expenses-amount');
let incomeAmount = document.querySelector('.income-amount');
let balance = document.querySelector('.balance');

let transactionsArray = JSON.parse(localStorage.getItem('transactions'));
if(transactionsArray==null){
    transactionsArray=[];
}

localStorage.clear();
const calculateMoney = () =>{
    let totalExpenses = 0;
    let totalIncome = 0;
    let values = [];

    for(let i =0 ; i<transactionsArray.length; i++){
        if(transactionsArray[i].amount<0){
            totalExpenses = totalExpenses + Number(transactionsArray[i].amount);
        }
        if(transactionsArray[i].amount>0){
           totalIncome = totalIncome+Number(transactionsArray[i].amount);
        }
    }
    let totalBalance = totalExpenses+totalIncome;

    values.push(totalExpenses,totalIncome,totalBalance);
    return values;
}

const updateUI = () =>{
    expensesAmount.textContent = `Expenses : ${Math.abs(calculateMoney()[0])}$`;
    incomeAmount.textContent = `Income : ${calculateMoney()[1]}$`;
    balance.textContent=`Balance : ${calculateMoney()[2]}$`;
}

console.log(calculateMoney());
updateUI();