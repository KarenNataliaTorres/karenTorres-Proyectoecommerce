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
            <div class="card catalogo_tarjeta efectoTarjeta " style="width: 18rem;">
              <img src=${this.img} class="card-img-top ajusteImagen" alt="foto del producto">
              <div class="card-body">
               <h5 class="card-title">${this.nombre}</h5>
               <p class="card-text">${this.desc}</p>
               <button id=${this.id} class="btn btn-primary class="boton-agregar"">Agregar al carrito $${this.precio}</button>
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
const contenedorCarrito = document.getElementById('carrito-contenedor')
const botonVaciar = document.getElementById('vaciar-carrito')
const contadorCarrito = document.getElementById('cartCounter')

//CONSTANTES
const cantidad = document.getElementById('cantidad')
const precioTotal = document.getElementById('precioTotal')
const cantidadTotal = document.getElementById('cantidadTotal')

//json
document.addEventListener('DOMContentLoaded', () => {
     if (localStorage.getItem('carrito')){
        carrito = JSON.parse(localStorage.getItem('carrito'))
        actualizarCarrito()
    } 
})

//BOTON VACIAR CARRITO
botonVaciar.addEventListener('click', () => {
    carrito.length = 0
    actualizarCarrito()
    localStorage.removeItem(`carrito`, JSON.stringify(carrito))
})

//PUSHEO PRODUCTOS AL ARRAY PRODUCTOS
productos.push(pantalonJeanWideLeg, pantalonJeanSkinny, pantalonJeanOxford, pantalonEngomado, pantalonEngomadoVerde, pantalonEngomadoCamel,camperaPufferNegra, camperaPufferRosa, camperaPufferCamel,camperaCuerinaNegra,camperaCuerinaCamel,camperaCuerinaPlatinada)
console.log(productos)

//A CADA PRODUCTO SE LE APLICA DESPLEGAR PRODUCTO
productos.forEach(e =>{
    e.desplegarProductos()
})
productos.forEach(e =>{
    e.agregarEvento()
})

//FUNCION AGREGAR AL CARRITO

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
actualizarCarrito()
console.log(carrito)
contador.innerHTML = carrito.reduce((acc,prod)=> acc + prod.cantidad, 0)

}
// CONTADOR DE CANTIDAD DE CADA PRODUCTO
const contador = document.getElementById(`cartCounter`)
contador.innerHTML = carrito.reduce((acc,prod)=> acc + prod.cantidad, 0)

// ELIMINAR DEL CARRITO
const eliminarDelCarrito = (prodId) => {
    const item = carrito.find((prod) => prod.id === prodId)

    const indice = carrito.indexOf(item) //Busca el elemento q yo le pase y nos devuelve su indice.

    carrito.splice(indice, 1) //Le paso el indice de mi elemento ITEM y borro un elemento 

    actualizarCarrito() //LLAMAMOS A LA FUNCION actualizarCarrito CADA VEZ Q SE MODIFICA EL CARRITO
    console.log(carrito)
}

//ACTUALIZAR CARRITO
const actualizarCarrito = ()=>{
    contenedorCarrito.innerHTML=""

    carrito.forEach((prod) => {
        const div = document.createElement('div')
        div.className = ('productoEnCarrito')
        div.innerHTML = `
        <p>${prod.nombre}</p>
        <p>Precio:$${prod.precio}</p>
        <p>Cantidad: <span id="cantidad">${prod.cantidad}</span></p>
        <button onclick="eliminarDelCarrito(${prod.id})" class="boton-eliminar"><i class="fas fa-trash-alt"></i></button>
        `
        contenedorCarrito.appendChild(div)
        
        localStorage.setItem('carrito', JSON.stringify(carrito))

    })
    contadorCarrito.innerText = carrito.length // actualizo con la longitud del carrito.
    precioTotal.innerText = carrito.reduce((acc, prod) => acc + prod.cantidad * prod.precio, 0)
    //Por cada producto q recorro en mi carrito, al acumulador le suma la propiedad precio, con el acumulador
    //empezando en 0.
    
}

// MODAL CARRITO 

const contenedorModal = document.getElementsByClassName('modal-contenedor')[0]
const botonAbrir = document.getElementById('boton-carrito')
const botonCerrar = document.getElementById('carritoCerrar')
const modalCarrito = document.getElementsByClassName('modal-carrito')[0]

//boton con icono de carrito cuando lo apreto despliega modal y cuando lo vuelvo a precionar oculta modal
botonAbrir.addEventListener('click', ()=>{
    contenedorModal.classList.toggle('modal-active')
})
// boton de cerrar modal
botonCerrar.addEventListener('click', ()=>{
    contenedorModal.classList.toggle('modal-active')
})
// cuando hago un click se cierra al igual q con el boton cerrar modal
contenedorModal.addEventListener('click', (event) =>{
    contenedorModal.classList.toggle('modal-active')

})
modalCarrito.addEventListener('click', (event) => {
    event.stopPropagation() //cuando clickeo sobre el modal se finaliza la propagacion del click a los elementos
    //padre
})

// FUNCIONALIDAD DE COMPRAR - USO LIBRERIA SWEET ALERT Y LA MODIFICO
const botonComprar = document.getElementById(`comprar`)
botonComprar.addEventListener(`click`,ejecutarCompra)
function ejecutarCompra(){
    Swal.fire({
        title: 'Mi Compra',
        text: `Importe total: $${precioTotal.innerText = carrito.reduce((acc, prod) => acc + prod.cantidad * prod.precio, 0)} 
        - Ingresar los datos de la Tarjeta `,
        input: 'text',
        inputAttributes: {
          autocapitalize: 'off',
          placeholder:`Ingrese el número de su tarjeta`
        },
        
        showCancelButton: true,
        confirmButtonText: 'Confirmar Compra',
        showLoaderOnConfirm: true,
        preConfirm: (login) => {
          return fetch(`//api.github.com/users/${login}`)
            .then(response => {
              if (!response.ok) {
                throw new Error(response.statusText)
              }
              return response.json()
            })
            .catch(error => {
              Swal.showValidationMessage(
                `Request failed: ${error}`
              )
            })
        },
        allowOutsideClick: () => !Swal.isLoading()
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: `Su compra fue exitosa`,
            imageUrl: `https://media.istockphoto.com/vectors/finalise-sale-shopping-cart-icon-vector-id846434820?k=20&m=846434820&s=170667a&w=0&h=WMlngTvXHR9Fb4TINZbuWBGovMHL3TZb0MSCL5iG_AY=`
          })
        }
      })
}

//FETCH PARA DESPLEGAR CATALOGO ZAPATOS 
const grillaProductos = document.getElementById("containerFetch")
fetch(`/javascript/productos.json`)
.then((res)=>res.json())
.then((data=>{
    
    data.forEach(product => {
        const card = `
            <div class="card catalogo_tarjeta efectoTarjeta " style="width: 18rem;">
              <img src=${product.img} class="card-img-top ajusteImagen" alt="foto del producto">
              <div class="card-body">
               <h5 class="card-title">${product.nombre}</h5>
               <p class="card-text">${product.talles}</p>
               <button id=${product.id} class="btn btn-primary class="boton-agregar"">Agregar al carrito $${product.precio}</button>
              </div>
            </div>
        `        
        grillaProductos.innerHTML += card  
    })
}))