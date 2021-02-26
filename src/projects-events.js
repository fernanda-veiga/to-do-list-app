import {generateFormToAddNewProject} from './projects-dom'

function addEventToAddNewProjectBtn() {
    const newProjectBtn = document.getElementById('add-new-project-btn');
    newProjectBtn.addEventListener('click', generateFormToAddNewProject);
}

export {addEventToAddNewProjectBtn}
