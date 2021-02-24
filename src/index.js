import {addEventToMenuBtn, addEventToAddTaskBtn} from './main-buttons-events'
import {checkIfThereIsLocalStorage, updateLocalStorage} from './local-storage'
import {showTasksOnScreen} from './show-tasks-dom'
import {isBefore, isToday} from 'date-fns'

//Factory function to create a new task object
function addNewTask (title, dueDate, project = 'Inbox', priority) {
    let checkbox = 0;
    return {title, dueDate, project, priority, checkbox};
}

//Initialize the page
let allTasks = [];
allTasks = checkIfThereIsLocalStorage(allTasks);
showTasksOnScreen(allTasks);

//Functions that update the allTasks array
function submitNewTask() {
    const taskTitle = document.querySelector('#title').value;
    const taskDueDate = document.querySelector('#due-date').value;
    //const taskProject = document.querySelector('#project').value;
    const taskPriority = document.querySelector('#priority').value;
    
    let newTask = addNewTask(taskTitle, taskDueDate, /*taskProject*/ 'Inbox', taskPriority);
        
    allTasks.push(newTask);
    allTasks = sortAllTasks(allTasks);
    console.log('bye')
    console.log(allTasks)
    showTasksOnScreen(allTasks);
    updateLocalStorage(allTasks);
}

function deleteTask(index) {
    allTasks.splice(index, 1);
    showTasksOnScreen(allTasks);
    updateLocalStorage(allTasks);
}

function submitNewEdit(index) {
    console.log("test")
    allTasks[index].title = document.querySelector("#title").value;
    allTasks[index].dueDate = document.querySelector("#due-date").value;
    //allTasks[index].project = document.querySelector("#project").value;
    allTasks[index].priority = document.querySelector("#priority").value;
    showTasksOnScreen(allTasks);
    updateLocalStorage(allTasks);
}

function sortAllTasks(allTasks) {
    console.log('hi')
    console.log(allTasks.dueDate)
    let sortedTasks = allTasks.sort((a, b) => {
        if (a.dueDate < b.dueDate) {return -1;}
        else {return 1;}
    })
    console.log(sortedTasks);
    return sortedTasks;
}


//Add event listener to menu button
addEventToMenuBtn();

//Add event listener to add task button
addEventToAddTaskBtn();

export {submitNewTask, submitNewEdit, deleteTask}
