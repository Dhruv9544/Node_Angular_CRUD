const mongoose = require('mongoose')

const CategorySchema = new mongoose.Schema({

    CategoryName:{
        type:String,
        required:['true','Please enter CategoryName'],
        trim:true,
        unique:true
    }
})

module.exports = mongoose.model('Category',CategorySchema)