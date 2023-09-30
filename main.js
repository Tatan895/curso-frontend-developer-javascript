const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");

const menuHamIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");

const menuCarrito = document.querySelector(".navbar-shopping-cart");
const productDetailCloseIcon = document.querySelector(".product-detail-close");

const shoppingCartContainer = document.querySelector("#shoppingCartContainer");
const productDetailContainer = document.querySelector("#productDetail");


const cardsContainar = document.querySelector(".cards-container");/*8 */


menuEmail.addEventListener("click", toggleDesktopMenu);
menuHamIcon.addEventListener("click", toggleMobileMenu);
menuCarrito.addEventListener("click", toggleCarritoAside);
productDetailCloseIcon.addEventListener("click", closeProductDetailAside);

function toggleDesktopMenu() {
    const isAsideClosed = shoppingCartContainer.classList.contains("inactive");

    if (!isAsideClosed) {
        shoppingCartContainer.classList.add("inactive");
    }

    desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu(){
    const isAsideClosed = shoppingCartContainer.classList.contains("inactive");

    if (!isAsideClosed) {
        shoppingCartContainer.classList.add("inactive");
    }

    closeProductDetailAside(); /*esto seria como un else, como que si cualquiercosa esta abierta entonces se cierre */

    mobileMenu.classList.toggle("inactive");
}

function toggleCarritoAside() {
    const isMobileMenuClosed = mobileMenu.classList.contains("inactive");
    const isDesktopMenuClosed = desktopMenu.classList.contains("inactive")

    if (!isMobileMenuClosed) {
        mobileMenu.classList.add("inactive");
    }

    if (!isDesktopMenuClosed) {
        desktopMenu.classList.add("inactive");
    }

    const isProductDetailClosed = productDetailContainer.classList.contains("inactive")

    if (!isProductDetailClosed) {
      productDetailContainer.classList.add("inactive");
    }

    shoppingCartContainer.classList.toggle("inactive");
}


function openProductDetailAside(){
  shoppingCartContainer.classList.add("inactive"); /*Esto es para que cuando se abra otra cosa el detalle del prodcuto se cierre y se hace asi por que aca ya esta abierto open si fuera un toggle seria diferente*/

  productDetailContainer.classList.remove("inactive");
}

function closeProductDetailAside(){
  productDetailContainer.classList.add("inactive");
}

const productList = [];
productList.push({
    name: "Bike",
    price: 120,
    image: "https:images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

productList.push({
    name: "Pantalla",
    price: 220,
    image: "https:images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

productList.push({
    name: "Computador",
    price: 620,
    image: "https:images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});




/* <div class="product-card">
        <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
        <div class="product-info">
          <div>
            <p>$120,00</p>
            <p>Bike</p>
          </div>
          <figure>
            <img src="./icons/bt_add_to_cart.svg" alt="">
          </figure>
        </div>
      </div>*/

      /*ahora toca meter y crear constantes de cada uno de los elementos*/
      
      
      function renderProducts(arr) {
      for(product of arr /*ene ste caso pordria llamar a productList*/) {
      const productCard = document.createElement("div");
      productCard.classList.add("product-card");

      const ProductImg = document.createElement("img");
      ProductImg.setAttribute("src", product.image); /*esta imagneo si varia*/ 
      ProductImg.addEventListener("click", openProductDetailAside);
      const productInfo = document.createElement("div");
      productInfo.classList.add("product-info");

      const productInfoDiv = document.createElement("div");

      const productPrice = document.createElement("p");
      productInfo.innerText = "$" + product.price;
      const productName = document.createElement("p");
      productName.innerText = product.name;

        productInfoDiv.appendChild(productPrice);/* 2*/
        productInfoDiv.appendChild(productName); /* 3*/

      const productFigure = document.createElement("figure");
      const productImgCart = document.createElement("img");
      productImgCart.setAttribute("src", "./icons/bt_add_to_cart.svg"); /*esta imagneo no varia*/ 

        productFigure.appendChild(productImgCart); /* 1*/

        productInfo.appendChild(productInfoDiv); /* 4*/
        productInfo.appendChild(productFigure); /* 5*/

        productCard.appendChild(ProductImg); /*6*/
        productCard.appendChild(productInfo); /*7*/

        cardsContainar.appendChild(productCard); /*9  <div class="cards-container"> */
    }}
      /*ahora toca devolvernos, meter la img dentro del figure, los parrafos en div y etc. con appenChild*/



    /*se crea la funcion por si no quiero trabajar con producList si no con cualquier otra cosa ya no tendria que hacer el mismo proceso*/

    renderProducts(productList);