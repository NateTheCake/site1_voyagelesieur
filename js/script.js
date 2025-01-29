const btPlus = document.querySelector('.js-plus');

const conteneurTransport = document.querySelector('.conteneur-transport');

btPlus.addEventListener('click', fouvreferme);


function fouvreferme(){
    /*console.log('coucou')*/
    conteneurTransport.classList.toggle('conteneur-transports-invisible');
};

