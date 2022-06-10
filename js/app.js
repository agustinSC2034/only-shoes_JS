// Renderizar productos
const renderizarProductos = async () => {
  const stockIndex = await fetch('./productosIndex.json')
  const stock = await stockIndex.json()
  stock.forEach((productos) => {
    const tarjetaPrincipal = document.createElement('div')
    tarjetaPrincipal.innerHTML = `
    <div class="col mb-5 tarjetaIndividual">
    <div class="card h-100 tarjetaMIA item">
    <div class="badge bg-primary text-white position-absolute"
                                style="top: 0.5rem; right: 0.5rem">
                                25% OFF</div>
                            <img class="card-img-top item-img" src=${productos.img} alt="Camiseta de futbol" />
                            <div class="card-body p-4">
                                <div class="text-center">
                                    <h5 class="fw-bolder item-titulo">${productos.nombre}</h5>
                                    <span class="text-muted text-decoration-line-through">${productos.precio * 125 / 100}</span>
                                    <h5 class="fw-bolderPrecio item-precio">${productos.precio}</h5>
                                    <h7 class="fw-bolderPrecio">Pesos</h7>
                                </div>
                            </div>
                            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div class="text-center claseBotonTarjeta">
                                    <button type="button" class="btn btn-outline-primary addToCart"
                                        data-id="1">Comprar</button>
                                </div>
                            </div>
                            </div>
                            </div>
    `
    tarjetaTotalIndex.append(tarjetaPrincipal)
    comprarButton.addEventListener("click", comprarCarrito);
    // Tomo todos los botones
    const buttonClick = document.querySelectorAll(".addToCart");
    // Recorro los botones y ejecuto funcion al apretar
    buttonClick.forEach((btn) => {
      btn.addEventListener("click", addToCarritoItem);
    });
  })
}

const renderizarProductosFutbol = async () => {
  const stockFutbol = await fetch('../.././productosFutbol.json')
  const stock2 = await stockFutbol.json()
  stock2.forEach((productos) => {
    const tarjetaPrincipalFutbol = document.createElement('div')
    tarjetaPrincipalFutbol.innerHTML = `
    <div class="col mb-5 tarjetaIndividual">
    <div class="card h-100 tarjetaMIA item">
                            <img class="card-img-top item-img" src=${productos.img} alt="Camiseta de futbol" />
                            <div class="card-body p-4">
                                <div class="text-center">
                                    <h5 class="fw-bolder item-titulo">${productos.nombre}</h5>
                            
                                    <h5 class="fw-bolderPrecio item-precio">${productos.precio}</h5>
                                    <h7 class="fw-bolderPrecio">Pesos</h7>
                                </div>
                            </div>
                            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div class="text-center claseBotonTarjeta">
                                    <button type="button" class="btn btn-outline-primary addToCart"
                                        data-id="1">Comprar</button>
                                </div>
                            </div>
                            </div>
                            </div>
    `
    tarjetaTotalFutbol.append(tarjetaPrincipalFutbol)
    comprarButton.addEventListener("click", comprarCarrito);
    // Tomo todos los botones
    const buttonClick = document.querySelectorAll(".addToCart");
    // Recorro los botones y ejecuto funcion al apretar
    buttonClick.forEach((btn) => {
      btn.addEventListener("click", addToCarritoItem);
    });
  })
}

const renderizarProductosNBA = async () => {
  const stockNBA = await fetch('../.././productosNBA.json')
  const stock3 = await stockNBA.json()
  stock3.forEach((productos) => {
    const tarjetaPrincipalNBA = document.createElement('div')
    tarjetaPrincipalNBA.innerHTML = `
    <div class="col mb-5 tarjetaIndividual">
    <div class="card h-100 tarjetaMIA item">
                            <img class="card-img-top item-img" src=${productos.img} alt="Camiseta de futbol" />
                            <div class="card-body p-4">
                                <div class="text-center">
                                    <h5 class="fw-bolder item-titulo">${productos.nombre}</h5>
                              
                                    <h5 class="fw-bolderPrecio item-precio">${productos.precio}</h5>
                                    <h7 class="fw-bolderPrecio">Pesos</h7>
                                </div>
                            </div>
                            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div class="text-center claseBotonTarjeta">
                                    <button type="button" class="btn btn-outline-primary addToCart"
                                        data-id="1">Comprar</button>
                                </div>
                            </div>
                            </div>
                            </div>
    `
    tarjetaTotalNBA.append(tarjetaPrincipalNBA)
    comprarButton.addEventListener("click", comprarCarrito);
    // Tomo todos los botones
    const buttonClick = document.querySelectorAll(".addToCart");
    // Recorro los botones y ejecuto funcion al apretar
    buttonClick.forEach((btn) => {
      btn.addEventListener("click", addToCarritoItem);
    });
  })
}

