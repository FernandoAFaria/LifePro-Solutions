document.addEventListener('DOMContentLoaded', function(){

    let navbar = document.getElementById('navbar');
    let navlinks = document.getElementsByClassName('hover');


    
    ScrollReveal().reveal('.about-info', {
        delay: 600,
        distance: '400px',
        origin: 'left'

    });
    ScrollReveal().reveal('.web-info', {
        delay: 600,
        distance: '400px',
        origin: 'right'

    });

    ScrollReveal().reveal(".consulting-info", {
      delay: 500,
      distance: "600px",
      origin: "bottom"
    });


})