import express from 'express'
import router from './routes.js';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

const port = 8080

const app = express()


//Middleware ORDEN IMPORTA
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use("/static", express.static(__dirname + "/public"))
app.use('/api', router) 


app.listen(port, () => {
    console.log(`El servidor está escuchando en el puerto ${port}`);
})