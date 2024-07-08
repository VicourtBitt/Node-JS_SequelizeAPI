const dataSource = require("../models")

class Services {
    constructor (model) {
        this.model = model
    }

    async getEveryRegister () {
        // Esse comando é um SELECT * FROM TABELA-X
        return dataSource[this.model].findAll()
    }

    async getRegisterById (id) {
        // Esse comando é um SELECT * FROM TABELA-X WHERE ALGO
        return dataSource[this.model].findByPk(id)
    }

    async createRegister (registerInput) {
        // Esse comando é um INSERT {params} INTO TABELA-X
        return dataSource[this.model].create(registerInput)
    }

    async updateRegister (newInfo, whereId) {
        // Me esqueci a nomenclatura correta em SQL para esse comando, mas é um atualizador de informação
        const updatedRegisters = dataSource[this.model].update(newInfo, {where: {id: whereId}})
        if (updatedRegisters[0] === 0) {
            return false
        }
        return true
    }

    async deleteRegister (id) {
        return dataSource[this.model].destroy({where: {id: id}})
    }
}

module.exports = Services