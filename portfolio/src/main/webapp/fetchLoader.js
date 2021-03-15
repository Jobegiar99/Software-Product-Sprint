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

async function loadRandomMessage(){
    const responseFromServer = await fetch("/random-message");
    const responseText = await responseFromServer.text();
    const fetchText = document.getElementById("fetchText");
    const fetchTitle = document.getElementById("fetchTitle");
    fetchTitle.innerText = "Random Message from someone who has visited my portfolio";
    fetchText.innerText = responseText;
}