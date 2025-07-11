import express from 'express'
import dotenv from 'dotenv'
import routeVeiculo from "./src/modules/veiculos/routes/veiculos.route.js"

const port = process.env.PORTA

const app = express()

app.use(express.json())

app.use(routeVeiculo)

app.listen(port, () => {
    console.log(`Rodandoem http://localhost:${port}`)
})