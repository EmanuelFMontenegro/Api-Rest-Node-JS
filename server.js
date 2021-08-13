const express = require('express')
const mysql2  = require('mysql2')
const myconn  = require ('express-myconnection')
const cors    = require('cors')


const routes = require('./routes')

const app = express()
app.set('port',process.env.PORT ||9000)

const dbOptions = {
    host: 'localhost',
    port:3306,
    user: 'root',
    password:'password',
    database:'dbsensores' 

}
//middleware-----------------------------

app.use(myconn(mysql2, dbOptions,'single'))
app.use(express.json())
app.use(cors())

// rutas---------------------------------
app.get('/',(req,res)=>{
res.send('BIENVENIDO A TU API')
 
 
})

app.use('/api', routes)


// iniciando server----------------------
app.listen(app.get('port'), ()=>{
   console.log('server running on port',app.get('port'))

})


