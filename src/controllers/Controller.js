class Controller {
    constructor (serviceToReceive) {
        this.service = serviceToReceive
    }
    
    async getAll (req, res) {
        try {
            const allRegisters = await this.service.getEveryRegister()
            return res.status(200).json(allRegisters)
        } catch (error) {
            return res.status(500).json({ errorMessage: "Não foi possível resgatar todos os registros."})
        }
    }

    async getById (req, res) {
        const { id } = req.params
        try {
            const selectedRegister = await this.service.getRegisterById(id)
            return res.status(200).json(selectedRegister)
        } catch (error) {
            return res.status(500).json({ errorMessage: "Não foi possível resgatar o registro."})
        }
    }

    async createNewRegister (req, res) {
        const infoToInsert = req.body
        try {
            const newRegister = await this.service.createRegister(infoToInsert)
            return res.status(201).json({newRegister})
        } catch (error) {
            return res.status(500).json({ errorMessage: "Não foi possivel criar novo registro"})
        }
    }

    async updateInfo (req, res) {
        const {id} = req.body
        const newInfo = req.body
        try {
            const isUpdated = await this.service.updateRegister(newInfo, Number(id))
            if (!isUpdated) {
                return res.status(400).json({ message: "Nenhum registro foi atualizado"})
            }
            return res.status(200).json({message: "Atualizado com sucesso"})
        } catch (error) {

        }
    }

    async deleteInfo (req, res) {
        const { id } = req.body
        try {
            await this.service.deleteRegister(Number(id))
            return res.status(200).json({message: `O item de index ${id} foi deletado`})
        } catch (error) {

        }
    }
}

module.exports = Controller