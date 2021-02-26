import {format, differenceInCalendarDays, compareAsc} from 'date-fns'
import {showTasksAndProjectsAndUpdateStorage} from './index'

let lastFilter = 'AllTasks';

function addEventToFilterBtns() {
    const allTasksFilter = document.querySelector("#all-tasks-link");
    allTasksFilter.addEventListener("click", () => {
        lastFilter = 'AllTasks';
        showButtonWhenClicked(allTasksFilter);
        showTasksAndProjectsAndUpdateStorage();
    })

    const todayFilter = document.querySelector("#today-link");
    todayFilter.addEventListener("click", () => {
        lastFilter = 'Today'
        showButtonWhenClicked(todayFilter);
        showTasksAndProjectsAndUpdateStorage();
    })

    const nextDaysFilter = document.querySelector("#next-days-link");
    nextDaysFilter.addEventListener("click", () => {
        lastFilter = 'NextDays'
        showButtonWhenClicked(nextDaysFilter);
        showTasksAndProjectsAndUpdateStorage();
    })

    const allProjectBtns = document.querySelectorAll('.project-btn');
    allProjectBtns.forEach(button => {
        button.addEventListener('click', () => {
            lastFilter = `${button.id.replace('project-', '')}`;
            console.log(lastFilter)
            showButtonWhenClicked(button);
            showTasksAndProjectsAndUpdateStorage();
        })
    })
}

function showButtonWhenClicked(button) {
    let lastFilterClicked = document.querySelector('.div-open');
    lastFilterClicked.classList.remove('div-open');
    lastFilterClicked.classList.add('div-closed');

    let currentFilter = button.querySelector('div');
    currentFilter.classList.add('div-open');
    currentFilter.classList.remove('div-closed');
}

function applyFilter(allTasks) {
    let allTasksFilteredIndexes = [];

    if (lastFilter === 'AllTasks') {
        allTasks.forEach((task) => {
            allTasksFilteredIndexes.push(allTasks.indexOf(task));
        })
    }
    else if (lastFilter === 'Today') {
        let todaysDate = format(new Date(), "yyyy-MM-dd");
        allTasks.forEach((task) => {
            if (task.dueDate === todaysDate) {
                allTasksFilteredIndexes.push(allTasks.indexOf(task));
            }
        })
    }
    else if (lastFilter === 'NextDays') {
        allTasks.forEach((task) => {
            let itemDueDate = new Date(task.dueDate.split("-")[0],task.dueDate.split("-")[1] - 1, task.dueDate.split("-")[2]);
            let daysBetween = differenceInCalendarDays(itemDueDate, new Date());

            if ((compareAsc(itemDueDate, new Date()) === 1 && daysBetween <= 7) || (daysBetween === 0)) {
                allTasksFilteredIndexes.push(allTasks.indexOf(task));
            }
        })
    }
    else {
        console.log(lastFilter);
        allTasks.forEach((task) => {
            console.log(task.project)
            if (task.project === lastFilter) {
                allTasksFilteredIndexes.push(allTasks.indexOf(task));
            }
        })
    }

    return allTasksFilteredIndexes;
}

export {applyFilter, addEventToFilterBtns}




