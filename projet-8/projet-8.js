var copyBtn = document.getElementById('copy');


function getPassword(){
   var chars="0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ"
   var passwordLength =16;
   var password = "";

   //generer le mot de passe
    for(let i = 0; i < passwordLength ; i++){
        let randomNumber = Math.floor(Math.random() * chars.length)

        password += chars.substring(randomNumber , randomNumber + 1)

        // afficher le mot de passe
        document.getElementById('password').value = password;

        // changer le style du Bouton copier
        copyBtn.style.background= "#6c757d"
        copyBtn.style.color = "#fff"
    }
}
// copier le mot de passe
function copyMdp(){
    var inputPassword = document.getElementById('password');

    // verifier la longueur du mot de passe
    if(inputPassword.value.length == 16){
        // copier le mot de passe
        inputPassword.select();
        document.execCommand("copy");
        

        // changer le style de bouton
        copyBtn.style.background = "transparent"
        copyBtn.style.color = "#000"

        // afficher une alert
        alert('mot de passe  copié !')
    }else{
        alert('veuillez générer un mot de passe')
    }
}