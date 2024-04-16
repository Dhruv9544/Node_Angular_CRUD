const express = require('express')
const CategoryController = require('../Controller/CategoryController')

const route = express.Router()

route.post('/addcategory',CategoryController.addCategory)
route.get('/allcategory',CategoryController.getAllCategory)
route.delete('/deletecategory/:CategoryId',CategoryController.deleteCategory)
route.put('/updatecategory/:CategoryId',CategoryController.updateCategory)

module.exports = route