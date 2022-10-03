const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuHamIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
const shoppingCartContainer = document.querySelector(
  "#shopping-cart--container"
);
const cardsContainer = document.querySelector(".cards-container");

menuEmail.addEventListener("click", toggleDesktopMenu);
menuHamIcon.addEventListener("click", toggleMobileMenu);
menuCarritoIcon.addEventListener("click", toggleCarritoAside);

function toggleDesktopMenu() {
  const isAsideClose = shoppingCartContainer.classList.contains("inactive");
  if (!isAsideClose) {
    shoppingCartContainer.classList.add("inactive");
  }

  desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu() {
  const isAsideClose = shoppingCartContainer.classList.contains("inactive");
  if (!isAsideClose) {
    shoppingCartContainer.classList.add("inactive");
  }

  mobileMenu.classList.toggle("inactive");
}

function toggleCarritoAside() {
  const isMobileMenuClose = mobileMenu.classList.contains("inactive");
  const isDesktopMenuClose = desktopMenu.classList.contains("inactive");

  if (!isMobileMenuClose) {
    mobileMenu.classList.add("inactive");
  }
  if (!isDesktopMenuClose) {
    desktopMenu.classList.add("inactive");
  }

  shoppingCartContainer.classList.toggle("inactive");
}

const productList = [];
productList.push({
  name: "Bike",
  price: 820,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
  name: "Mouse",
  price: 370,
  image:
    "https://images.pexels.com/photos/9058886/pexels-photo-9058886.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
});
productList.push({
  name: "Laptop",
  price: 6999,
  image:
    "https://images.pexels.com/photos/11982694/pexels-photo-11982694.jpeg?auto=compress&cs=tinysrgb&w=600",
});

function renderProducts(array) {
  for (product of productList) {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");

    const productImg = document.createElement("img");
    productImg.setAttribute("src", product.image);

    const productInfo = document.createElement("div");
    productInfo.classList.add("product-info");

    const productInfoDiv = document.createElement("div");

    const productPrice = document.createElement("p");
    productPrice.innerText = "$" + product.price;
    const productName = document.createElement("p");
    productName.innerText = product.name;

    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);

    const productInfoFigure = document.createElement("figure");
    const productImgCar = document.createElement("img");
    productImgCar.setAttribute("src", "./icons/bt_add_to_cart.svg");

    productInfoFigure.appendChild(productImgCar);

    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);

    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);

    cardsContainer.appendChild(productCard);
  }
}

renderProducts(productList);
