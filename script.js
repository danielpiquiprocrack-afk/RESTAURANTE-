let loadMoreBtn = document.querySelector('#load-more');
let currentItem = 4;

loadMoreBtn.onclick = () => {
    let boxes = [...document.querySelectorAll('.box-container .box')];
    for(var i = currentItem; i < currentItem + 4; i++) {
        boxes[i].style.display = 'inline-block';
    }

    currentItem += 4;

    if(currentItem >= boxes.length) {
        loadMoreBtn.style.display = 'none';
    }
}

// ... (líneas anteriores, si las hay)
// script.js

// 17 //carrito
// 18 
// 19 const carrito = document.getElementById('carrito');
// 20 const elementos1 = document.getElementById('lista-1');
// 21 const lista = document.querySelector('#lista-carrito tbody');
// 22 const vaciarCarritoBtn = document.getElementById('vaciar-carrito');
// 23 
// 24 cargarEventListeners();
// 25 
// 26 function cargarEventListeners() {
// 27     elementos1.addEventListener('click', comprarElemento);
// 28     carrito.addEventListener('click', eliminarElemento);
// 29     vaciarCarritoBtn.addEventListener('click', vaciarCarrito);
// 30 }
// 31 
// 32 // ... (líneas siguientes, incluyendo las definiciones de las funciones: 
//    // comprarElemento, eliminarElemento, vaciarCarrito, etc.)
// 33