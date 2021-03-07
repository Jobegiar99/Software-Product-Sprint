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