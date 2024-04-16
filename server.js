const express = require('express')
const cors = require('cors')
require('./config/dbconfig').getDbConnetion()
const UserController = require('./Controller/UserController')
const CategoryRoutes = require('./routes/CategoryRoutes')
const GetUserController = require('./Controller/getUserController')
const app = express()


//middleware
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors())

app.post('/signup',UserController.signup)
app.post('/login',UserController.login)

app.use('/',CategoryRoutes)



// app.get('/getuser',GetUserController.getUser)
app.listen(9999)
console.log("server started at 9999");