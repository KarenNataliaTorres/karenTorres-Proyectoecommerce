let totalCompra = 0
let productoSeleccionado = parseInt(
    prompt(`Ingresar el tipo de producto que quiere agregar al carrito 1.Pantalones - 2.Chaquetas - 3.Zapatos - 4.Accesorio`)
    )

let aniadirMasProductos = true
let decidir
while(aniadirMasProductos===true){
    if(productoSeleccionado === 1){
        totalCompra = totalCompra+1200
    }else if(productoSeleccionado === 2){
        totalCompra = totalCompra+1700
    }else if(productoSeleccionado === 3){
        totalCompra = totalCompra+2000
    }else if(productoSeleccionado === 4){
        totalCompra = totalCompra+250
    }

decidir = parseInt(prompt(`Desea continuar comprando? 1.SI 2.NO`))

if(decidir===1){
    productoSeleccionado = parseInt(prompt(`Ingresar el tipo de producto que quiere agregar al carrito 1.Pantalones - 2.Chaquetas - 3.Zapatos - 4.Accesorio`))
    
    
}else if(decidir===2){
    aniadirMasProductos = false
    
}
}
alert(`el valor total de la compra es: `+ totalCompra)
