import {format, differenceInCalendarDays, compareAsc} from 'date-fns'
import {showTasksAndUpdateStorage} from './index'

let lastFilter = 'Inbox';

const inboxFilter = document.querySelector("#inbox-link");
inboxFilter.addEventListener("click", () => {
    lastFilter = 'Inbox';
    showTasksAndUpdateStorage();
})

const todayFilter = document.querySelector("#today-link");
todayFilter.addEventListener("click", () => {
    lastFilter = 'Today'
    showTasksAndUpdateStorage();
})

const nextDaysFilter = document.querySelector("#next-days-link");
nextDaysFilter.addEventListener("click", () => {
    lastFilter = 'NextDays'
    console.log(lastFilter)
    showTasksAndUpdateStorage();
})

function applyFilter(allTasks) {
    let allTasksFilteredIndexes = [];

    if (lastFilter === 'Inbox') {
        allTasks.forEach((task) => {
            if (task.project === 'Inbox') {
                allTasksFilteredIndexes.push(allTasks.indexOf(task));
            }
        })
        //inboxFilter.firstChild.style.backgroundColor = "#ffffff";
        //todayFilter.firstChild.style.background = "none";
        //nextDaysFilter.firstChild.style.background = "none";
    }

    else if (lastFilter === 'Today') {
        let todaysDate = format(new Date(), "yyyy-MM-dd");
        allTasks.forEach((task) => {
            if (task.dueDate === todaysDate) {
                allTasksFilteredIndexes.push(allTasks.indexOf(task));
            }
        })
        //inboxFilter.firstChild.style.background = "none";
        //todayFilter.firstChild.style.backgroundColor = "#ffffff";
        //nextDaysFilter.firstChild.style.background = "none";
    }
    else if (lastFilter === 'NextDays') {
        allTasks.forEach((task) => {
            let itemDueDate = new Date(task.dueDate.split("-")[0],task.dueDate.split("-")[1] - 1, task.dueDate.split("-")[2]);
            let daysBetween = differenceInCalendarDays(itemDueDate, new Date());

            if ((compareAsc(itemDueDate, new Date()) === 1 && daysBetween <= 7) || (daysBetween === 0)) {
                allTasksFilteredIndexes.push(allTasks.indexOf(task));
            }
        })
        /*let allTasksFiltered = allTasks.filter(item => {
            
            console.log(itemDueDate)
    
            
            console.log(daysBetween)
            
            return (compareAsc(itemDueDate, new Date()) === 1 && daysBetween <= 7) || (daysBetween === 0);
        });
        console.log(allTasksFiltered)
        return allTasksFiltered;
    
        //inboxFilter.firstChild.style.background = "none";
        //todayFilter.firstChild.style.background = "none";
        //nextDaysFilter.firstChild.style.backgroundColor = "#ffffff";*/
    }
    return allTasksFilteredIndexes;
}

export {applyFilter}




