window.alert('Bem vindo!');

const btnMobile = document.getElementById('btn-mobile');

function toogleMenu(event){
    if (event.type === 'touchstart') event.preventDefault();
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
    const active = nav.classList.contains('active');
    event.currentTarget.setAttribute('aria-expanded' , active);
    if (active){
        event.currentTarget.setAttribute('aria-label' , 'Fechar Menu'); 
    } else {
        event.currentTarget.setAttribute('aria-label' , 'Abrir Menu');    
    }
}

btnMobile.addEventListener('click', toogleMenu);
btnMobile.addEventListener('touchstart', toogleMenu);



/*   banner   */



let fotos = ["aqui.jpeg", "aqui2.jpeg", "aqui3.jpeg"];

function Trocarfoto(slide){
    document.querySelector(".imagem-banner").src = "imagens/" + fotos[slide];
}

let fotoAtual = 0;
Trocarfoto(fotoAtual);

setInterval(function(){
    fotoAtual++;
    if(fotoAtual > 2){
        fotoAtual = 0;
    }

    Trocarfoto(fotoAtual);
}, 3000);
