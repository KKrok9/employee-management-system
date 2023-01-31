//ADD WORKER FORM INPUTS
let newWorkerName = document.querySelector('.newWorker-input-name');
let newWorkerSurname = document.querySelector('.newWorker-input-surname');
let newWorkerRole = document.querySelector('.newWorker-input-role');
let newWorkerSalary = document.querySelector('.newWorker-input-salary');
let newWorkerSubmit = document.querySelector('.worker-add--form__submit');

//SELECTING ALL INPUTS FROM FORM
let allNewWorkersInput = document.getElementsByClassName('worker-add--form__input');

//WHOLE WORKER ROW FROM LIST
let workersListRow = document.getElementsByClassName('workers-list-row');
let workersList = document.querySelector('.workers-list');

let allWorkersArray = JSON.parse(localStorage.getItem('workers'));
if(allWorkersArray==null){
    allWorkersArray=[];
}

//EXPENSES ARRAY
let transactionHistoryArray = JSON.parse(localStorage.getItem('transactions'));
if(transactionHistoryArray==null){
    transactionHistoryArray=[];
}
///////////////////////////////////////////////////////////////////////
const createFullName = function(name,surname){
    return (name+' '+surname);
}

const clearInputs = function(){
    newWorkerName.value = '';
    newWorkerSurname.value = '';
    newWorkerSalary.value = '';
    newWorkerRole.value = '';
}

const addNewWorker = function(){

    if(checkIfNull()==0) {
        addWorkerToList(newWorkerName.value,newWorkerSurname.value, newWorkerSalary.value, newWorkerRole.value, 3,1);
        displayWorkers();
        clearInputs();
    }

}
const checkIfNull = function(){
    let flag = 0 ; // not null
    for(let i = 0; i<allNewWorkersInput.length; i++){
        console.log(allNewWorkersInput[i].value);
        if(allNewWorkersInput[i].value==''){
            flag=1;
            allNewWorkersInput[i].classList.add('empty-input');
        }
        else{
            allNewWorkersInput[i].classList.remove('empty-input');
        }
    }
    return flag;
}

const displayWorkers = () =>{
    workersList.innerHTML='';
    if(allWorkersArray==null){
        addNewWorker();
        return;
    }
    for(i=0; i<allWorkersArray.length; i++){
        let htmlRow = `
        <div class = "workers-list-row">
            <div class = "workers-list__name row-item">${createFullName(allWorkersArray[i].name, allWorkersArray[i].surname)}</div>
            <div class = "workers-list__salary row-item ">${allWorkersArray[i].salary}$</div>
            <div class = "workers-list__role row-item">${allWorkersArray[i].role}</div>
        </div>
        `
        workersList.insertAdjacentHTML('afterbegin',htmlRow);
    }
}
displayWorkers();

newWorkerSubmit.addEventListener('click',function(e){
    e.preventDefault();
    addNewWorker();
    console.log(localStorage);
});


//LOCAL STORAGE OPERATIONS
function addWorkerToList(workerName, workerSurname, workerSalary, workerRole, workerID, bossID){
    let worker = {
        name : workerName,
        surname : workerSurname,
        salary : workerSalary,
        role : workerRole,
        id : workerID,
        boss : bossID
    };
    let expense = {
        owner : bossID,
        amount : (-Number(workerSalary)),
        description:`${workerName}'s ${workerSurname} salary`
    }
    allWorkersArray.push(worker);
    transactionHistoryArray.push(expense);

    addExpenseToLocalStorage()
    addWorkersToLocalStorage();
}

function addWorkersToLocalStorage(){
    localStorage.setItem('workers',JSON.stringify(allWorkersArray));
}

function addExpenseToLocalStorage(){
    localStorage.setItem('transactions',JSON.stringify(transactionHistoryArray));
}

