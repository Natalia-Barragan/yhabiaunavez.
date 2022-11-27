class Compra {
    constructor(carrito) {
        this.carrito = carrito
    }
    subtotal() {
        if (carrito.length > 0) {
            return this.carrito.reduce((acc, mercaderia)=> acc + mercaderia.precio, 0)
        } else {
            return 'Error inesperado'
        }
    }
    confirmarCompra() {
        if (this.subtotal() !== 'Error inesperado') {
            return `✅ Confirmamos el pago de $ ${this.subtotal()}. \n Muchas gracias por su compra!`
        } else {
            return `⛔️ Error en la transacción.`
        }
    }
}