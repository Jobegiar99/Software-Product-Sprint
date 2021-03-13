async function loadRandomFact(){
    const responseFromServer = await fetch("/randomFact");
    const textFromReponse = await responseFromServer.text();
    const fetchContainer = document.getElementById("fetchText");
    const fetchTitle = document.getElementById("fetchTitle");
    fetchTitle.innerText = "Random Fact About Me";
    fetchContainer.innerText = textFromReponse;
}

async function loadCredits(){
    const responseFromServer = await fetch("/credits");
    const textFromReponse = await responseFromServer.text();
    const fetchContainer = document.getElementById("fetchText");
    const fetchTitle = document.getElementById("fetchTitle");
    fetchTitle.innerText = "Image Credits";
    fetchContainer.innerText = textFromReponse;
}  

async function loadSkills(){

    const responseFromServer = await fetch("/skills");
    console.log(responseFromServer);
    const json = await responseFromServer.json();
    const fetchText = document.getElementById("fetchText");
    const fetchTitle = document.getElementById("fetchTitle");
    fetchTitle.innerText = "Skills";
    let text = "";
    json.Skills.forEach(object => {
        text += object.name + "  " + object.level + "\n\n";
    });
    fetchText.innerText = text;

}