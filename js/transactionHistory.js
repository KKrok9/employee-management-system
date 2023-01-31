console.log(localStorage);
const transactionsContainer = document.querySelector('.movements-container');
let transactionsArray = JSON.parse(localStorage.getItem('transactions'));

if(transactionsArray==null){
    transactionsArray=[];
}

console.log(transactionsArray);

const checkTypeOfTransaction = (amount) =>{
    if(amount>0){
        return "income"
    }
    else{
        return "outcome"
    }
}


const displayTransactions = () => {
    transactionsContainer.innerHTML='';
    if(transactionsArray==null){
        return;
    }
    for (let i = 0; i < transactionsArray.length; i++) {
        let html = `
        <div class ="movements__row">
            <div class="movement-item movement__type movement__type--${checkTypeOfTransaction(transactionsArray[i].amount)}">${i+1} ${checkTypeOfTransaction(transactionsArray[i].amount)}</div>
            <div class="movement-item movement__value">${transactionsArray[i].amount}$</div>
            <div class="movement-item movement-description" >${transactionsArray[i].description}</div>
        </div>
      `
        transactionsContainer.insertAdjacentHTML('afterbegin',html);
    }

}

displayTransactions();