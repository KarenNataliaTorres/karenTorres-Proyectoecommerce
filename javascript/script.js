// ***** CLASE PRODUCTOS *****

class Producto{
    constructor(nombre, id , img, desc= '', precio, cantidad ){
        this.nombre=nombre;
        this.id=id;
        this.img=img;
        this.desc=desc;
        this.precio=precio;
        this.cantidad=cantidad;
    }
    cambiarPrecio(nuevoPrecio){         //METODO PARA CAMBIAR PRECIO
        this.precio=nuevoPrecio;
    }
    cambiarCantidad(nuevaCantidad){     //METODO PARA CAMBIAR STOCK
        this.cantidad=nuevaCantidad;
    }
    desplegarProductos(){               //METODO PARA DESPLEGAR LOS PRODUCTOS EN TARJETAS
        const card = `
            <div class="card catalogo_tarjeta " style="width: 18rem;">
              <img src=${this.img} class="card-img-top" alt="foto del producto">
              <div class="card-body">
               <h5 class="card-title">${this.nombre}</h5>
               <p class="card-text">${this.desc}</p>
               <button id=${this.id} class="btn btn-primary">Precio del producto $${this.precio}</button>
              </div>
            </div>
        `
        const container = document.getElementById(`container`)
        container.innerHTML += card 
    }
    agregarEvento(){                    //METODO PARA QUE AL HACER CLICK SE AGREGUEN PRODUCTOS AL CARRITO
        const btnAgregar = document.getElementById(this.id)
        const productoEncontrado = productos.find(productos => productos.id === this.id)
        btnAgregar.addEventListener(`click`,()=>agregarAlCarrito(productoEncontrado))
    }
}
//  **** PRODUCTOS ****

//PANTALONES JEAN 
const pantalonJeanWideLeg=new Producto("Pantalon Jean WIDE leg","wideLeg","https://f.fcdn.app/imgs/40d236/phirastore.com.uy/phiruy/741f/original/catalogo/w244_w244_1/460x690/jean-wide-leg-jean-wide-leg.jpg","talles XL,L,M,S", 1200,10)
const pantalonJeanSkinny=new Producto("Pantalon Jean Skinny","skinny","https://studiofco.vteximg.com.br/arquivos/ids/1300874-1000-1071/-stfco-producto-Skinny-AZULOSCURO-S139665-1.jpg?v=637859185121600000","talles XL,L,M,S", 1300,10)
const pantalonJeanOxford=new Producto("Pantalon Jean Oxford","Oxford","https://f.fcdn.app/imgs/8c0669/www.danielcassin.com.uy/dcs/922f/original/catalogo/272833407-33-01/1920-1200/jean-oxford-madrid-tm-azul.jpg","talles XL,L,M,S", 1250,10)

//PANTALON ENGOMADO NEGRO
const pantalonEngomado=new Producto("Pantalon Engomado Negro","engomadoN","https://www.distritomoda.com.ar/sites/default/files/styles/producto_interior/public/imagenes/ce62ac46-a7f7-4f89-864d-5f44ddbef68e_1651452132.jpeg?itok=xT8_rKAh","talles XL,L,M,S", 2200,10)
const pantalonEngomadoVerde=new Producto("Pantalon Engomado Verde","engomadoV","https://f.fcdn.app/imgs/60f2cd/www.puntored.uy/preduy/80af/original/catalogo/602221300705_01_1/2000-2000/pantalon-engomado-pierna-ancha-7-8-simone-verde.jpg","talles XL,L,M,S", 2200,10)
const pantalonEngomadoCamel=new Producto("Pantalon Engomado Camel","engomadoC","https://www.babilonia.com.uy/wp-content/uploads/2022/03/cul2-min.jpg","talles XL,L,M,S", 2200,10)

//CAMPERAS PUFFER
const camperaPufferNegra=new Producto("Campera Puffer color negro","pufferN","https://d2r9epyceweg5n.cloudfront.net/stores/001/412/982/products/img-20220206-wa0053-56db5973905867cc5b16448902156847-1024-1024.jpg","talles XL,L,M,S", 2200,10)
const camperaPufferRosa=new Producto("Campera Puffer color Rosa","PufferR","https://mandyofficial.com/wp-content/uploads/2022/04/IMG_7542-scaled-e1651590667559.jpg","talles XL,L,M,S", 2200,10)
const camperaPufferCamel=new Producto("Campera Puffer color Camel","pufferC","https://d3ugyf2ht6aenh.cloudfront.net/stores/001/183/182/products/copia-de-yoko151901-a2b9ded83f83529c6c16487376705962-1024-1024.jpg","talles XL,L,M,S", 2200,10)

