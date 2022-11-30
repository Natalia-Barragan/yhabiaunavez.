function armarTablaCarrito(prod) {
    return `<tr>
                <td>${prod.imagen}</td>
                <td>${prod.nombre}</td>
                <td>$ ${prod.precio}</td>
                <td><button class="button button-add" id="${prod.nombre}">❌</button></td>
            </tr>`
}

function recuperarCarrito() {
    let tablaCarro = ""
    const tbody = document.querySelector("tbody")
    const carrito = JSON.parse(localStorage.getItem("miCarrito"))
    if (carrito.length > 0) {
        carrito.forEach(prod => {
            tablaCarro += armarTablaCarrito(prod)
        });
        tbody.innerHTML = tablaCarro
    }
}
recuperarCarrito()


// function retornarCarrito(producto){
//     return`<tr>
//                 <td>${producto.imagen}</td>
//                 <td>${producto.tipo}</td>
//                 <td>${producto.precio}</td>
//                 <td><button>❌</button></td>
//             </tr>`
// }

// function recuperarCarrito() {
//     let tablaHTML =""
//     const tbody = document.querySelector("tbody")
//     const carrito = JSON.parse(localStorage.getItem("miCarrito"))
//     if (carrito.length > 0) {
//         carrito.forEach(producto => {
//             tablaHTML += retornarCarrito(producto)            
//         });
//         tbody.innerHTML = tablaHTML   
//     }
// }
// recuperarCarrito()