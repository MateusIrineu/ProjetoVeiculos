import express from 'express'
import dotenv from 'dotenv'
import routeVeiculo from './Veiculos/src/modules/veiculos/routes/veiculos.route.js'

dotenv.config()

const port = process.env.PORTA

const app = express()

app.use(express.json())

app.use(routeVeiculo)

app.listen(port, () => {
    console.log(`Rodando em http://localhost:${port}`)
})