//CAMPERAS CUERINA
const camperaCuerinaNegra=new Producto("Campera de cuerina color negro","CuerinaN","https://static.zara.net/photos///2022/S/0/1/p/3046/050/800/2/w/232/3046050800_15_1_1.jpg?ts=1654513697543","talles XL,L,M,S", 2500,10)
const camperaCuerinaCamel=new Producto("Campera de cuerina color camel","CuerinaC","https://www.liola.cl/pub/media/catalog/product/cache/4fd94122ce9049ee0590091261a19421/8/9/893575_2_3.jpg","talles XL,L,M,S", 2200,10)
const camperaCuerinaPlatinada=new Producto("Campera de cuerina color platinado","CuerinaP","https://prilov-laravel-production.s3.amazonaws.com/public/product/images/000/260/429/2-5c66570d02865.jpg","talles XL,L,M,S", 2300,10)

// CAMBIO LA CANTIDAD DEL STOCK EN LOS PANTALONES DE JEAN TALLE XL A 3
camperaPufferRosa.cambiarCantidad(3); 

// CAMBIO EL PRECIO DE TODOS LOS TALLES DE PANTALON ENGOMADO A 1650

camperaPufferCamel.cambiarPrecio(2650)


// **** CARRITO DE COMPRAS ****//
let productos = [];
let carrito =[];
productos.push(pantalonJeanWideLeg, pantalonJeanSkinny, pantalonJeanOxford, pantalonEngomado, pantalonEngomadoVerde, pantalonEngomadoCamel,camperaPufferNegra, camperaPufferRosa, camperaPufferCamel,camperaCuerinaNegra,camperaCuerinaCamel,camperaCuerinaPlatinada)
console.log(productos)
productos.forEach(e =>{
    e.desplegarProductos()
})
productos.forEach(e =>{
    e.agregarEvento()
})
function agregarAlCarrito(producto){
let enCarrito = carrito.find(prod => prod.id ===producto.id)
if(!enCarrito){
    carrito.push({...producto,cantidad:1})
}else{
    let carritoFiltrado = carrito.filter(prod =>prod.id != producto.id)
    carrito =[
        ...carritoFiltrado,
        {...enCarrito, cantidad: enCarrito.cantidad + 1}
    ]
}
console.log(carrito)
contador.innerHTML = carrito.reduce((acc,prod)=> acc + prod.cantidad, 0)
}

const contador = document.getElementById(`cartCounter`)
contador.innerHTML = carrito.reduce((acc,prod)=> acc + prod.cantidad, 0)

// ***** ALGORITMO PARA CALCULAR COSTO TOTAL DE PRODUCTOS SELECCIONADOS ******

let totalCompra = 0

// SE SOLICITA SELECCIONAR PRODUCTO DESEADO
let productoSeleccionado = parseInt(
    prompt(`Ingresar el tipo de producto que quiere agregar al carrito 1.pantalonJeanWideLeg - 2.Pantalon engomado negro - 3.Campera puffer negra - 4.Campera cuerina negra`)
    )

let aniadirMasProductos = true
let decidir
while(aniadirMasProductos===true){
    if(productoSeleccionado === 1){
        totalCompra = totalCompra+ pantalonJeanWideLeg.precio
    }else if(productoSeleccionado === 2){
        totalCompra = totalCompra+ pantalonEngomado.precio
    }else if(productoSeleccionado === 3){
        totalCompra = totalCompra+ camperaPufferNegra.precio
    }else if(productoSeleccionado === 4){
        totalCompra = totalCompra+ camperaCuerinaNegra.precio
    }else{
        productoSeleccionado=parseInt(prompt(`Ingresar producto válido 1.pantalonJeanWideLeg - 2.Pantalon engomado negro - 3.Campera puffer negra - 4.Campera cuerina negra`))
        continue
    }

decidir = parseInt(prompt(`Desea continuar comprando? 1.SI 2.NO`)) // DECISIÓN PARA CONTINUAR AÑADIENDO PRODUCTOS


if(decidir===1){
    productoSeleccionado = parseInt(prompt(`Ingresar el tipo de producto que quiere agregar al carrito 1.pantalonJeanWideLeg - 2.Pantalon engomado negro - 3.Campera puffer negra - 4.Campera cuerina negra`))
    
    
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
 