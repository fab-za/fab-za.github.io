// show menu

const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

// remove menu for desktop?

const navLink = document.querySelectorAll('.nav_link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

// scroll sections active link + colour change

const sections = document.querySelectorAll('section[id]')

window.addEventListener('scroll', scrollActive)

function scrollActive(){
    const scrollY = window.pageYOffset
    var colours = {
        "home": "var(--red-color)",
        "experience": "var(--orange-color)",
        "portfolio": "var(--lgreen-color)",
        "contact": "var(--blue-color)"
      };

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.add('active')
            document.getElementById("l-header").style.background = colours[sectionId];
        } 
        else{
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.remove('active')
        }
        if ((window.innerHeight + scrollY) >= document.body.offsetHeight - 50){
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.remove('active')
            document.querySelector('.nav_menu a[href*= contact]').classList.add('active')
            document.getElementById("l-header").style.background = colours["contact"];
        }
    })
}

// scroll reveal

window.sr = ScrollReveal();

const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: false
})

sr.reveal('.home_about', {origin: 'right', reset: true})
sr.reveal('.home_bg', {origin: 'left', distance: '180px', delay: 200, reset: true})
sr.reveal('.img_sr', {origin: 'left', delay: 400, reset: true})
sr.reveal('.experience_img', {interval: 200})
sr.reveal('.portfolio_img', {interval: 200})
sr.reveal('.contact_container', {origin: 'bottom'})