var addToDoButton = document.getElementById('addToDo');
var toDoContainer = document.getElementById('toDoContainer');
var inputField = document.getElementById('inputField');

addToDoButton.onclick = function(){
    // verification si input n'est pas vide
    if(inputField.value != ""){
        // si l'input n'est pas Vide , creer un paragraphe
        var paragraph = document.createElement('p')
    }
    // valoriser ce paragraphe avec le contenu de input
    paragraph.innerText = inputField.value;

    // styliser le paragraphe
    paragraph.classList.add('paragraphe_style');

    // inserer le paragraphe dans l'element toDoContainer
    toDoContainer.appendChild(paragraph);

    // vider l'input quant le paragraphe est ajouter
    inputField.value = "";

    // barrer le paragraphe lorsqu'on click dessus
    paragraph.addEventListener('click', function(){
        paragraph.classList.add('paragraph_click');
    })

    // supprimer la tache lorsqu'on double click
    paragraph.addEventListener('dblclick', function(){
        toDoContainer.removeChild(paragraph);
    })
}