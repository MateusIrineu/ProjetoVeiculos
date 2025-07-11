import VeiculoModel from "../models/veiculos.model";

class VeiculoController {
    static cadastrar(req, res) {
        try {
            const { id, modelo, marca, ano, placa, cor } = req.body;
            if(!id || !modelo || !marca || !ano || !placa || !cor) {
               return res.status(400).json({ message: 'Erro do cliente.' })
            }

            VeiculoModel.cadastrar(id, modelo, marca, ano, placa, cor)
            res.status(201).json({ message: 'Veículo cadastrado com sucesso!' })
        } catch (error) {
            res.status(500).json({ message: 'Erro interno do servidor. Por favor, tente mais tarde', erro: error.message });
        }
    }

    static listarTodos(req, res) {
        try {
            const veiculos = VeiculoModel.listarTodos()
            if(veiculos.length === 0) {
                return res.status(200).json({ message: 'Banco de dados vazio!' })
            }
            res.status(200).json(veiculos)
        } catch (error) {
            res.status(500).json({ message: 'Erro interno do servidor. Por favor, tente mais tarde', erro: error.message });
        }
    }

    static listarPorId(req, res) {
        try {
            const id = parseInt(req.params.id)
            const veiculo = VeiculoModel.listarPorId(id)

            if(!veiculo) {
                return res.status(404).json({ message: 'Veículo não encontrado' })
            }

            res.status(200).json(veiculo)

        } catch (error) {
            res.status(500).json({ message: 'Erro interno do servidor. Por favor, tente mais tarde', erro: error.message })
        }
    }

    static atualizar(req, res) {
        try {
            const { novoModelo, novaMarca, novoAno, novaPlaca, novaCor } = req.body
            const id = parseInt(req.params.id)
            VeiculoModel.atualizar(id, novoModelo, novaMarca, novoAno, novaPlaca, novaCor)
            res.status(200).json({ message: 'Veículo atualizado com sucesso!' })
        } catch (error) {
            res.status(500).json({ message: 'Erro interno do servidor. Por favor, tente mais tarde', erro: error.message })
        }
    }

    static deletarPorId(req, res) {
        try {
            const id = parseInt(req.params.id)
            const veiculo = VeiculoModel.deletarPorID(id)
            if(!veiculo === null) {
                return res.status(404).json({ message: 'Veículo não encontrado' })
            }
            return res.status(200).json({ message: 'Veículo deletado com sucesso.' })
        } catch (error) {
            res.status(500).json({ message: 'Erro interno do servidor. Por favor, tente mais tarde', erro: error.message })
        }
    }

    static deletarTodos(req, res) {
        try {
            VeiculoModel.deletarTodos()
            res.status(200).json({ message: 'Todos os veículos foram deletados!' })
        } catch (error) {
             res.status(500).json({ message: 'Erro interno do servidor. Por favor, tente mais tarde', erro: error.message })
        }
    }
}

export default VeiculoController;