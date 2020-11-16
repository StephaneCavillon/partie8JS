//récupération des p
let p = document.querySelectorAll('p');

// reste à creer les listeners avec le forEach
//d'abord poser la class 'invisible' sur tout les <p> à la fin du chargement de la page
window.addEventListener('load', function (){
    console.log('load !');
    p.forEach(item => {item.classList.add('invisible')
    });
});


//ensuite remplacer par 'visible'