const renderizarProductosZAPAS = async () => {
  const stockZAPAS = await fetch('../.././productosZAPAS.json')
  const stock4 = await stockZAPAS.json()
  stock4.forEach((productos) => {
    const tarjetaPrincipalZAPAS = document.createElement('div')
    tarjetaPrincipalZAPAS.innerHTML = `
    <div class="col mb-5 tarjetaIndividual">
    <div class="card h-100 tarjetaMIA item">
    <div class="badge bg-primary text-white position-absolute"
                                style="top: 0.5rem; right: 0.5rem">
                                10% OFF</div>
                            <img class="card-img-top item-img" src=${productos.img} alt="Camiseta de futbol" />
                            <div class="card-body p-4">
                                <div class="text-center">
                                    <h5 class="fw-bolder item-titulo">${productos.nombre}</h5>
                                    <span class="text-muted text-decoration-line-through">${productos.precio * 110 / 100}</span>
                                    <h5 class="fw-bolderPrecio item-precio">${productos.precio}</h5>
                                    <h7 class="fw-bolderPrecio">Pesos</h7>
                                </div>
                            </div>
                            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div class="text-center claseBotonTarjeta">
                                    <button type="button" class="btn btn-outline-primary addToCart"
                                        data-id="1">Comprar</button>
                                </div>
                            </div>
                            </div>
                            </div>
    `
    tarjetaTotalZAPAS.append(tarjetaPrincipalZAPAS)
    comprarButton.addEventListener("click", comprarCarrito);
    // Tomo todos los botones
    const buttonClick = document.querySelectorAll(".addToCart");
    // Recorro los botones y ejecuto funcion al apretar
    buttonClick.forEach((btn) => {
      btn.addEventListener("click", addToCarritoItem);
    });
  })
}

const renderizarProductosADIDAS = async () => {
  const stockADIDAS = await fetch('../.././productosADIDAS.json')
  const stock5 = await stockADIDAS.json()
  stock5.forEach((productos) => {
    const tarjetaPrincipalADIDAS = document.createElement('div')
    tarjetaPrincipalADIDAS.innerHTML = `
    <div class="col mb-5 tarjetaIndividual">
    <div class="card h-100 tarjetaMIA item">
                            <img class="card-img-top item-img" src=${productos.img} alt="Camiseta de futbol" />
                            <div class="card-body p-4">
                                <div class="text-center">
                                    <h5 class="fw-bolder item-titulo">${productos.nombre}</h5>
                                    <h5 class="fw-bolderPrecio item-precio">${productos.precio}</h5>
                                    <h7 class="fw-bolderPrecio">Pesos</h7>
                                </div>
                            </div>
                            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div class="text-center claseBotonTarjeta">
                                    <button type="button" class="btn btn-outline-primary addToCart"
                                        data-id="1">Comprar</button>
                                </div>
                            </div>
                            </div>
                            </div>
    `
    tarjetaTotalADIDAS.append(tarjetaPrincipalADIDAS)
    comprarButton.addEventListener("click", comprarCarrito);
    // Tomo todos los botones
    const buttonClick = document.querySelectorAll(".addToCart");
    // Recorro los botones y ejecuto funcion al apretar
    buttonClick.forEach((btn) => {
      btn.addEventListener("click", addToCarritoItem);
    });
  })
}

const renderizarProductosNIKE = async () => {
  const stockNIKE = await fetch('../.././productosNIKE.json')
  const stock6 = await stockNIKE.json()
  stock6.forEach((productos) => {
    const tarjetaPrincipalNIKE = document.createElement('div')
    tarjetaPrincipalNIKE.innerHTML = `
    <div class="col mb-5 tarjetaIndividual">
    <div class="card h-100 tarjetaMIA item">
    <div class="badge bg-primary text-white position-absolute"
                                style="top: 0.5rem; right: 0.5rem">
                                10% OFF</div>
                            <img class="card-img-top item-img" src=${productos.img} alt="Camiseta de futbol" />
                            <div class="card-body p-4">
                                <div class="text-center">
                                    <h5 class="fw-bolder item-titulo">${productos.nombre}</h5>
                                    <span class="text-muted text-decoration-line-through">${productos.precio * 110 / 100}</span>
                                    <h5 class="fw-bolderPrecio item-precio">${productos.precio}</h5>
                                    <h7 class="fw-bolderPrecio">Pesos</h7>
                                </div>
                            </div>
                            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div class="text-center claseBotonTarjeta">
                                    <button type="button" class="btn btn-outline-primary addToCart"
                                        data-id="1">Comprar</button>
                                </div>
                            </div>
                            </div>
                            </div>
    `
    tarjetaTotalNIKE.append(tarjetaPrincipalNIKE)
    comprarButton.addEventListener("click", comprarCarrito);
    // Tomo todos los botones
    const buttonClick = document.querySelectorAll(".addToCart");
    // Recorro los botones y ejecuto funcion al apretar
    buttonClick.forEach((btn) => {
      btn.addEventListener("click", addToCarritoItem);
    });
  })
}

