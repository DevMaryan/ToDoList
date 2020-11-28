
function selectColorStatus(event){
    let target = event.target;
    target.classList.toggle('todoTextSelected');
}



function createToDoItem(userInputValue){
    // To-Do Item Container
    let todoItem = document.createElement("div");
    todoItem.classList.add("row", "flx");
    todoItem.onclick = selectColorStatus;

    // Inner Text
    let todoText = document.createElement('div');
    todoText.classList.add('grow');
    todoText.innerText = userInputValue;


    // Date 
    let CreateDate = document.createElement('div');
    CreateDate.classList.add('date');
    let date = new Date();
    year = date.getFullYear();
    month = date.getMonth();
    day = date.getDay();
    CreateDate.innerText = 'Created at ' + year + '-' +  month  + '-'+ day;

    // Delete Button
    let deleteBtn = document.createElement('div');
    deleteBtn.classList.add('btnDelete');
    deleteBtn.innerText = 'X';
    deleteBtn.onclick = function(){
        todoItem.remove();
    }
    
    
    todoItem.appendChild(todoText);
    todoItem.appendChild(CreateDate)
    todoItem.appendChild(deleteBtn);

    let todoItemsContainer = document.getElementById('todoItemsContainer');
    todoItemsContainer.appendChild(todoItem);
}

// Item Entry and Validation
function ToDoItemHandler(){
    let userInput = document.getElementById('toDoEntry');
    let userInputValue = userInput.value;
    

    if(userInputValue == ''){
        let erm = document.getElementById('tdl');
        erm.innerText = 'Entry field can not be empty!';
    }else{

        createToDoItem(userInputValue);
        userInput.value = '';
        let erm = document.getElementById('tdl');
        erm.innerText = 'To-Do List';
    }


}
// Clear List
let btnDeleteItem = document.getElementById('btnDeleteItem');
btnDeleteItem.onclick = function (){
    // or document.getElementById('todoItemsContainer').innerHTML = ''
    const items = document.querySelectorAll('.row')
    items.forEach(el => {
    el.remove()
    })
}


// Add Item Button
let btnAddItem = document.getElementById('btnAddItem');
btnAddItem.onclick = ToDoItemHandler;