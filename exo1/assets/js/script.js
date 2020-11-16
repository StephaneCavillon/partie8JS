// Déclaration des variables
let retour = document.getElementById('retour');

//création du listener au scroll sur la fenêtre 
window.addEventListener('scroll', function(){
    // apparition du bouton une fois le premier écran dépassé

    if(scrollY > 416 ) {
        retour.classList.replace('invisible','visible');
    } else {
        retour.classList.replace('visible','invisible');
    }
});

//Pour remonter de facon smooth par contre il faut rajouter des lignes pour modifier la vitesse du scroll
retour.addEventListener('click', function (){
    window.scrollTo({
        top:0,
        left: 0, 
        behavior: 'smooth'
    });
});