import {isBefore, isToday} from 'date-fns'
import {addEventToTaskBtns} from './show-tasks-events'
import {generatePageBackground, generateFormPopup, generateFormHeader, generateFormInputFields, generateFormSubmitButton} from './main-buttons-dom'

function showTasksOnScreen(allTasks) {
    const mainContent = document.querySelector("#main-content");

    //Deletes all the tasks from the screen
    mainContent.innerHTML = "";
    
    let allTasksDiv = document.createElement("div");
    allTasksDiv.classList.add("all-tasks-div");
    console.log(allTasksDiv)
    console.log(allTasks)
    allTasks.forEach(item => {
        let taskDiv = document.createElement("div");
        taskDiv.id = `task${allTasks.indexOf(item)}`;
        taskDiv.classList.add("task-div");

        let taskLeft = document.createElement("div");
        taskLeft.classList.add("task-left");

        let taskCheckbox = document.createElement("button");
        taskCheckbox.innerHTML = '<i class="far fa-square"></i>';
        taskCheckbox.setAttribute("type", "button");
        taskCheckbox.classList.add("checkbox-btn");
        taskLeft.appendChild(taskCheckbox);
        let taskTitle = document.createElement("p");
        taskTitle.classList.add("task-title");
        taskTitle.textContent = item.title;
        taskLeft.appendChild(taskTitle);

        let taskRight = document.createElement("div");
        taskRight.classList.add("task-right");

        let taskDueDate = document.createElement("p");
        taskDueDate.textContent = item.dueDate;
        taskRight.appendChild(taskDueDate);
        let taskEditBtn = document.createElement("button");
        taskEditBtn.innerHTML = '<i class="far fa-edit"></i>';
        taskEditBtn.setAttribute("type", "button");
        taskEditBtn.classList.add("task-edit-btn");
        taskRight.appendChild(taskEditBtn);
        let taskDeleteBtn = document.createElement("button");
        taskDeleteBtn.innerHTML = '<i class="far fa-trash-alt"></i>';
        taskDeleteBtn.setAttribute("type", "button");
        taskDeleteBtn.classList.add("task-delete-btn");
        taskRight.appendChild(taskDeleteBtn);

        taskDiv.appendChild(taskLeft);
        taskDiv.appendChild(taskRight);

        allTasksDiv.appendChild(taskDiv);
        mainContent.appendChild(allTasksDiv);
    });
    showColorByDueDate();
    showColorByPriority(allTasks);
    addEventToTaskBtns(allTasks);
}

function showColorByDueDate() {
    const allTaskDueDates = document.querySelectorAll(".task-right p");
    
    allTaskDueDates.forEach(dateNode => {
        let dateString = dateNode.textContent;
        let itemDueDate = new Date(dateString.split("-")[0], dateString.split("-")[1] - 1, dateString.split("-")[2]);

        if(isBefore(itemDueDate, new Date()) === true) {
            dateNode.style.color = "#fa2a00"; 
        }

        if(isToday(itemDueDate) === true) {
            dateNode.style.color = '#219ebc'
        }
    })
}

function showColorByPriority(allTasks) {
    const allCheckboxes = Array.from(document.querySelectorAll(".checkbox-btn"));
    
    allCheckboxes.forEach(checkbox => {
        let index = allCheckboxes.indexOf(checkbox);
        if(allTasks[index].priority === "high") {
            checkbox.style.color = "#fa2A00"; 
        }
        else if(allTasks[index].priority === "medium") {
            checkbox.style.color = "#fb8500"; 
        }
        else if(allTasks[index].priority === "low") {
            checkbox.style.color = "#ffb703"; 
        }
    })
}

function generateFormToEditTask(titleValue, dueDateValue, projectValue, priorityValue) {
    let body = document.querySelector("body");
    let pageBackground = generatePageBackground();
    let formPopup = generateFormPopup();
    let formHeader = generateFormHeader("Edit Task");
    let formContent = generateFormInputFields(titleValue, dueDateValue, projectValue, priorityValue);
    let formSubmitBtn = generateFormSubmitButton("submit-edit-btn", "Edit Task");

    formPopup.appendChild(formHeader);
    formPopup.appendChild(formContent);
    formPopup.appendChild(formSubmitBtn);

    pageBackground.appendChild(formPopup);
    body.appendChild(pageBackground);
}

export {showTasksOnScreen, generateFormToEditTask}