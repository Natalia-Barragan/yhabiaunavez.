function armarTablaCarrito(prod) {
    return `<tr>
                <td><img src=${prod.imagen} width=40px height=30px></td>
                <td>${prod.tipo}</td>
                <td>$ ${prod.precio}</td>
                <td><button class="button button-add" id="${prod.tipo}">❌</button></td>
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

const carrito = JSON.parse(localStorage.getItem("carrito")) || []