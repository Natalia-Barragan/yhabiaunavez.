const carrito = JSON.parse(localStorage.getItem("miCarrito")) || []
const inputBuscar = document.querySelector("input.buscador")
const imgCarrito = document.getElementById("imgCarrito")
const footer = document.getElementById("footer")
const logo = document.getElementById("logo")

imgCarrito.addEventListener("mousemove", ()=> {
    let totalProductos = carrito.length
        imgCarrito.title = `${totalProductos} productos en el carrito`
})

function subirTarjetas(array) {
    let contenido = ""
        if (array.length > 0) {
            array.forEach(producto => {
                contenido += retornarTarjetas(producto)
            })
            container.innerHTML = contenido
        }
}
subirTarjetas(mercaderia)


function filtrarMercaderia() {
    let filtro = mercaderia.filter(mercaderia => mercaderia.tipo.toUpperCase().includes(buscador.value.toUpperCase().trim()))
    
    if (filtro.length > 0) {
        subirTarjetas(filtro) 
    }    
}
filtrarMercaderia()

buscador.addEventListener("search", ()=> {
    if (buscador.value.trim() !== "") {
        filtrarMercaderia()
    } else {
        subirTarjetas(mercaderia)
    }
})



function activarClickBotones() {
    const botonesAdd = document.querySelectorAll("button.boton.botonAdd")
    botonesAdd.forEach(btn => {
        btn.addEventListener("click", ()=> {
            let resultado = mercaderia.find(prod => prod.id === parseInt(btn.id))
                carrito.push(resultado)
                localStorage.setItem("miCarrito", JSON.stringify(carrito))
        })
    })
}
activarClickBotones()

footer.innerHTML = "<p>Copyright 2022 - <br><strong>Comisión 34095 JS - Barragan Natalia</strong></p>"
logo.src = "fotos/yhabiaunavez.jpg"
imgCarrito.src = "fotos/cart-2.png"





