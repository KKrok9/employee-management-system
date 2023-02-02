console.log(localStorage);

const transactionsContainer = document.querySelector('.movements-container');
let transactionsArray = JSON.parse(localStorage.getItem('transactions'));
let currentUserID = JSON.parse(localStorage.getItem('currentUserID'))
if(transactionsArray==null){
    transactionsArray=[];
}

const checkTypeOfTransaction = (amount) =>{
    if(amount>0){
        return "income"
    }
    else{
        return "outcome"
    }
}

const formatMoney = (amount) =>{
    return ((amount).toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD'
    }))
}


const displayTransactions = () => {
    transactionsContainer.innerHTML='';
    if(transactionsArray==null){
        return;
    }
    let j =0;
    for (let i = 0; i < transactionsArray.length; i++) {
        if (transactionsArray[i].owner == currentUserID) {
            j++;
            let html = `
        <div class ="movements__row">
            <div class="movement-item movement__type movement__type--${checkTypeOfTransaction(transactionsArray[i].amount)}">${j} ${checkTypeOfTransaction(transactionsArray[i].amount)}</div>
            <div class="movement-item movement__value">${formatMoney(Number(transactionsArray[i].amount))}$</div>
            <div class="movement-item movement-description" >${transactionsArray[i].description}</div>
        </div>
      `
            transactionsContainer.insertAdjacentHTML('afterbegin', html);
        }
    }

}

displayTransactions();