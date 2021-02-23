function checkIfThereIsLocalStorage(allTasks) {
    if(!localStorage.getItem('variables')) {
        localStorage.setItem('variables', JSON.stringify(allTasks));
    } 
    else {
        allTasks = JSON.parse(localStorage.getItem('variables'));
    }
    return allTasks;
};

function updateLocalStorage(allTasks) {
    localStorage.setItem('variables', JSON.stringify(allTasks));
    return;
}

export {checkIfThereIsLocalStorage, updateLocalStorage}