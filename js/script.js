const btPlus = document.querySelector('.plus');

const colTransport = document.querySelector('.col-transports');

btPlus.addEventListener('click', fouvreferme);


function fouvreferme(){
    colTransport.classList.toggle('col-transports-invisible');
};

