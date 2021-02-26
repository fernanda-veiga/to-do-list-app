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

    submitNewProjectBtn.addEventListener('click', () => {
        submitNewProject();
        closeNewProjectForm();
        //showProjectsOnScreen(allProjects);
    });
}

function closeNewProjectForm() {
    const allProjectsDiv = document.querySelector('#projects-div');
    console.log(allProjectsDiv)
    //const newProjectForm = document.querySelector("#new-project-form");
    //console.log(newProjectForm)

    //allProjectsDiv.removeChild(newProjectForm);
}

function showProjectsOnScreen(allProjects) {
    console.log('show')
    const allProjectsDiv = document.querySelector('#projects-div');
    allProjectsDiv.innerHTML = "";

    //console.log(allProjects.splice(1))

    allProjects.forEach(project => {
        let currentProject = document.createElement("div");
        currentProject.innerHTML = `<i class="far fa-folder"></i> &nbsp; ${project}`
        allProjectsDiv.appendChild(currentProject);
    })

    /*let projectsToShow = allProjects.splice(1);
    projectsToShow.forEach(project => {
        let currentProject = document.createElement("div");
        currentProject.innerHTML = `<i class="far fa-folder"></i> &nbsp; ${project}`
        allProjectsDiv.appendChild(currentProject);
    })*/
}

export {generateFormToAddNewProject, showProjectsOnScreen}