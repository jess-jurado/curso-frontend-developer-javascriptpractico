
// Constantes

const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const logoMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const logoCarrito = document.querySelector('.navbar-shopping-cart')
const productDetail = document.querySelector('.product-detail');


// Eventos


menuEmail.addEventListener('click', toggleDesktopMenu);
logoMenu.addEventListener('click', toggleMobileMenu);
logoCarrito.addEventListener('click', toggleCartMenu);


// Funciones


function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    mobileMenu.classList.toggle('inactive');
    console.log("click");
}
 
function toggleCartMenu() {
    productDetail.classList.toggle('inactive');
    console.log("clock");
}