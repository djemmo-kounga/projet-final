const contenantChoixOrdinateur = document.getElementById('choix-ordinateur');
const contenantChoixUtilisateur = document.getElementById('choix-utilisateur');
const contenantResultat = document.getElementById('resultat');

const choixPossibles = document.querySelectorAll('button');

let choixUtilisateur
let  resultat
let choixOrdinateur

// Evernement click sur les bouttons
choixPossibles.forEach(choixPossible => choixPossible.addEventListener('click',(e)=>{
    // recuperation de l'id du boutton clique
    choixUtilisateur = e.target.id;
    // on ajoute l'image correspondant au choix
    contenantChoixUtilisateur.innerHTML = `<img src="${choixUtilisateur}.png">`
    generer_choix_ordinateur()
    verification()
}))


// fonction pour generer le choix de l'ordinateur
function generer_choix_ordinateur(){
    random = Math.floor(Math.random() * 3) +1     // generer des nombres compris entre 1 et 3
        if(random ===1 ){
            choixOrdinateur = "pierre"
        }
        if(random === 2){
            choixOrdinateur = "papier"
        }
        if(random === 3){
            choixOrdinateur = "ciseaux"
        }
         // on ajoute l'image correspondant au choix
        contenantChoixOrdinateur.innerHTML = `<img src="${choixOrdinateur}.png">`
}

// fonction pour verifier si le joueur a gagne ou pas
function verification(){
    if(choixUtilisateur == choixOrdinateur){
       resultat = "Egalité!";
    }
    // les cas ou le joueur perd
    if(choixUtilisateur == "pierre" && choixOrdinateur == "papier"){
        resultat = "Perdu!";
    }
    if(choixUtilisateur == "papier" && choixOrdinateur == "ciseaux"){
        resultat = "Perdu!";
    }
    if(choixUtilisateur == "ciseaux" && choixOrdinateur == "pierre"){
        resultat = "Perdu!";
    }
    // les cas ou le joueur gagne
    if(choixUtilisateur == "pierre" && choixOrdinateur == "ciseaux"){
        resultat = "gagné!";
    }
    if(choixUtilisateur == "ciseaux" && choixOrdinateur == "papier"){
        resultat = "gagné!";
    }
    if(choixUtilisateur == "papier" && choixOrdinateur == "pierre"){
        resultat = "gagné!";
    }
    contenantResultat.innerHTML = resultat
}