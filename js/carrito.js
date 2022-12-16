const carrito = JSON.parse(localStorage.getItem("miCarrito"))

function armarTablaCarrito(prod) {
    return `<tr>
                <td><img src=${prod.imagen} width=40px height=30px></td>
                <td>${prod.tipo}</td>
                <td>$ ${prod.precio}</td>
                <td><button class="button boton-borrar borrar" id="${prod.tipo}">❌</button></td>
            </tr>`
}

function recuperarCarrito() {
    let tablaCarro = ""
    const tbody = document.querySelector("tbody")
    const carrito = JSON.parse(localStorage.getItem("miCarrito"))
    if (carrito.length > -1) {
        carrito.forEach(prod => {
            tablaCarro += armarTablaCarrito(prod)
        });
        tbody.innerHTML = tablaCarro
    }
}
recuperarCarrito()

function activarBotonBorrar(){
    const botonesBorrar = document.querySelectorAll("button.boton-borrar.borrar")    
    botonesBorrar.forEach(btn => {
        btn.addEventListener("click", ()=> {
            let idx = carrito.findIndex(prod => prod.tipo === btn.id)
                if (idx > -1){
                    carrito.splice(idx, 1)
                    localStorage.setItem("miCarrito", JSON.stringify(carrito)) 
                    recuperarCarrito()
                    activarBotonBorrar() 
                }  
        
            })             
    })
}
activarBotonBorrar()
