function openOrCloseLeftBar() {
    const leftBar = document.getElementById('left-bar');
    const mainContent = document.getElementById('main-content');

    if (leftBar.className === 'left-bar-open') {
        leftBar.classList.remove('left-bar-open');
        leftBar.classList.add('left-bar-closed');
        mainContent.style.marginLeft = '0';
    }
    else {
        leftBar.classList.add('left-bar-open');
        leftBar.classList.remove('left-bar-closed');
        mainContent.style.marginLeft = '290px';
    }
}

function generateFormToAddNewTask() {
    let body = document.querySelector('body');
    let pageBackground = generatePageBackground();
    let formPopup = generateFormPopup();
    let formHeader = generateFormHeader('Add New Task');
    let formContent = generateFormInputFields();
    let formSubmitBtn = generateFormSubmitButton('submit-task-btn', 'Add Task');

    formPopup.appendChild(formHeader);
    formPopup.appendChild(formContent);
    formPopup.appendChild(formSubmitBtn);

    pageBackground.appendChild(formPopup);
    body.appendChild(pageBackground);

    //addEventToFormBtns()
}

function generatePageBackground() {
    let pageBackground = document.createElement('div');
    pageBackground.setAttribute('id', 'page-background')
    return pageBackground;
}

function generateFormPopup() {
    let formPopup = document.createElement('div');
    formPopup.setAttribute('id', 'form-popup');
    return formPopup;
}

function generateFormHeader(title) {
    let formHeader = document.createElement('div');
    formHeader.setAttribute('id', 'form-header');

    //Title
    let formTitle = document.createElement('h2');
    formTitle.textContent = title;

    //Close Button
    let formCloseBtn = document.createElement('button');
    const CLOSE_BTN_ICON = '<i class="fas fa-times"></i>';
    formCloseBtn.setAttribute('type', 'button');
    formCloseBtn.setAttribute('id', 'close-btn');
    formCloseBtn.innerHTML = CLOSE_BTN_ICON;

    //Append child
    formHeader.appendChild(formTitle);
    formHeader.appendChild(formCloseBtn);

    return formHeader;
}

function generateFormInputFields(titleValue = '', dueDateValue = new Date(), projectValue = 'Inbox', priorityValue = '') {
    let formContent = document.createElement('form');

    //Task Title
    let taskTitleInput = document.createElement('input');
    taskTitleInput.setAttribute('type', 'text');
    taskTitleInput.setAttribute('id', 'title');
    taskTitleInput.setAttribute('name', 'title');
    taskTitleInput.value = titleValue;

    //Due date
    let taskDueDateInput = document.createElement('input');
    taskDueDateInput.setAttribute('type', 'date');
    taskDueDateInput.setAttribute('id', "due-date");
    taskDueDateInput.setAttribute('name', 'due-date');
    
    if (typeof dueDateValue === 'string') {
        dueDateValue = new Date(dueDateValue.split('-')[0], dueDateValue.split('-')[1] - 1, dueDateValue.split('-')[2]);
    }
    taskDueDateInput.valueAsDate = dueDateValue;

    //Project
    /*let taskProjectSelect = generateProjectSelect(projectValue);
    taskProjectSelect.value = projectValue;*/

    //Priority
    let taskPrioritySelect = document.createElement('select');
    taskPrioritySelect.setAttribute('id', 'priority');
    taskPrioritySelect.setAttribute('name', 'priority');

    let priorityTitle = '<option value="" disabled selected>Priority</option>';
    let priorityOptionHigh = '<option value="high">High</option>';
    let priorityOptionMedium = '<option value="medium">Medium</option>';
    let priorityOptionLow = '<option value="low">Low</option>';

    taskPrioritySelect.innerHTML = `${priorityTitle}
    ${priorityOptionHigh}
    ${priorityOptionMedium}
    ${priorityOptionLow}`;

    taskPrioritySelect.value = priorityValue;

    //Append child
    formContent.appendChild(taskTitleInput);
    formContent.appendChild(taskDueDateInput);
    //formContent.appendChild(taskProjectSelect);
    formContent.appendChild(taskPrioritySelect);

    return formContent;
}

function generateFormSubmitButton(buttonId, buttonText) {
    let formSubmitBtn = document.createElement('button');
    formSubmitBtn.setAttribute('type', 'button');
    formSubmitBtn.setAttribute('id', buttonId);
    formSubmitBtn.textContent = buttonText;

    return formSubmitBtn;
}


export {openOrCloseLeftBar, generateFormToAddNewTask, generatePageBackground, generateFormPopup, generateFormHeader, generateFormInputFields, generateFormSubmitButton}