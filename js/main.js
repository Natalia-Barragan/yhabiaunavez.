const carrito = []

const mercaderia = [{imagen: '../fotos/conjunto.jpeg', codigo: 1, tipo: 'Conjunto algodon COD#1', precio: 3400},
                    {imagen: '../fotos/conjuntobebe.jpeg', codigo: 2, tipo: 'Conjunto bebe plush COD#2', precio: 2900},
                    {imagen: '../fotos/capa.jpeg', codigo: 3, tipo: 'Capa COD#3', precio: 3000},
                    {imagen: '../fotos/cubosensorial.jpeg', codigo: 4, tipo: 'Cubo sensorial COD$4', precio: 1500},
                    {imagen: '../fotos/almohadaperrito.jpeg', codigo: 5, tipo: 'Almohada perrito COD#5', precio: 1600},
                    {imagen: '../fotos/gimnasiomont.jpeg', codigo: 6, tipo: 'Gimnasio montessori COD#6', precio: 4500},
                    {imagen: '../fotos/manta.jpeg', codigo: 7, tipo: 'Mantita COD#7', precio: 2700},
                    {imagen: '../fotos/babero.jpeg', codigo: 8, tipo: 'Babero pechera COD#8', precio: 1400},
                    {imagen: '../fotos/mantapolar.jpeg', codigo: 9, tipo: 'Manta polar COD#9', precio: 2600},    ]

const mensajeInicial = "Seleccioná la opción deseada usando el código numérico en pantalla:"

function buscarMercaderia(codigo) {
    let resultado = mercaderia.find(mercaderia => mercaderia.codigo === parseInt(codigo))
    
    return resultado 
}

function comprar() {
    let codigo = prompt(mensajeInicial)
        if (!parseInt(codigo)) {
            alert("⛔️ El código no existe.")
            return 
        }
        let mercaderiaElegida = buscarMercaderia(codigo)
            carrito.push(mercaderiaElegida)
        let respuesta = confirm("¿Deseas agregar otra prenda?")
        if (respuesta) {
            comprar()
        } else {
            finalizarCompra()
        }
}

function verCarrito() {
    if (carrito.length > 0) {
        console.table(carrito)
    } else {
        console.warn("El carrito está vacío!")
    }
}

function finalizarCompra() {
    if (carrito.length === 0) {
        console.warn("No ingresó nada en el carrito")
        return 
    }
    const finCompra = new Compra(carrito)
    alert(`El total de la compra es de $ ${finCompra.subtotal()}`)
    let respuesta = confirm("¿Deseas finalizar su compra?")
        if (respuesta) {
            alert(finCompra.confirmarCompra())
            carrito.length = 0
        }
}


/*
Instrucciones a ejecutar en la Consola JS.

    1) Ejecuta la función comprar() para iniciar la compra.
    2) Ejecuta la función verCarrito() para ver tus productos seleccionados.
    3) Ejecuta la función finalizarCompra() para comprar los productos del carrito.
*/




