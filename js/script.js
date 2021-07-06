let baseReason = "";
let popupCheck = true;

window.addEventListener("load", function () {
    cardSwap("top");
    setTimeout(() => {
        const cycle = document.getElementById("introCycle");
        cycle.classList.add("intro__cycle-end")
        const logo = document.getElementById("introLogo");
        logo.style.display = "block";
        setTimeout(() => {
            const box = document.getElementById("introBox")
            box.classList.add("intro__box-move");
            setTimeout(() => {
                const intro = document.getElementById("intro")
                const overlay = document.getElementById("navOverlay")
                intro.classList.add("intro-clean")
                overlay.style.display = "block";

                setInterval(reasonsRoulette, 3000);
            }, 1000);
        }, 2000);
    }, 2000);

});

let langPl=true;

function langChange(lang){
    let translatePl = document.getElementsByClassName("pl");
    let translateEn = document.getElementsByClassName("en");
    setTimeout(()=>{
    for (let i = 0; i<translatePl.length; i++){
    if(lang==="pl"){
        translatePl[i].style.display = "block";
        translateEn[i].style.display = "none";
        langPl = true;
    } else {
        translatePl[i].style.display = "none";
        translateEn[i].style.display = "block";
        langPl = false;
    }}
}, 200)
}

function reasonsRoulette() {

    let reasonArr;

    if(langPl){
        reasonArr = ["kreatywność", "motywacja", "samodzielność", "wielozadaniowość", "praca w zespole", "ciekawość", "uczciwość", "komunikatywność", "odporność na stres", "skrupulantość", "pewność siebie", "ugodowość", "szczerość", "wiarygodność", "pracowitość",];
    }else{
        reasonArr = ["creativity", "motivation", "self-reliance", "multitasking", "team-player", "curiosity", "trustworthy", "communicative", "stress-resistant", "scrupulosity", "confidence", "amicability", "honesty", "credibility", "diligence",];
    }
    const reasons = document.getElementById("headerReasons");
    let randomReason = reasonArr[Math.floor(Math.random() * reasonArr.length)];
    do {
        randomReason = reasonArr[Math.floor(Math.random() * reasonArr.length)];
    } while (baseReason === randomReason);
    baseReason = randomReason;
    reasons.innerHTML = randomReason;
    setTimeout(() => {
        reasons.classList.add("header__reasons-bigger");
    }, 1000);
    setTimeout(() => {
        reasons.classList.remove("header__reasons-bigger");
        reasons.style.top = Math.floor(Math.random() * 10) * 3 + 20 + "vh"
        reasons.style.left = Math.floor(Math.random() * 4) * 3 + 9 + "vw"
    }, 3000);

}

let navTop = true;
let navAbout = false;
let navPortfolio = false;
let navContact = false;



function popupMenu() {
    const menu = document.getElementById("navMenu");
    const box = document.getElementById("navBox");
    const vLine = document.getElementById("navVLine");
    const hLine = document.getElementById("navHLine");
    const cv = document.getElementById("navCv")
    let stLink;
    let ndLink;
    let rdLink;
    let thLink;
    let temp;


    function linkSwaper(hide, showOne, showTwo, showThree, showFour){
        temp = document.getElementById(hide);
        stLink = document.getElementById(showOne);
        ndLink = document.getElementById(showTwo);
        rdLink = document.getElementById(showThree);
        thLink = document.getElementById(showFour)
        temp.classList.add("nav__item-hidden");
        stLink.classList.remove("nav__item-hidden");
        ndLink.classList.remove("nav__item-hidden");
        rdLink.classList.remove("nav__item-hidden");
        thLink.classList.remove("nav__item-hidden");
    }


    if (navTop) {
        linkSwaper("navTop", "navAbout", "navPortfolio", "navContact", "navCv");
    }

    if (navAbout) {
        linkSwaper("navAbout", "navTop", "navPortfolio", "navContact", "navCv");
    }


    if (navPortfolio) {
        linkSwaper("navPortfolio","navTop", "navAbout", "navContact", "navCv");
    }

    if (navContact) {
        linkSwaper("navContact","navTop", "navAbout", "navPortfolio", "navCv");
    }


    if (!popupCheck) {
        menu.classList.add("nav__menu-open");
        box.classList.add("nav__box-close");
        vLine.classList.add("nav__logo-vline-close");
        hLine.classList.add("nav__logo-hline-close");
        stLink.style.animation = "showItem 2.5s forwards";
        ndLink.style.animation = "showItem 3s forwards";
        rdLink.style.animation = "showItem 3.5s forwards";
        thLink.style.animation = "showItem 4s forwards";
        popupCheck = true;
    } else {
        menu.classList.remove("nav__menu-open");
        box.classList.remove("nav__box-close");
        vLine.classList.remove("nav__logo-vline-close");
        hLine.classList.remove("nav__logo-hline-close");
        stLink.style.animation = "";
        ndLink.style.animation = "";
        rdLink.style.animation = "";
        thLink.style.animation = "";
        popupCheck = false;
    }
}

