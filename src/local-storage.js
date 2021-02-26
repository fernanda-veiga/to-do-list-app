function checkIfThereIsLocalStorageOnTasks(allTasks) {
    if(!localStorage.getItem('tasks')) {
        localStorage.setItem('tasks', JSON.stringify(allTasks));
    } 
    else {
        allTasks = JSON.parse(localStorage.getItem('tasks'));
    }
    return allTasks;
};

function checkIfThereIsLocalStorageOnProjects(allProjects) {
    if(!localStorage.getItem('projects')) {
        localStorage.setItem('projects', JSON.stringify(allProjects));
    } 
    else {
        allProjects = JSON.parse(localStorage.getItem('projects'));
    }
    return allProjects;
};

function updateLocalStorage(allTasks, allProjects) {
    localStorage.setItem('tasks', JSON.stringify(allTasks));
    localStorage.setItem('projects', JSON.stringify(allProjects));
    return;
}

export {checkIfThereIsLocalStorageOnTasks, checkIfThereIsLocalStorageOnProjects, updateLocalStorage}