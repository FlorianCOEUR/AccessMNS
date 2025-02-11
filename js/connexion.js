/*Gestion du clique sur démarer ici*/

document.getElementById("starting").addEventListener("click", function(event) {
    event.preventDefault();
    document.querySelector(".welcome").style.display = "flex";
    document.querySelector(".welcome_content").style.display = "flex";
    document.querySelector(".welcome_content_mdp").style.display = "none";
});

document.getElementById("end_starting").addEventListener("click", function() {
    document.querySelector(".welcome").style.display = "none";
});

window.addEventListener("click", function(event) {
    if (event.target === document.querySelector(".welcome")) {
        document.querySelector(".welcome").style.display = "none";
    }
});

function testValue(){
    var input = document.getElementById("new_email").value;
    if(validerEmail(input)){
        document.querySelector(".welcome_content_mdp").style.display = "flex";
        document.querySelector(".welcome_content").style.display = "none";
        document.querySelector(".alert").style.display="none";
    }else{
        document.querySelector(".alert").style.display="block";
    }
}

function validerEmail(email) {
    let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}