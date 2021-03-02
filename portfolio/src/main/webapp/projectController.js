let projectContainer = new ProjectContainer();

function loadProject( nextButtonPressed ){

    let titleContainer = document.getElementById("projectContainerTitle");
    let imageContainer = document.getElementById("projectContainerImage");
    let descriptionContainer = document.getElementById("projectContainerDescription");
    let urlContainer = document.getElementById("projectContainerURL");
    
    let nextState = (nextButtonPressed) ? projectContainer.loadNext() : projectContainer.loadPrevious();

    titleContainer.innerHTML = nextState.title;
    imageContainer.src = nextState.image;
    urlContainer.href = nextState.url;
    descriptionContainer.innerHTML = nextState.description;

}