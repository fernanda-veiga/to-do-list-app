import {addEventToMenuBtn} from './main-buttons-events'

//Factory function to create a new task object
function addNewTask (title, dueDate, project = 'Inbox', priority) {
    let checkbox = 0;
    return {title, dueDate, project, priority, checkbox};
}

//Add event listener to menu button
addEventToMenuBtn();