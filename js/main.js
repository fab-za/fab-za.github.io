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
// filter
filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("portfolio_img");
  if (c == "all") c = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

// Show filtered elements
function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Hide elements that are not selected
function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current control button (highlight it)
var btnContainer = document.getElementById("filter_container");
var btns = btnContainer.getElementsByClassName("filter");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var now = document.getElementsByClassName("filter_active");
    now[0].className = now[0].className.replace(" filter_active", "");
    this.className += " filter_active";
  });
}

// collapsibles
var coll = document.getElementsByClassName("collapsible");
var collpos;
var posrel;
var i;
var unexpand = true;
var wh = window.innerHeight;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    collpos = this.getBoundingClientRect();
    posrel = wh - collpos.bottom;
    this.classList.toggle("c_active");
    var content = this.nextElementSibling;
    var height = content.scrollHeight;
    // document.getElementById("help").innerHTML = collpos.bottom;

    if (content.style.maxHeight){
      content.style.maxHeight = null;
      unexpand = false;
    } else {
      content.style.maxHeight = height + "px";
      unexpand = true;
    } 
    if (posrel < 100){
      if (unexpand) {
        setTimeout(function(){ window.scrollBy(0, height+10); }, 65);
      } 
      // else{
      //   window.scrollBy(0, -height);
      // }
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
sr.reveal('.experience_container', {interval: 200})
sr.reveal('.portfolio_container',)
sr.reveal('.contact_container', {origin: 'bottom'})