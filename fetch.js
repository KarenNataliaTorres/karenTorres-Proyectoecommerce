//FETCH
fetch(`/javascript/productos.json`)
.then((res)=>res.json())
.then((data=>{
    let grillaProductos = document.getElementsByClassName("shop-content")[0]
    data.forEach(product => {
        const div = document.createElement(`div`)
        div.classList.add(`card`)
        div.classList.add(`text-center`)
        div.classList.add(`mb-2`)
        div.classList.add(`rounded`)
        div.classList.add(`card-margin`)
        
        div.innerHTML = `
        <img src="${product.image}" class="card-img-top product-image" alt="#">
        <div class="card-body">
           <h5 class="card-title productName">${product.name}</h5>
           <p class="card-text description">${product.description}</p>
           <h5 class="text-success price">Precio:${product.price}</h5>
           <button class="btn btn-danger btn-outlin e-light addToCart" data-product-id="${product.id}">Agregar al carrito</button>
        </div>`
        div.getElementsByClassName("addToCart")[0].addEventListener(`click`, addToCart)
        grillaProductos.append(div)
        
    })
}))

