
/* ==== ABRE E FECHA O MENU AO CLICAR NO ICONE*/
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for(const element of toggle) {
    element.addEventListener('click', function() {
        nav.classList.toggle('show')
    })
}
/* AO CLICAR EM UM ITEM DO MENU, ESCONDER MENU */
const links = document.querySelectorAll('nav ul li a')

for(const link of links){
    link.addEventListener('click', function(){
        nav.classList.remove('show')
    })
}
// SOMBRA NO MENU QUANDO ACIONAR SCROLL//
const header = document.querySelector('header')
const navHeight = header.offsetheight
function changeHeaderWhenScrool() { 

    if (window.scroolY >= navHeight) {
        header.classList.add('scroll')
    } else {
        header.classList.remove('scroll')
    }
}

//====== DEPOIMENTOS CARROSSEL SLIDER ======//
var swiper = new Swiper(".swiper-container", {
    effect: "flip",
    grabCursor: true,
    pagination: {
    el: ".swiper-pagination",
    },
    navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    },
});
//SCROLL REVEAL//
const scrollReveal = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700,
    reset: true
})
scrollReveal.reveal(
    `#home .image, #home .text,
    #about .image, #about .text,
    #services header, #services .card,
    #testimonials header, #testimonials .testimonials
    #contact .text, #contact .links
    footer .brand, footer .social
    `,
    { interval: 100 }
)

/* BOTÃO VOLTAR PARA O TOPO */

const backToTopButton = document.querySelector('.back-to-top')
function backToTop() {
    if (window.scrollY >= 560) {
        backToTopButton.classList.add('show')
    }
    else {
        backToTopButton.classList.remove('show')
    }
}

/* MENU ATIVO DA SECÇÃO ATIVA */
const sections = document.querySelectorAll('main section[id]')
function activateMenuAtCurrentSection() {
    const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4
    for( const section of sections) {
        const sectionTop = section.ofsetTop
        const sectionHeight = section.ofsetHeight
        const sectionId = section.getAttribute('id')
        const checkpointStart = checkpoint>= sectionTop
        const checkpointEnd = checkpoint<= sectionTop + sectionHeight
        if(checkpointStart && checkpointEnd) {
        document
            .querySelector('nav ul li a[href*=' + sectionId +']')
            .classList.add('active')
        } else {
        document
            .querySelector('nav ul li a[href*=' + sectionId +']')
            .classList.remove('active')
        }
    }

}


/* WHEN SCROOL */
window.addEventListener('scrool', function() {
    changeHeaderWhenScrool()
    backToTop ()    
})