const renderizarProductosPUMA = async () => {
  const stockPUMA = await fetch('../.././productosPUMA.json')
  const stock7 = await stockPUMA.json()
  stock7.forEach((productos) => {
    const tarjetaPrincipalPUMA = document.createElement('div')
    tarjetaPrincipalPUMA.innerHTML = `
    <div class="col mb-5 tarjetaIndividual">
    <div class="card h-100 tarjetaMIA item">
    <div class="badge bg-primary text-white position-absolute"
                                style="top: 0.5rem; right: 0.5rem">
                                20% OFF</div>
                            <img class="card-img-top item-img" src=${productos.img} alt="Camiseta de futbol" />
                            <div class="card-body p-4">
                                <div class="text-center">
                                    <h5 class="fw-bolder item-titulo">${productos.nombre}</h5>
                                    <span class="text-muted text-decoration-line-through">${productos.precio * 120 / 100}</span>
                                    <h5 class="fw-bolderPrecio item-precio">${productos.precio}</h5>
                                    <h7 class="fw-bolderPrecio">Pesos</h7>
                                </div>
                            </div>
                            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div class="text-center claseBotonTarjeta">
                                    <button type="button" class="btn btn-outline-primary addToCart"
                                        data-id="1">Comprar</button>
                                </div>
                            </div>
                            </div>
                            </div>
    `
    tarjetaTotalPUMA.append(tarjetaPrincipalPUMA)
    comprarButton.addEventListener("click", comprarCarrito);
    // Tomo todos los botones
    const buttonClick = document.querySelectorAll(".addToCart");
    // Recorro los botones y ejecuto funcion al apretar
    buttonClick.forEach((btn) => {
      btn.addEventListener("click", addToCarritoItem);
    });
  })
}

// Carrito:
let carrito = [];
// Lista de cards donde voy a renderizar productos
const tarjetaTotalIndex = document.querySelector(".listaDeCards")
const tarjetaTotalFutbol = document.querySelector(".listaCardsFutbol")
const tarjetaTotalNBA = document.querySelector(".listaCardsNBA")
const tarjetaTotalZAPAS = document.querySelector(".listaCardsZAPAS")
const tarjetaTotalADIDAS = document.querySelector(".listaCardsADIDAS")
const tarjetaTotalNIKE = document.querySelector(".listaCardsNIKE")
const tarjetaTotalPUMA = document.querySelector(".listaCardsPUMA")
// Creo var para almacenar html a renderizar
const carritoHtml = document.querySelector(".shoppingCartItemsContainer");
// Boton comprar carrito
// Boton vaciar carrito
const vaciarButton = document.querySelector(".vaciarButtonCarro");
vaciarButton.addEventListener("click", removeCarrito);
// Boton comprar prueba de SPREAD ARRAY:
const comprarButton = document.querySelector(".comprarButton");
comprarButton.addEventListener("click", comprarCarrito);


// FUNCIONES
renderizarProductos();
renderizarProductosFutbol();
renderizarProductosNBA();
renderizarProductosZAPAS();
renderizarProductosADIDAS();
renderizarProductosNIKE();
renderizarProductosPUMA();

// Agregar item al carro
function addToCarritoItem(event) {
  const button = event.target; // guardo el boton apretado
  const card = button.closest(".tarjetaMIA"); // tomo toda la tarjeta
  const cardImg = card.querySelector(".item-img").src;
  const cardTitle = card.querySelector(".item-titulo").textContent;
  const cardPrice = card.querySelector(".item-precio").textContent;
  swal(cardTitle + " a sido agregado al carrito"); // SweetAlert
  // Agregamos card a la variable newCard
  const newCard = {
    img: cardImg,
    title: cardTitle,
    precio: cardPrice,
    cantidad: 1,
  };
  // Agregamos card al carrito
  addCardToCarrito(newCard);
}

// Sumo cantidad al item, ejecuto resto de funciones
function addCardToCarrito(newCard) {
  const InputCantidad = carritoHtml.getElementsByClassName(
    "shoppingCartItemQuantity"
  );
  // recorro carrito para saber si lo que agrego ya está dentro
  for (let i = 0; i < carrito.length; i++) {
    if (carrito[i].title.trim() === newCard.title.trim()) {
      carrito[i].cantidad++; // sumo 1
      const inputValue = InputCantidad[i];
      inputValue.value++; // renderizo cantidad al html
      CarritoTotal(); // actualizo el total
      return null; // retorno null asi termina acá
    }
  }
  carrito.push(newCard);
  mostrarCarrito(newCard);
}

