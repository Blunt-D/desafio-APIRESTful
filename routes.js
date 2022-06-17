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
    const newProducto = req.body;    
    productos.push(newProducto)
    res.sendStatus(201)
})

export default router