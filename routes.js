import express from 'express'
import products from './api/productos.js'
const { Router } = express
const router = Router()

let productos = [
  {
    title: "Pan",
    price: 25.45,
    thumbnail: "url1",
    id: 1
  },
  {
    title: "Aceite",
    price: 74.56,
    thumbnail: "url2",
    id: 2
  },
  {
    title: "Azucar",
    price: 45.67,
    thumbnail: "url3",
    id: 3
  }
]

const prod = new products(productos)


router
.route('/productos')
.get((req, res) => {
    // res.send(productos); Solución previa
    prod.getAll().then(resp => res.send(resp))
})
.post((req, res) => {
    // const newProducto = {
    //     ...req.body,
    //     id: productos.length + 1
    // }
    // productos.push(newProducto) SOLUCIONPREVIA
    prod.save(req.body).then(resp => res.send(resp))
})

router
.route('/productos/:id')
.get((req, res) => {
  prod.getById(parseInt(req.params.id)).then(resp => res.send(resp))
    // SOLUCION PREVIA
    // const id = req.params.id 
    // console.log(id);
    // const productById = productos.map(obj => {
    //     return obj.id
    // })
    // console.log(productById);
    // if(isNaN(id)) {
    //     res.json({error: "La id indicada no es un número"})
    // }
    // if(id > productos.length || id < 1) {
    //     res.json({error: "Producto no encontrado"})
    // } else {
    //     res.json({Producto: productos[id-1]})
    // }
// En esta sección, intenté usar un ternario desde la función
// productById.includes(id) ? res.json({verdadero: "esteEsTuProducto"}) : res.json({falso: "el producto solicitado no existe"})
// Sin embargo, este siempre me daba resultado negativo; asimismo, al tratar de reemplazar el método por find( id => id === id), el resultado
// resultaba siempre positivo. ¿Existe alguna forma con más estilo, más prolija y sofisticada, de resolver este get, echando mano de algunos métodos?
})
.delete((req, res) => {
  prod.deleteById(parseInt(req.params.id)).then(resp => res.send(resp))
    // SOLUCION PREVIA
    // try {
    //   const id = parseInt( req.params.id )
    //   const getProdById = await DATA_BASE.getProductById( id )
    //   if ( getProdById ) {
    //     res.json( getProdById )
    //   } else {
    //     res.json( { message: 'No product id provided' } )
    //   }
    // } catch ( err ) {
    //   console.log( err )
    // } 
})
.put((req, res) => {
  prod.updateById((parseInt(req.params.id)), (req.body)).then(resp => res.send(resp))
  // será necesario añadir la data a través de la url
})  
  





export default router