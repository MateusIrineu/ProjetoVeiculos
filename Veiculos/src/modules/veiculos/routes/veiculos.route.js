import express from 'express'
import VeiculoController from '../controllers/veiculo.controller.js';

const router = express.Router()

router.get("/veiculos", VeiculoController.listarTodos);

router.get("/veiculo/:id", VeiculoController.listarPorId);

router.post("/veiculo/cadastrar", VeiculoController.cadastrar);

router.patch("/veiculo/atualizar/:id", VeiculoController.atualizar);

router.delete("/veiculo/deletar/:id", VeiculoController.deletarPorId)

router.delete("/veiculos", VeiculoController.deletarTodos)

export default router