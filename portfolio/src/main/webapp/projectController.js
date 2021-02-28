function loadProject(loadNext){

    let titleContainer = document.getElementById("projectContainerTitle");
    let imageContainer = document.getElementById("projectContainerImage");
    let descriptionContainer = document.getElementById("projectContainerDescription");
    let urlContainer = document.getElementById("projectContainerURL");

    title = titleContainer.innerText;
    image = imageContainer.getAttribute("src");
    url = urlContainer.getAttribute("href");
    description = descriptionContainer.innerText;
    let tempProject = new ProjectInformation(title,image,url,description);
    let nextState = new ProjectInformation("-","-","-","-");
    if( loadNext ){

        nextState = new ProjectContainer().nextProject[title];

    }else{

        nextState = new ProjectContainer().previousProject[title];

    }
    console.log(url);
    console.log(nextState.url);
    titleContainer.innerHTML = nextState.title;
    imageContainer.src = nextState.image;
    urlContainer.href = nextState.url;
    descriptionContainer.innerHTML = nextState.description;

}