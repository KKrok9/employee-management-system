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
const createFullName = function(name,surname){
    return (name+' '+surname);
}

const displayWorkers = () =>{
    workersList.innerHTML='';
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
newWorkerSubmit.addEventListener('click',function(e){
    e.preventDefault();
    addNewWorker();
});

function removeWorkerFromList(e){
    if(e.classList!='workers-list-row'){
        e.parentNode.remove();
    }
    e.remove();
}


//adding event listener to all elements in workersListRow;
for(let i = 0; i<workersListRow.length; i++){
    workersListRow[i].addEventListener('dblclick',(e)=>{
        removeWorkerFromList(e.target);
    })
}

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
    allWorkersArray.push(worker);
    addWorkersToLocalStorage();
}

function addWorkersToLocalStorage(){
    localStorage.setItem('workers',JSON.stringify(allWorkersArray));
    console.log(localStorage);
}

console.log(allWorkersArray);


