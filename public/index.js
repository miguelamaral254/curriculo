function menuShow(){
    let menuMobile = document.querySelector('.nav-mobile-item')
    if(menuMobile.classList.contains('open')){
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src="../Imagens/close-menu-burguer.png"
    }else{
        menuMobile.classList.add('open')
    }
}