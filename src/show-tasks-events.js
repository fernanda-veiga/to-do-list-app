import {deleteTask, submitNewEdit} from './index'
import {generateFormToEditTask} from './show-tasks-dom'
import {closeAddTaskForm} from './main-buttons-events'

function addEventToTaskBtns(allTasks) {
    const allTaskDiv = document.querySelectorAll(".task-div");

    allTaskDiv.forEach(task => {
        addEventToCheckbox(task, allTasks);
        addEventToDeleteBtn(task);
        addEventToEditBtn(task, allTasks);
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

export {addEventToTaskBtns}