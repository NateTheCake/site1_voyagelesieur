const btPlus = document.querySelector('.js-plus');

const conteneurTransport = document.querySelector('.conteneur-transports');

btPlus.addEventListener('click', fouvreferme);


function fouvreferme(){
    conteneurTransport.classList.toggle('conteneur-transports-invisible');
};

