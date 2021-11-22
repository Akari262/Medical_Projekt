const ApiError = require('../error/ApiError')
const {User} = require('../models/models')
const bcrypt = require ('bcrypt')
const jwt = require ('jsonwebtoken')

const generateJwt = (id, email, role) => {
    return jwt.sign(
        {id, email, role},
        process.env.SECRET_KEY,
        {expiresIn: '24h'})
}

class UserController {
    async registration(req, res, next) {
        const {email, password, first_name, last_name, date_of_birth, role} = req.body
        if (!email || !password) {
            return next(ApiError.badRequest('Неправильний Email або пароль'))
        }
        const candidate = await  User.findOne({where: {email}})
        if(candidate) {
            return next(ApiError.badRequest('Користувач з таким Email-ом уже зареєстрований'))
        }
        const hashPassword = await bcrypt.hash(password, 5)
        const user = await User.create({email, first_name, last_name, date_of_birth, role, password: hashPassword})
        const token = generateJwt(user.id, user.email, user.role)
        return res.json({token})
    }

    async login(req, res, next) {
        const {email, password} = req.body
        const user = await  User.findOne({where: {email}})
        if(!user) {
            return next(ApiError.badRequest('Користувач з таким Email-ом неіснує'))
        }
        let comparePassword = bcrypt.compareSync(password, user.password)
        if(!comparePassword) {
            return next(ApiError.badRequest('Пароль неправильний'))
        }
        const token = generateJwt(user.id, user.email, user.role)
        return res.json({token})
    }

    async check(req, res, next) {
        const token = generateJwt(req.user.id, req.user.email, req.user.role)
        return res.json({token})
    }
}

module.exports = new UserController()
