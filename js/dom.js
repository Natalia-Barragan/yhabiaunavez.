const container = document.getElementById("container")
const footer = document.getElementById("footer")
const logo = document.getElementById("logo")
footer.innerHTML = "<p>Copyright 2022 - <br><strong>Comisión 34095 JS - Barragan Natalia</strong></p>" 
logo.src = "../fotos/yhabiaunavez.jpg"


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

const botonesAdd = document.querySelectorAll("button.boton.botonAdd")

const inputBuscar = document.querySelector("form-control me-2")

function filtrarProductos(){
    if (imputBuscar.value.trim() !== ""){
        let resultado = mercaderia.filter(mercaderia => mercaderia.nombre.includes())
            if (resultado.length > 0){
                subirTarjetas(resultado)
            }
    }
}