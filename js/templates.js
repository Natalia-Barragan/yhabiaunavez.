function retornarTarjetas(mercaderia){
    

    return `<div class="container-card" id="container-card ${mercaderia.id}"> 
                <div class="card">
                
                    <img src=${mercaderia.imagen}>
                
                    <div class="contenido-card">
                        <h3>${mercaderia.tipo}</h3>
                        <p> $ ${mercaderia.precio}</p>
                        <button class="boton botonAdd" id= "${mercaderia.id}" title="Clic para agregar '${mercaderia.tipo}' al carrito" >Comprar</button>
                    </div>
                </div>    
            </div>`
                
}

