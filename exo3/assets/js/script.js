//récupération des p
let p = document.querySelectorAll('p');

// reste à creer les listeners avec le forEach
//d'abord poser la class 'invisible' sur tout les <p> à la fin du chargement de la page
window.addEventListener('load', function (){
    p.forEach(item => {item.classList.add('invisible')
    });
});


//ensuite remplacer par 'visible'
p.forEach(item => {
    window.addEventListener('scroll', function (){
        if(scrollY > (item.offsetTop - 100)){
            item.classList.replace('invisible', 'visible');
        } else {
            console.log('invisible !');
            item.classList.replace('visible', 'invisible');
        };
    });
});

