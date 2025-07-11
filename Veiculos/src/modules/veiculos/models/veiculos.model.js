import veiculos from "../../../config/database";

class VeiculoModel {

    static cadastrar(id, modelo, marca, ano, placa, cor) {
        veiculos.push({ id, modelo, marca, ano, placa, cor })
    }

    static listarPorId(id) {
        const veiculo = veiculos.find(veiculo => veiculo.id === id)
        return veiculo
    }

    static listarTodos() {
        const veiculo = veiculos.map(veiculo => veiculo)
        return veiculo
    }

    static atualizar(id, novoModelo, novaMarca, novoAno, novaPlaca, novaCor) {
        const veiculo = veiculos.find(veiculo => veiculo.id === id)

        veiculo.modelo = novoModelo || veiculo.modelo;
        veiculo.marca = novaMarca || veiculo.marca;
        veiculo.ano = novoAno || veiculo.ano;
        veiculo.placa = novaPlaca || veiculo.placa;
        veiculo.cor = novaCor || veiculo.cor;
        return veiculo
    }

    static deletarPorID(id) {
        const index = veiculos.findIndex(veiculo => veiculo.id === id)
        if(index === -1) {
            return null
        }
        veiculos.splice(index, 1)
            return true
    }

    static deletarTodos() {
        veiculos.length = 0;
        return true
    }
}

export default VeiculoModel;