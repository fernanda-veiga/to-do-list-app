import {deleteTask, submitNewEdit} from './index'
import {generateFormToEditTask} from './show-tasks-dom'
import {closeAddTaskForm} from './main-buttons-events'
import {generatePageBackground, generateFormPopup, generateFormHeader} from './main-buttons-dom'

function addEventToTaskBtns(allTasks) {
    const allTaskDiv = document.querySelectorAll(".task-div");

    allTaskDiv.forEach(task => {
        addEventToCheckbox(task, allTasks);
        addEventToDeleteBtn(task);
        addEventToEditBtn(task, allTasks);
        addEventToTaskDiv(task, allTasks);
    })
}

function addEventToCheckbox(task, allTasks) {
    const taskTitle = task.querySelector(".task-title");
    const checkbox = task.querySelector(".checkbox-btn");
    const CHECKBOX_COMPLETE_ICON = '<i class="far fa-check-square"></i>';
    const CHECKBOX_INCOMPLETE_ICON = '<i class="far fa-square"></i>';

    let index = Number(task.id.replace("task", ""));

    checkbox.addEventListener("click", () => {
        if (allTasks[index].checkbox == 0) {
            checkbox.innerHTML = CHECKBOX_COMPLETE_ICON;
            taskTitle.style.textDecoration = "line-through";
            allTasks[index].checkbox = 1;
        }
        else {
            checkbox.innerHTML = CHECKBOX_INCOMPLETE_ICON;
            taskTitle.style.textDecoration = "none";
            allTasks[index].checkbox = 0;
        }
    })
}

function addEventToDeleteBtn(task) {
    const deleteBtn = task.querySelector(".task-delete-btn");
    let index = Number(task.id.replace("task", ""));
    deleteBtn.addEventListener("click", () => {deleteTask(index)});
}

function addEventToEditBtn(task, allTasks) {
    const editBtn = task.querySelector(".task-edit-btn");
    let index = Number(task.id.replace("task", ""));

    editBtn.addEventListener("click", () => {
        generateFormToEditTask(allTasks[index].title, allTasks[index].dueDate, allTasks[index].project, allTasks[index].priority);
        addEventToEditFormBtns(index);
    })
}

function addEventToEditFormBtns(index) {
    const closeFormBtn = document.querySelector("#close-btn");
    const submitEditBtn = document.querySelector("#submit-edit-btn");

    closeFormBtn.addEventListener("click", closeAddTaskForm);
    submitEditBtn.addEventListener("click", () => {
        submitNewEdit(index);
        closeAddTaskForm();
    });
}

function addEventToTaskDiv(task, allTasks) {
    let taskTitle = task.querySelector('.task-title');
    let index = Number(task.id.replace('task', ''));

    taskTitle.addEventListener('click', () =>  {
        console.log(allTasks[index])
        generateTaskPopup(allTasks[index].title, allTasks[index].dueDate, allTasks[index].project, allTasks[index].priority)

        const closeTaskFormBtn = document.querySelector('#close-btn');
        closeTaskFormBtn.addEventListener('click', closeAddTaskForm);
    })
}

function generateTaskPopup(titleValue, dueDateValue, projectValue, priorityValue) {
    let body = document.querySelector("body");
    let pageBackground = generatePageBackground();
    let taskPopup = generateFormPopup();
    let taskHeader = generateFormHeader("Task");
    let taskDivContent = generateTaskPopupContent(titleValue, dueDateValue, projectValue, priorityValue);

    taskPopup.appendChild(taskHeader);
    taskPopup.appendChild(taskDivContent);

    pageBackground.appendChild(taskPopup);
    body.appendChild(pageBackground);
}

function generateTaskPopupContent(titleValue, dueDateValue, projectValue, priorityValue) {
    let taskDivContent = document.createElement('div');
    taskDivContent.setAttribute('id', 'task-content');

    //Task Title
    let taskTitle = document.createElement('div');
    taskTitle.setAttribute('id', 'task-content-title');
    taskTitle.textContent = titleValue;

    //Due date
    let taskDueDate = document.createElement('div');
    taskDueDate.innerHTML = `<i class="far fa-calendar"></i> &nbsp ${dueDateValue}`;

    //Project
    /*let taskProjectSelect = generateProjectSelect(projectValue);
    taskProjectSelect.value = projectValue;*/

    //Priority
    let taskPriority = document.createElement('div');
    taskPriority.innerHTML =`<i class="fas fa-exclamation"></i> &nbsp ${priorityValue.charAt(0).toUpperCase()}${priorityValue.slice(1)}`;

    //Append child
    taskDivContent.appendChild(taskTitle);
    taskDivContent.appendChild(taskDueDate);
    //formContent.appendChild(taskProjectSelect);
    taskDivContent.appendChild(taskPriority);

    return taskDivContent;
}

export {addEventToTaskBtns}