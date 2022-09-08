// ***** PRODUCTOS *****

class Producto{
    constructor(nombre, modelo, color, talle, precio, cantidad ){
        this.nombre=nombre;
        this.modelo=modelo;
        this.color=color;
        this.talle=talle;
        this.precio=precio;
        this.cantidad=cantidad;
    }
    cambiarPrecio(nuevoPrecio){         //METODO PARA CAMBIAR PRECIO
        this.precio=nuevoPrecio;
    }
    cambiarCantidad(nuevaCantidad){     //METODO PARA CAMBIAR STOCK
        this.cantidad=nuevaCantidad;
    }
}
//  MODELOS DE PANTALONES DIFERENCIADOS POR TALLE 

//PANTALON JEAN CON TACHAS - OBJETOS
const pantalonJeanXL=new Producto("pantalon","jean con tachas","claro","XL", 1200,10)
const pantalonJeanL=new Producto("pantalon","jean con tachas","claro","L", 1200, 10)
const pantalonJeanM=new Producto("pantalon","jean con tachas","claro","M", 1200, 10)
const pantalonJeanS=new Producto("pantalon","jean con tachas","claro","S", 1200, 10)
const pantalonJeanXS=new Producto("pantalon","jean con tachas","claro","XS", 1200, 10)

// ARRAY PANTALON JEAN CON TACHAS


const pantalonJean =[];


//PANTALON ENGOMADO NEGRO
const pantalonEngomadoXL=new Producto("pantalon","Engomado","Negro","XL",1700, 10)
const pantalonEngomadoL=new Producto("pantalon","Engomado","Negro","L", 1700, 10)
const pantalonEngomadoM=new Producto("pantalon","Engomado","Negro","M", 1700, 10)
const pantalonEngomadoS=new Producto("pantalon","Engomado","Negro","S",1700, 10)

//ARRAY PANTALON ENGOMADO NEGRO


const pantalonEngomado =[];


// ARRAY DE TODOS LOS PANTALONES
const pantalones =[] ;


// ***** MODELOS DE CAMPERAS DIFERENCIADOS POR TALLE *****

//CAMPERAS PUFFER
const camperaPufferXL=new Producto("campera","Puffer","Negro","XL", 2500, 10)
const camperaPufferL=new Producto("campera","Puffer","Negro","L", 2500, 10)
const camperaPufferM=new Producto("campera","Puffer","Negro","M", 2500, 10)
const camperaPufferS=new Producto("campera","Puffer","Negro","S", 2500, 10)


const camperaPuffer =[];


//CAMPERAS CUERINA
const camperaCuerinaXL=new Producto("campera","Cuerina","Negro","XL", 2200, 10)
const camperaCuerinaL=new Producto("campera","Cuerina","Negro","L", 2200, 10)
const camperaCuerinaM=new Producto("campera","Cuerina","Negro","M", 2200, 10)
const camperaCuerinaS=new Producto("campera","Cuerina","Negro","S", 2200, 10)

const camperaCuerina =[];


// ARRAY DE TODAS LAS CAMPERAS
const camperas = [];


// ingreso elementos a arrays vacios
pantalonJean.push(pantalonJeanXL, pantalonJeanL, pantalonJeanM, pantalonJeanS, pantalonJeanXS);
pantalonEngomado.push(pantalonEngomadoXL,pantalonEngomadoL,pantalonEngomadoM,pantalonEngomadoS);
pantalones.push(pantalonJean, pantalonEngomado);
camperaPuffer.push(camperaPufferXL, camperaPufferL, camperaPufferM, camperaPufferS);
camperaCuerina.push(camperaCuerinaXL, camperaCuerinaL, camperaCuerinaM, camperaCuerinaS);
camperas.push(camperaPuffer, camperaCuerina);

// CAMBIO LA CANTIDAD DEL STOCK EN LOS PANTALONES DE JEAN TALLE XL A 3
pantalonJeanXL.cambiarCantidad(3); 

// CAMBIO EL PRECIO DE TODOS LOS TALLES DE PANTALON ENGOMADO A 1650
for(const pantalon of pantalonEngomado){ 
    pantalon.cambiarPrecio(1650)
}

//ELIMINO OBJETO DE PANTALON JEAN
const eliminar = (nombre)=>{
    let index = pantalonJean.indexOf(nombre)
    if (index != -1){
        pantalonJean.splice(index,1)
    }
}
eliminar(pantalonJeanXS) 

console.log(camperas, pantalones); 


// ***** ALGORITMO PARA CALCULAR COSTO TOTAL DE PRODUCTOS SELECCIONADOS ******

let totalCompra = 0

// SE SOLICITA SELECCIONAR PRODUCTO DESEADO
let productoSeleccionado = parseInt(
    prompt(`Ingresar el tipo de producto que quiere agregar al carrito 1.Pantalon jean con tachas - 2.Pantalon engomado negro - 3.Campera puffer - 4.Campera cuerina`)
    )

let aniadirMasProductos = true
let decidir
while(aniadirMasProductos===true){
    if(productoSeleccionado === 1){
        totalCompra = totalCompra+ pantalonJeanXL.precio
    }else if(productoSeleccionado === 2){
        totalCompra = totalCompra+ pantalonEngomadoXL.precio
    }else if(productoSeleccionado === 3){
        totalCompra = totalCompra+ camperaPufferXL.precio
    }else if(productoSeleccionado === 4){
        totalCompra = totalCompra+ camperaCuerinaXL.precio
    }else{
        productoSeleccionado=parseInt(prompt(`Ingresar producto válido 1.Pantalon jean con tachas - 2.Pantalon engomado negro - 3.Campera puffer - 4.Campera cuerina`))
        continue
    }

decidir = parseInt(prompt(`Desea continuar comprando? 1.SI 2.NO`)) // DECISIÓN PARA CONTINUAR AÑADIENDO PRODUCTOS


if(decidir===1){
    productoSeleccionado = parseInt(prompt(`Ingresar el tipo de producto que quiere agregar al carrito 1.Pantalon jean con tachas - 2.Pantalon engomado negro - 3.Campera puffer - 4.Campera cuerina`))
    
    
}else if(decidir===2){
    aniadirMasProductos = false
    
}
}
alert(`el valor total de la compra es: `+ totalCompra) // VALOR TOTAL DE LOS PRODUCTOS SELECCIONADOS

function calcularPrecioConCupon(valor){      // SI SE TIENE CUPON SE HACE DESCUENTO
    let descuento = 0
    let cupon = parseInt(prompt(`Ingresar cupón para acceder a un descuento: `))
    if(cupon===100005){
        descuento = 5
    }else if(cupon===100010){
        descuento = 10
    }else{
        descuento = 0
    }
    let valorDescuento = valor*(descuento/100)
    valor=valor-valorDescuento
    return valor
}
let valorConDescuento= calcularPrecioConCupon(totalCompra)
alert(`El costo final de su compra es: `+ valorConDescuento)


