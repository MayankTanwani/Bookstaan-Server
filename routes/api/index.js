const route = require('express').Router()

route.use('/messages', require('./message'))
route.use('/user',require('./user'))
route.use('/wishlist', require('./wishlist'))
route.use('/listings',require('./listings'))

exports = module.exports = route