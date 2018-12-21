document.addEventListener('DOMContentLoaded', function(){
    let navbar = document.getElementById('navbar');
    function navChange(){
        if(window.scrollY > 25){
            navbar.style.background = 'white';
            navbar.style.color = "black";
        }
        if (window.scrollY < 25) {
            navbar.style.background = 'transparent';
            navbar.style.color = "white";
        }
    }





    document.addEventListener('scroll', navChange);
    // ScrollReveal().reveal('.about-info', {
    //     delay: 400,
    //     distance: '600px',
    //     origin: 'left'

    // });
    // ScrollReveal().reveal('.web-page', {
    //     delay: 400,
    //     distance: '600px',
    //     origin: 'right'

    // });




})