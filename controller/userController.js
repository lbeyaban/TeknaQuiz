let userController = {}
const { resource } = require('../app')
const services = require('../services')



userController.register = async function (req, res , next) {

    let rs = await services.userService.register(req.body.ad, req.body.email, req.body.sifre, req.body.sinif, req.body.yetki, req.body.sube)

    req.flash("flashSuccess" , "Islem Basarili")

    res.redirect('/')

}

module.exports = userController