const carrito = JSON.parse(localStorage.getItem("carrito")) || []
const imgCarrito = document.getElementById("imgCarrito")
const footer = document.getElementById("footer")
const logo = document.getElementById("logo")
const inputBuscar = document.querySelector("input.buscador")

footer.innerHTML = "<p>Copyright 2022 - <br><strong>Comisión 34095 JS - Barragan Natalia</strong></p>"
logo.src = "fotos/yhabiaunavez.jpg"
imgCarrito.src = "fotos/cart-2.png"

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
    let resultado = mercaderia.filter(mercaderia => mercaderia.tipo.toUpperCase().includes(buscador.value.toUpperCase().trim()))
    
    if (resultado.length > 0) {
        subirTarjetas(resultado) 
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

const botonesAdd = document.querySelectorAll("button.boton.botonAdd")

function activarClickBotones() {
    botonesAdd.forEach(btn => {
        btn.addEventListener("click", ()=> {
            let resultado = mercaderia.find(prod => prod.id === parseInt(btn.id))
                carrito.push(resultado)
                localStorage.setItem("miCarrito", JSON.stringify(carrito))
        })
    })
}
activarClickBotones()