// Renderizo carrito entero
function mostrarCarrito() {
  carritoHtml.innerHTML = "";
  carrito.map((card) => {
    const trRow = document.createElement("div");
    const Content = `
        <div class="row shoppingCartItem">
        <div class="col-6">
            <div class="shopping-cart-item d-flex align-items-center h-100 border-bottom pb-2 pt-3"> 
            <img src="${card.img}" class="shopping-cart-image">  
            <h6 class="shopping-cart-item-title shoppingCartItemTitle text-truncate ml-3 mb-0">${card.title}</h6>
            </div>
        </div>
        <div class="col-2">
            <div class="shopping-cart-price d-flex align-items-center h-100 border-bottom pb-2 pt-3">
                <p class="item-price mb-0 shoppingCartItemPrice">${card.precio}</p>
            </div>
        </div>
        <div class="col-4">
            <div
                class="shopping-cart-quantity d-flex justify-content-between align-items-center h-100 border-bottom pb-2 pt-3">
                <input class="shopping-cart-quantity-input shoppingCartItemQuantity" type="number" min="1"
                    value="${card.cantidad}">
                <button class="btn btn-danger buttonDelete" type="button">X</button>
            </div>
        </div>
    </div>`;
    trRow.innerHTML = Content;
    carritoHtml.append(trRow);
    trRow
      .querySelector(".buttonDelete")
      .addEventListener("click", removeItemCarrito);
    trRow
      .querySelector(".shoppingCartItemQuantity")
      .addEventListener("change", sumaCantidad);
  });
  CarritoTotal();
}

// Sumo total y lo dibujo en pantalla
function CarritoTotal() {
  let Total = 0;
  const cartTotal = document.querySelector(".shoppingCartTotal");
  carrito.forEach((card) => {
    // Le saco el "$" con remplace, convierto string a numero con Number
    const precio = Number(card.precio.replace("$", ""));
    Total = Total + precio * card.cantidad;
  });
  cartTotal.innerHTML = `: $${Total}`;
  guardarEnLocalStorage();
}

// Elimino item del carrrito
function removeItemCarrito(event) {
  const buttonDelete = event.target;
  const trRow = buttonDelete.closest(".shoppingCartItem");
  const title = trRow.querySelector(".shoppingCartItemTitle").textContent;
  // para sacarlo del carrito js
  for (let i = 0; i < carrito.length; i++) {
    if (carrito[i].title.trim() === title.trim()) {
      carrito.splice(i, 1);
    }
  }
  trRow.remove(); // lo elimino del html
  CarritoTotal(); // actualizo total nuevamente
}

// Elimino todo del carrito
function removeCarrito() {
  swal({
    title: "Estas seguro?",
    text: "Una vez vaciado no se puede recuperar",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  }).then((willDelete) => {
    if (willDelete) {
      carrito = [];
      carritoHtml.innerHTML = "";
      CarritoTotal(); // actualizo total nuevamente
      swal("El carrito ha sido vaciado", {
        icon: "success",
      });
    } else {
    }
  });
}


// Actualizo cantidad al borrar
function sumaCantidad(event) {
  const sumaInput = event.target;
  const trRow = sumaInput.closest(".shoppingCartItem");
  const title = trRow.querySelector(".shoppingCartItemTitle").textContent;
  carrito.forEach((card) => {
    if (card.title.trim() === title) {
      sumaInput.value < 1 ? (sumaInput.value = 1) : sumaInput.value;
      card.cantidad = sumaInput.value;
      CarritoTotal();
    }
  });
}

// guardo el carrito en el storage en formato JSON
function guardarEnLocalStorage() {
  localStorage.setItem("carrito", JSON.stringify(carrito));
}

/* Cuando refresco pantalla se ejecuto la function, Obtengo 'carrito' y lo convierto de
JSON a formato JS, si storage tiene algo rendereriza el carrito como estaba antes */
window.onload = function () {
  const storage = JSON.parse(localStorage.getItem("carrito"));
  if (storage) {
    carrito = storage;
    mostrarCarrito();
  }
};

// Uso de SPREAD DE ARRAYS:
function comprarCarrito() {
  console.log("Gracias por comprar los siguientes articulos")
  console.log(carrito)
  console.log(...carrito)
  swal({
    title: "Gracias por su compra",
    text: "Lo esperamos nuevamente en DeporStore",
  })
  carrito = [];
  carritoHtml.innerHTML = "";
  CarritoTotal();
}


/*
function calculoDeCuotas() {
}
*/
