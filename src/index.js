import {addEventToMenuBtn, addEventToAddTaskBtn} from './main-buttons-events'
import {checkIfThereIsLocalStorageOnTasks, checkIfThereIsLocalStorageOnProjects, updateLocalStorage} from './local-storage'
import {showTasksOnScreen} from './show-tasks-dom'
import {addEventToAddNewProjectBtn} from './projects-events'
import {showProjectsOnScreen} from './projects-dom'
import {addEventToFilterBtns} from './filters'

//Factory function to create a new task object
function addNewTask (title, dueDate, project = 'Inbox', priority) {
    let checkbox = 0;
    return {title, dueDate, project, priority, checkbox};
}

//Initialize the page
let allTasks = [];
let allProjects = ['Inbox'];
allTasks = checkIfThereIsLocalStorageOnTasks(allTasks);
allProjects = checkIfThereIsLocalStorageOnProjects(allProjects);
showTasksAndProjectsAndUpdateStorage()
showProjectsOnScreen(allProjects)


function showTasksAndProjectsAndUpdateStorage() {
    console.log('bye')
    showTasksOnScreen(allTasks);
    //showProjectsOnScreen(allProjects);
    updateLocalStorage(allTasks, allProjects);
    return;
}

/*function showOnlyTasks() {
    showTasksOnScreen(allTasks);
    updateLocalStorage(allTasks, allProjects);
    return;
}*/

//Functions that update the allTasks array
function submitNewTask() {
    const taskTitle = document.querySelector('#title').value;
    const taskDueDate = document.querySelector('#due-date').value;
    const taskProject = document.querySelector('#project').value;
    const taskPriority = document.querySelector('#priority').value;
    
    let newTask = addNewTask(taskTitle, taskDueDate, taskProject, taskPriority);
        
    allTasks.push(newTask);
    allTasks = sortAllTasksByDueDate(allTasks)
    showTasksAndProjectsAndUpdateStorage();
}

function deleteTask(index) {
    allTasks.splice(index, 1);
    showTasksAndProjectsAndUpdateStorage();
}

function submitNewEdit(index) {
    allTasks[index].title = document.querySelector("#title").value;
    allTasks[index].dueDate = document.querySelector("#due-date").value;
    allTasks[index].project = document.querySelector("#project").value;
    allTasks[index].priority = document.querySelector("#priority").value;
    allTasks = sortAllTasksByDueDate(allTasks)
    showTasksAndProjectsAndUpdateStorage();
}

function sortAllTasksByDueDate(allTasks) {
    let sortedTasks = allTasks.sort((a, b) => {
        if (a.dueDate < b.dueDate) {return -1;}
        else {return 1;}
    })
    return sortedTasks;
}

//Functions that update the AllProjects array
function submitNewProject() {
    const newProjectForm = document.querySelector("#new-project-form");
    let newProjectInput = newProjectForm.querySelector("input");

    allProjects.push(newProjectInput.value);
    showProjectsOnScreen(allProjects)
    showTasksAndProjectsAndUpdateStorage()
}

//Generate project select
function generateProjectSelect(projectValue) {
    let taskProjectSelect = document.createElement("select");
    taskProjectSelect.setAttribute("id", "project");
    taskProjectSelect.setAttribute("name", "project");
    taskProjectSelect.value = projectValue;
    
    allProjects.forEach(project => {
        let projectOption = document.createElement("option");
        projectOption.setAttribute("value", `${project}`);
        projectOption.textContent = `${project}`;
        taskProjectSelect.appendChild(projectOption);
    })

    return taskProjectSelect;
}

//Add event listener to menu button
addEventToMenuBtn();

//Add event listener to add task button
addEventToAddTaskBtn();

//Add event listener to add new project button
addEventToAddNewProjectBtn();

//Add event listener to filter buttons
addEventToFilterBtns();

export {submitNewTask, submitNewEdit, deleteTask, showTasksAndProjectsAndUpdateStorage, submitNewProject, generateProjectSelect}
