import {addEventToMenuBtn, addEventToAddTaskBtn} from './main-buttons-events'
import {checkIfThereIsLocalStorage, updateLocalStorage} from './local-storage'

//Factory function to create a new task object
function addNewTask (title, dueDate, project = 'Inbox', priority) {
    let checkbox = 0;
    return {title, dueDate, project, priority, checkbox};
}

//Initialize the page
let allTasks = [];
allTasks = checkIfThereIsLocalStorage(allTasks);

//Functions that update the allTasks array
function submitNewTask() {
    const taskTitle = document.querySelector('#title').value;
    const taskDueDate = document.querySelector('#due-date').value;
    //const taskProject = document.querySelector('#project').value;
    const taskPriority = document.querySelector('#priority').value;
    
    let newTask = addNewTask(taskTitle, taskDueDate, /*taskProject*/ 'Inbox', taskPriority);
        
    allTasks.push(newTask);
    console.log(allTasks)
}


//Add event listener to menu button
addEventToMenuBtn();

//Add event listener to add task button
addEventToAddTaskBtn();

export {submitNewTask}
