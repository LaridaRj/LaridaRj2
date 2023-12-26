let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
    
    /* sticky navbar */
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);
};

ScrollReveal({
    // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 150
});

ScrollReveal().reveal('.home-content, .heading, .header-container-drrm, .header-container-welcoming, .header-container-intrams, .header-container-culmination', { origin: 'top'});
ScrollReveal().reveal('.home-img, .home-page-03-container', { origin: 'bottom'});

ScrollReveal().reveal('.home-content h1', { origin: 'left'});
ScrollReveal().reveal('.home-content p, .home-page-container', { origin: 'right'});

const typed = new Typed('.multiple-text', {
    strings: ['an IT student', 'a ML gamer', 'a game Creator'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

let flexlist = document.querySelector('.flex-slider .flexlist');
let flexitem = document.querySelectorAll('.flex-slider .flexlist .flexitem');
let prev = document.getElementById('prev');
let next = document.getElementById('next');

let active = 0;
let lengthItems = flexitem.length - 1;

next.onclick = function(){

    if(active + 1 > lengthItems){
        active = 0;
    } else {
        active += 1;
    }

    reloadSlider();
};

prev.onclick = function(){

    if(active - 1 < 0){
        active = lengthItems;
    } else {
        active -= 1;
    }

    reloadSlider();
};

let refreshSlider = setInterval(() => { next.click() }, 4000);

function reloadSlider(){
    let checkleft = flexitem[active].offsetLeft;
    flexlist.style.left = -checkleft + 'px';
};


// Second Slider
let flexlisttwo = document.querySelector('.flex-slider-two .flexlisttwo');
let flexitemtwo = document.querySelectorAll('.flex-slider-two .flexlisttwo .flexitemtwo');
let prevTwo = document.getElementById('prev-two'); // Change variable name
let nextTwo = document.getElementById('next-two'); // Change variable name

let activeTwo = 0;
let lengthItemsTwo = flexitemtwo.length - 1;

nextTwo.onclick = function(){

    if(activeTwo + 1 > lengthItemsTwo){
        activeTwo = 0;
    } else {
        activeTwo += 1;
    }

    reloadSliderTwo();
};

prevTwo.onclick = function(){

    if(activeTwo - 1 < 0){
        activeTwo = lengthItemsTwo;
    } else {
        activeTwo -= 1;
    }

    reloadSliderTwo();
};

let refreshSliderTwo = setInterval(() => { nextTwo.click() }, 4000);

function reloadSliderTwo(){
    let checkleft = flexitemtwo[activeTwo].offsetLeft;
    flexlisttwo.style.left = -checkleft + 'px';
};
