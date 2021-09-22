/*==================== DISPLAY MENU ====================*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
// if(navToggle){
//     navToggle.addEventListener('click', () =>{
//         navMenu.classList.add('show-menu')
//     })
// }

navToggle.onclick = () => {
    navMenu.classList.add('show-menu')
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
// if(navClose){a
//     navClose.addEventListener('click', () =>{
//         navMenu.classList.remove('show-menu')
//     })
// }

navClose.onclick = () => {
    navMenu.classList.remove('show-menu')
}

/*==================== REMOVE MENU PHONE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))



/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader() {
    const header = document.getElementById('header')
    // When the scroll is greater than 100 viewport height, add the scroll-header class to the header tag
    if (this.scrollY >= 100) {
        header.classList.add('scroll-header');
    } else {
        header.classList.remove('scroll-header')
    }
}

/*==================== DISPLAY SKILL-ROADMAP ====================*/

window.addEventListener('scroll', scrollHeader)

const skillsContent = document.getElementsByClassName('skill_content');
const skillsHeader = document.querySelectorAll('.skill_header')

function toggleSkills() {
    let itemClass = this.parentNode.className;
    if (itemClass === 'skill_content skills_close') {
        this.parentNode.className = 'skill_content skills_open'
    }
    if (itemClass === 'skill_content skills_open') {
        this.parentNode.className = 'skill_content skills_close'
    }
}

skillsHeader.forEach((el) => {
    el.addEventListener('click', toggleSkills)
})


/*==================== SCROLLREVEAL ====================*/

const sr = ScrollReveal({
    distance: '30px',
    duration: 1800,
    reset: true,
});

// sr.reveal(`.skill_container`, {
//     origin: 'top',
//     interval: 200,
// })


sr.reveal(`.main-page-intro-content, .main-page-second-intro-picture, .main-page-second-intro-content, .footer-top, .footer-bottom`, {
    origin: 'left',
    interval: 200,
})

function changeToFullstack() {
    window.location.replace('./beforelogin/fullstack.html')
}

function changeToFrontend() {
    window.location.replace('./beforelogin/frontend.html')
}

function changeToBackend() {
    window.location.replace('./beforelogin/backend.html')
}

function changeToDS() {
    window.location.replace('./beforelogin/dataanalyst.html')
}