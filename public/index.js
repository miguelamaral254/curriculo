function menuShow(){
    let menuMobile = document.querySelector('.nav-mobile-item')
    if(menuMobile.classList.contains('open')){
        menuMobile.classList.remove('open');
    }else{
        menuMobile.classList.add('open')
    }
}