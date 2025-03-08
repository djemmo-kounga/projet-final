var perso = document.querySelector(".perso");
var obstacles = document.querySelector(".obstacles");

// fontion pour faire sautert la personne
function sauter(){
   if(perso.classList != "animation"){
        perso.classList.add('animation');
   }
   setTimeout(function(){
        perso.classList.remove('animation');
   },500)
}

// verifier si l'obstacle touche le personnage
var verification = setInterval(function(){
    var persoTop = parseInt(window.getComputedStyle(perso).getPropertyValue("top"));
    var obstaclesleft = parseInt(window.getComputedStyle(obstacles).getPropertyValue("left"));

    if(obstaclesleft<20 && obstaclesleft>0 && persoTop>= 130){
        obstacles.style.animation = "none";
        alert('vous avez perdu')
    }
},1)