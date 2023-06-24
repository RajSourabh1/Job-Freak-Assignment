let home = document.querySelector(".home");
let contact = document.querySelector(".contact-page");
let information = document.querySelector(".information");
let guide = document.querySelector(".guide");
let mybtn = document.getElementById("submit");

function goHome(){
    home.style.display="block";
    contact.style.display="none";
    information.style.display="none";
    guide.style.display="none";
}

function goContact(){
    home.style.display="none";
    contact.style.display="block";
    information.style.display="none";
    guide.style.display="none";
}

function goInformation(){
    home.style.display="none";
    contact.style.display="none";
    information.style.display="block";
    guide.style.display="none";
}

function goGuide(){
    home.style.display="none";
    contact.style.display="none";
    information.style.display="none";
    guide.style.display="block";
}

mybtn.addEventListener("click",(event)=>{
    event.preventDefault();
    document.getElementById("form1").reset();
})