import {submitNewTask} from './index'
import {openOrCloseLeftBar, generateFormToAddNewTask} from './main-buttons-dom'

function addEventToMenuBtn() {
    let menuBtn = document.querySelector('#menu-btn');
    menuBtn.addEventListener('click', openOrCloseLeftBar);
}

function addEventToAddTaskBtn() {
    const openTaskFormBtn = document.getElementById('open-task-form-btn');
    openTaskFormBtn.addEventListener('click', () => {
        generateFormToAddNewTask();
        addEventToFormBtns()
    })
}

function addEventToFormBtns() {
    const closeTaskFormBtn = document.querySelector('#close-btn');
    const submitTaskFormBtn = document.querySelector('#submit-task-btn');

    closeTaskFormBtn.addEventListener('click', closeAddTaskForm);
    submitTaskFormBtn.addEventListener('click', () => {
        submitNewTask();
        closeAddTaskForm();
    });
}

function closeAddTaskForm() {
    const body = document.querySelector('body');
    const form = document.querySelector('#page-background');
    body.removeChild(form);
}

export {addEventToMenuBtn, addEventToAddTaskBtn}



