const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu-container');
const closeMenu = document.getElementById('close-menu');
const productsMenu = document.getElementById('product-dropdown');
const backToMenu = document.getElementById('back-to-menu');
const mobileProductNavLinks = document.getElementById('mobile-product-nav-links');

hamburger.addEventListener('click', function() {
    mobileMenu.classList.add('show-menu');
    mobileMenu.classList.remove('close-menu');
});

closeMenu.addEventListener('click', function() {
    mobileMenu.classList.add('close-menu');
    mobileMenu.classList.remove('show-menu');
});

productsMenu.addEventListener('click', function() {
    backToMenu.style.display = 'block';
    productsMenu.style.display = 'none';
    mobileProductNavLinks.style.display = 'block';
});

backToMenu.addEventListener('click', function() {
    backToMenu.style.display = 'none';
    productsMenu.style.display = 'block';
    mobileProductNavLinks.style.display = 'none';
});