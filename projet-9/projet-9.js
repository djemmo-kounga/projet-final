// let error = document.querySelector('.error_message');
// let longLink = document.querySelector('.long_link');
// let short = document.querySelector('.result');

// function shortLinkFunct(){
//     // verification input
//     if(!longLink.value == ""){

//         // vider l'error
//         error.innerHTML = "";

//         // connection API
//         let url = `https://tinyurl.com/api-create.php?url=${encodeURIComponent(longLink.value)}`;// lien API en description
//         fetch(url)
//         .then(response => response.text())
//         .then((data) => {
//             if(data == "error"){
//                 short.innerHTML = "lien invalide";
//             }else{
//                 short.innerHTML = data;
//             }
//         });

//         // afficher le resultat
//         short.style.display = "block";

//         if(short.innerHTML.length == 0){
//             short.innerHTML = "lien non valide !" 
//         }
//     }else{
//         // error
//         error.innerHTML = "Veuillez remplir le champ !";
//         short.style.display = "none";
//     }
// }



let error = document.querySelector(".error_message");
let longLink = document.querySelector(".long_link");
let short = document.querySelector(".result");

const apiKey = "6Xy38YtXozm69PFomXXaK5QQW0BDmcZofDUxAMPen104hOvnIlH0eDRu8diK";
const url = "https://api.tinyurl.com/create";

function shortLinkFunct() {
  //verification input

  if (!(longLink.value == "")) {
    //vider l'erreur
    error.innerHTML = "";
    //connection API
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        url: longLink.value,
        domain: "tinyurl.com",
        description: "string",
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data == "Error") {
          short.innerHTML = "Lien invalide!";
        } else {
          short.innerHTML = data.data.tiny_url;
        }
      });

    //afficher le resultat
    short.style.display = "block";
  } else {
    //error
    error.innerHTML = "Veuillez remplir le champ !";
    short.style.display = "none";
  }
}