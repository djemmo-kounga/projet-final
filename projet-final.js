const maDiv = document.querySelector('.maDiv');
const projets = document.querySelectorAll('.projets');

projets.forEach(projet=>{
    projet.addEventListener('click', ()=>{
        const getTooltip = projet.getAttribute('toolTip');
       document.getElementById('dock').innerHTML = `${getTooltip}`
   })

})


const page = document.querySelector('.logo img');

const navItems = document.querySelectorAll('.lien');
const contenu = document.querySelector('.contenu');

// Masquer initialement la section de contenu
// contenu.style.display = "none";




navItems.forEach(item => {
    item.addEventListener('click', function() {
    
        // Récupérer le lien cliqué
        let projetLink = item.getAttribute('lien');
        document.querySelector('.my-profile').style.display = 'none';
        maDiv.style.display = 'block';
        document.querySelector('iframe').src = projetLink;

        // Afficher la section contenu
        // lien.style.display = "block";
    });
});


// Sélectionner le logo
const logo = document.querySelector('.logo img');
// const contenu = document.querySelector('.contenu');

// Ajouter un événement de clic sur le logo
logo.addEventListener('click', function() {
    window.location.reload();
    // contenu.style.display = "block"; // Afficher la section de contenu
    // maDiv.innerHTML = ""; // Réinitialiser le contenu de maDiv

    // // Optionnel : Vous pouvez ajouter un message par défaut ici
    // maDiv.innerHTML = "<h2>Bienvenue!</h2><p>Veuillez sélectionner un projet dans la navigation.</p>";
});



