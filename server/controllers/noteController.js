const {Type} = require('../models/models')
const ApiError = require('../error/ApiError');


class NoteController {
    async create(req, res) {
        const {name, id_patient, id_doctor, date, text, recomendation} = req.body
        const type = await Type.create({name, id_patient, id_doctor, date, text, recomendation})
        return res.json(type)

    }

    async getAll(req, res) {
        let {id_patient, id_doctor, page, limit} = req.query
        page = page || 1
        limit = limit || 9
        let offset = page * limit - limit
        let types;
        if (!id_patient && !id_doctor) {
            types = await Type.findAndCountAll({limit, offset})
        }
        if(id_patient && !id_doctor){
            types = await Type.findAndCountAll({where:{id_patient}, limit, offset})
        }
        if(!id_patient && id_doctor){
            types = await Type.findAndCountAll({where:{id_doctor}, limit, offset})
        }
        if(id_patient && id_doctor){
            types = await Type.findAndCountAll({where:{id_patient, id_doctor}, limit, offset})
        }
        return res.json(types)
    }

    async getOne(req, res) {
        const {id} = req.params
        const type2 = await Type.findOne({where: id}, )
        return res.json(type2)
    }

}

module.exports = new NoteController()
