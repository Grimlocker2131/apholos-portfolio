//intersection observer

const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {

        if(entry.isIntersecting){
        let currentSection = entry.target.getAttribute('id');
        navLinks.forEach(link => {
            link.classList.remove('active');
            if(link.getAttribute('href') === '#' + currentSection) {
                link.classList.add('active');
            }
        });
    }

    });
},
{
    threshold: 0.5
});

sections.forEach(section => {
    observer.observe(section);
})

// mobile menu 


const navLinksMobile = document.querySelectorAll('.navbar-nav .nav-link');
const menu = document.querySelector('.navbar-collapse');

navLinksMobile.forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('show');
    });
});

// scroll detection 

const navbar = document.querySelector('.apholos-nav');
window.addEventListener('scroll', () => {
    if(window.scrollY > 50){
        navbar.classList.add('scrolled');
    }else{
        navbar.classList.remove('scrolled');
    }
});

// scroll animation 

const revealElements = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, {
    threshold: 0.15
});

revealElements.forEach(element => {
    revealObserver.observe(element);
})

// pre loader

window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');

    setTimeout(() => {
        preloader.classList.add('hide');
    }, 2000);
});