function cardSwap(data) {
    const top = document.getElementById("header");
    const about = document.getElementById("about");
    const portfolio = document.getElementById("portfolio");
    const contact = document.getElementById("contact");



    function btnChecker(btnTop, btnAbout, btnPortfolio, btnContact){
        navTop = btnTop;
        navAbout = btnAbout;
        navPortfolio = btnPortfolio;
        navContact = btnContact;
        popupMenu()
    }

    function sectionSpawner(topSpawn, aboutSpawn, portfolioSpawn, contactSpawn){
        setTimeout(()=>{
            top.style.display = topSpawn;
            about.style.display = aboutSpawn;
            portfolio.style.display = portfolioSpawn;
            contact.style.display = contactSpawn;
        }, 500);
    }

    if (data === "top") {
        btnChecker(true, false, false, false);
        sectionSpawner("block", "none", "none", "none");
    }


    if (data === "about") {
        btnChecker(false, true, false, false);
        sectionSpawner("none", "block", "none", "none");

    }

    if (data === "portfolio") {
        btnChecker(false, false, true, false);
        sectionSpawner("none", "none", "block", "none");


    }

    if (data === "contact") {
        btnChecker(false, false, false, true);
        sectionSpawner("none", "none", "none","block");


    }

    function positionChecker(stateOne, stateTwo, stateThree, stateFour){
        sectionDisplay(stateOne, "header__hero", "header__background", "header__reasons");
        sectionDisplay(stateTwo, "about__header", "about__info", "");
        sectionDisplay(stateThree, "portfolio__header", "portfolio__btnbox", "portfolio__flex-box");
        sectionDisplay(stateFour, "contact__header", "contact__form", "contact__info");

    }

    if (navTop) {
        positionChecker(false, false, false, false);
    }

    if (navAbout) {
        positionChecker(true, true, false, false);
    }

    if (navPortfolio) {
        positionChecker(true, false, true, false);
    }

    if (navContact) {
        positionChecker(true, false, false, true);
    }




    function sectionDisplay(type, posOne, posTwo, posThree) {
        let place;
        function addMovement(pos){
            if (pos !== "") {
                place = document.getElementsByClassName(pos);
                place[0].classList.add(pos + "-move");
            }
        }

        function removeMovement(pos){
            if (pos !== "") {
                place = document.getElementsByClassName(pos);
                place[0].classList.remove(pos + "-move");
            }
        }

        if (type) {
            addMovement(posOne);
            addMovement(posTwo);
            addMovement(posThree);
        } else {
            removeMovement(posOne);
            removeMovement(posTwo);
            removeMovement(posThree);
        }
    }
}




let typeA = true;
let typeB = true;
let typeC = true;



function pageDisplay(type) {
    const itemA = document.getElementsByClassName("portfolio__comm");
    const itemB = document.getElementsByClassName("portfolio__copy");
    const itemC = document.getElementsByClassName("portfolio__idea");
    const btnComm = document.getElementById("btnComm");
    const btnCopy = document.getElementById("btnCopy");
    const btnIdea = document.getElementById("btnIdea");

    if (type === "all") {

        typeA = true;
        typeB = true;
        typeC = true;

    } else if (type === "comm") {
        if (typeA && typeB && typeC) {
            typeA = true;
            typeB = false;
            typeC = false;
        } else if (!typeB && !typeC) {
            typeA = true;
        } else {
            typeA = !typeA;
        }

    } else if (type === "copy") {
        if (typeA && typeB && typeC) {
            typeA = false;
            typeB = true;
            typeC = false;
        } else if (!typeA && !typeC) {
            typeB = true;
        } else {
            typeB = !typeB;

        }

    } else {
        if (typeA && typeB && typeC) {
            typeA = false;
            typeB = false;
            typeC = true;

        } else if (!typeA && !typeB) {
            typeC = true;
        } else {
            typeC = !typeC;
        }
    }


    styleChange(typeA, itemA, "portfolio__comm");
    styleChange(typeB, itemB, "portfolio__copy");
    styleChange(typeC, itemC, "portfolio__idea");


    function styleChange(type, item, v) {

        if (!type) {
            for (let i = 0; i < item.length; i++) {
                item[i].classList.add(v + "-off");
            }
        } else {
            for (let i = 0; i < item.length; i++) {
                item[i].classList.remove(v + "-off");


            }
        }

        function portfolioRotate(type, btn){
            if (!type) {
                btn.classList.add("portfolio__btn-off")
            } else {
                btn.classList.remove("portfolio__btn-off")
            }
        }

        portfolioRotate(typeA, btnComm);
        portfolioRotate(typeB, btnCopy);
        portfolioRotate(typeC, btnIdea);

    }

}









