// navbar fixed
window.onscroll = function() {
    const header = document.getElementById('navbar');
    const fixedNav = header.offsetTop;

    if (window.scrollY > fixedNav) {
      header.classList.add("navbar-fixed");
    } else {
      header.classList.remove("navbar-fixed");
    }
}


// hamburger
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
});