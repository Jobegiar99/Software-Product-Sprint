let ProjectContainer = class{
    constructor(){
        let davatrixRoTFO = new ProjectInformation(
            "Davatrix: Rise of the Fallen Ones",
            "images/davatrix-RotFO.png",
            "https://www.newgrounds.com/portal/view/729701",
            "Help ITESM professor Davalos defend a computer from a virus.\n\n" +
            "Click on the image to play the game! (will open a new tab)"
        
        );

        let davatrixDotW = new ProjectInformation(
            "Davatrix: Dungeons of the Web",
            "images/davatrix-DotW.png",
            "https://www.newgrounds.com/portal/view/757760",
            "Help ITESM professor Davalos and Vinton Cerf to <br> save the internet from anonymous and avenge their students!<br><br>" +
            "Click on the image to play the game! (will open a new tab)"
        );

        let houseDefender = new ProjectInformation(
            "House Defender",
            "images/house-defender.png",
            "https://www.newgrounds.com/portal/view/735536",
            "Defend your house against an infinite horde of monsters! <br><br>" +
            "Click on the image to play the game! (will open a new tab)"
        );
        
        let binaryDefender = new ProjectInformation(
            "Binary Defender",
            "images/binary-defender.png",
            "https://www.newgrounds.com/portal/view/779536",
            "Hack the system of your laboratory to recover your investigation information before the hacker does it! <br><br>" +
            "Click on the image to play the game! (will open a new tab)"
        );

        let navidApp = new ProjectInformation(
            "NavidApp",
            "images/navid-app.png",
            "https://www.newgrounds.com/portal/view/741479",
            "Infinite runner created for a theatre play directed by a friend.<br><br>" +
            "Click on the image to play the game! (will open a new tab)"
        );

        let potionOfGod = new ProjectInformation(
            "Potion of God",
            "images/PoG.png",
            "https://www.newgrounds.com/portal/view/779556",
            "You forgot the combination to create the potion of god!\n\nFind it to save the life of your cat!!<br><br>" +
            "Click on the image to play the game! (will open a new tab)"
        );

        let mathnote = new ProjectInformation(
            "Mathnote",
            "images/mathnote.png",
            "https://jobegiar99.github.io/mathnote.github.io/",
            "Webapp developed for HackMTY2020.\n\nIt allows the user to compose music with math functions.\n\n" +
            "Click on the image to check it! (will open a new tab)"
        );

        let testCaseGenerator = new ProjectInformation(
            "Test Case Generator",
            "images/test-case-generator.png",
            "https://jobegiar99.github.io/tcg.github.io/",
            "Open Source Test Case Generator.\n\nCurrently it allows the user to generate random customizable arrays.\n\n" +
            "Click on the image to check it! (will open a new tab)"
        );

        this.projectIndex = 0;
        this.projectArrayInfo = [davatrixRoTFO, davatrixDotW, houseDefender, binaryDefender, navidApp, potionOfGod, mathnote, testCaseGenerator ];

    }

    loadNext(){
        if( this.projectIndex + 1 < this.projectArrayInfo.length)
            this.projectIndex += 1;

        else
            this.projectIndex = 0;

        return this.projectArrayInfo[this.projectIndex];
    }

    loadPrevious(){
        if( this.projectIndex - 1 > -1)
            this.projectIndex -= 1;
            
        else
            this.projectIndex = this.projectArrayInfo.length - 1;

        return this.projectArrayInfo[this.projectIndex];
    }
}