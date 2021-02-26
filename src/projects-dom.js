import {submitNewProject} from './index'

function generateFormToAddNewProject() {
    if (document.querySelector("#new-project-form") === null) {
        createNewProjectFormElements();
        addEventToSubmitProjectBtn();
    }
    else {
        closeNewProjectForm();
    }
}

function createNewProjectFormElements() {
    const allProjectsDiv = document.querySelector('#projects-div');
    
    const newProjectForm = document.createElement("div");
    newProjectForm.setAttribute("id", "new-project-form");

    let newProjectInput = document.createElement("input");
    let submitNewProjectBtn = document.createElement("button");
    submitNewProjectBtn.setAttribute("type", "button");
    submitNewProjectBtn.innerHTML = '<i class="fas fa-plus"></i>';

    newProjectForm.appendChild(newProjectInput);
    newProjectForm.appendChild(submitNewProjectBtn);

    allProjectsDiv.appendChild(newProjectForm);
}

function addEventToSubmitProjectBtn() {
    const newProjectForm = document.querySelector("#new-project-form");
    const submitNewProjectBtn = newProjectForm.querySelector("button");

    submitNewProjectBtn.addEventListener('click', submitNewProject);
}

function closeNewProjectForm() {
    const allProjectsDiv = document.querySelector('#projects-div');
    const newProjectForm = document.querySelector("#new-project-form");

    allProjectsDiv.removeChild(newProjectForm);
}

function showProjectsOnScreen(allProjects) {
    const allProjectsDiv = document.querySelector('#projects-div');
    allProjectsDiv.innerHTML = "";

    allProjects.forEach(project => {
        let currentProjectLink = document.createElement('a');
        currentProjectLink.setAttribute('id', `project-${project}`);
        currentProjectLink.setAttribute('href', '#');
        currentProjectLink.classList.add('project-btn');

        let currentProjectDiv = document.createElement("div");
        currentProjectDiv.innerHTML = `<i class="far fa-folder"></i> &nbsp; ${project}`
        currentProjectDiv.classList.add('div-closed');

        currentProjectLink.appendChild(currentProjectDiv);
        allProjectsDiv.appendChild(currentProjectLink);
    })
}

export {generateFormToAddNewProject, showProjectsOnScreen}