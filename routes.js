import express from 'express'
const { Router } = express

const router = Router()

const productos = []

router
.route('/productos')
.get((req, res) => {
    res.send(productos);
})
.post((req, res) => {
    const newProducto = {
        ...req.body,
        id: productos.length + 1
    }
    productos.push(newProducto)
    res.sendStatus(201)
})

router
.route('/productos/:id')
.get((req, res) => {
    const id = req.params.id
    console.log(id);
    const productById = productos.map(obj => {
        return obj.id
    })
    console.log(productById);
    if(isNaN(id)) {
        res.json({error: "La id indicada no es un número"})
    }
    if(id > productos.length || id < 1) {
        res.json({error: "Producto no encontrado"})
    } else {
        res.json({Producto: productos[id-1]})
    }
// En esta sección, intenté usar un ternario desde la función
// productById.includes(id) ? res.json({verdadero: "esteEsTuProducto"}) : res.json({falso: "el producto solicitado no existe"})
// Sin embargo, este siempre me daba resultado negativo; asimismo, al tratar de reemplazar el método por find( id => id === id), el resultado
// resultaba siempre positivo. ¿Existe alguna forma con más estilo, más prolija y sofisticada, de resolver este get, echando mano de algunos métodos?
})
.delete((req, res) => {
    const id = req.params.id
    console.log(id);
    const productosMenosUno = productos.splice(id - 1, 1)
    if(productosMenosUno = [ ]){
        res.json({error: "Este producto ya fue eliminado"})
    }
    res.json({Productos: productosMenosUno})

    res.status(204).send("Producto eliminado")
})
// Nota para mi: no podemos trabajar con los índices a la hora
// de eliminar productos: varían al borrar los productos. Es necesario
// acceder a la propiedad id.



export default router