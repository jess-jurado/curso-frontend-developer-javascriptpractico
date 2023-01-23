
// Constantes

const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const logoMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const logoCarrito = document.querySelector('.navbar-shopping-cart')
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const cardsContainer = document.querySelector('.cards-container');
const productDetail = document.querySelector( '#productDetail' );


// Eventos


menuEmail.addEventListener('click', toggleDesktopMenu);
logoMenu.addEventListener('click', toggleMobileMenu);
logoCarrito.addEventListener('click', toggleCartMenu);


// Funciones


function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive');
    const isshoppingCartContainerOpen = shoppingCartContainer.classList.contains('inactive');
    if ( isshoppingCartContainerOpen) {
        // esta abierto
    } else {
        shoppingCartContainer.classList.add('inactive');
    }
    
}

function toggleMobileMenu() {
    mobileMenu.classList.toggle('inactive');
    const isshoppingCartContainerOpen = shoppingCartContainer.classList.contains('inactive');
    if ( isshoppingCartContainerOpen) {
        // esta abierto
    } else {
        shoppingCartContainer.classList.add('inactive');
    }
}

 
function toggleCartMenu() {
    shoppingCartContainer.classList.toggle('inactive');
    const isMobileMenuOpen = mobileMenu.classList.contains('inactive');
    const isDesktopMenuOpen = desktopMenu.classList.contains('inactive');

    if ( isDesktopMenuOpen) {
        // esta abierto
    } else {
        desktopMenu.classList.add('inactive');
    }

    
    if ( isMobileMenuOpen) {
        // esta abierto
    } else {
        mobileMenu.classList.add('inactive');
    }
}


const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    description: "With its practical position, this bike also fulfills a decorative function, add your hall or workspace",
});

productList.push({
    name: 'Crashelmet',
    price: 49,
    image: 'https://images.pexels.com/photos/1323201/pexels-photo-1323201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1://media.istockphoto.com/id/95049336/es/foto/casco.jpg?s=1024x1024&w=is&k=20&c=0-kXpSUMU6g5sJ2RF1eQJRUFeR8bvlIsF_VmADdPS94=a-de-grava-ciclocross-13799112/',
    description: "Its a save crashelmet for your little head, made with stelar iron and more",
});

productList.push({
    name: 'wheels',
    price: 19,
    image: 'https://media.istockphoto.com/id/147456816/es/foto/rueda-bicicleta-vintage-aislado-sobre-blanco.jpg?b=1&s=612x612&w=0&k=20&c=VjcnDJmmNkxh8uMGJSL_-0cJT6WlKBSU2g_VGJKqFvc=',
    description: "Its just a wheel, made from dead T-Rex is the highest quality wheels you can see on the internet"
});


function RenderProduct(arr) {
    for ( product of arr ) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        productImg.addEventListener('click', DescriptionOfProduct(productList) );
        

    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText= '$' + product.price;
        
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
        const productInfoFigure = document.createElement('figure');
    
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
    
    
        productInfoFigure.appendChild(productImgCart);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
         
    
        cardsContainer.appendChild(productCard);
    
    }
}


//Product Detail : chosen product window

function turnOf() {
    productDetail.classList.add('inactive');
    console.log("cerrando caja");
}


function DescriptionOfProduct (arr) {
    for ( product of arr ) {

    const productDetailClose = document.createElement('div');
    productDetailClose.classList.add('product-detail-close');

    const closeIcon = document.createElement('img');
    closeIcon.setAttribute('src', './icons/icon_close.png');
    closeIcon.addEventListener('click', turnOf);

    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.image);

    const productInfoShow = document.createElement('div');
    productInfoShow.classList.add('product-info');

    const productPrice = document.createElement('p');
    productPrice.innerText= '$' + product.price;

    const productName = document.createElement('p');
    productName.innerText = product.name;

    const productDescription = document.createElement('p');
    productDescription.innerText = product.description;

    const addToCartButton = document.createElement('button');
    addToCartButton.classList.add('primary-button');
    addToCartButton.classList.add('add-to-cart-button');
    addToCartButton.innerText = "add to cart";
    

    const addToCartImage = document.createElement('img');
    addToCartImage.setAttribute( 'src', './icons/bt_add_to_cart.svg');




    addToCartButton.appendChild(addToCartImage);

    
    productInfoShow.appendChild(productPrice);
    productInfoShow.appendChild(productName);
    productInfoShow.appendChild(productDescription);
    productInfoShow.appendChild(addToCartButton);

    productDetailClose.appendChild(closeIcon);

    productDetail.appendChild(productDetailClose);
    productDetail.appendChild(productImg);
    productDetail.appendChild(productInfoShow);

    productDetail.classList.remove('inactive');

    }
    console.log("escuchando pic");
}



RenderProduct(productList);
DescriptionOfProduct(productList);