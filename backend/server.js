require('dotenv').config()
const express= require('express')
const Blogrouter = require('./router/blogroute')
const mongoose = require('mongoose')
const app = express()



mongoose.connect(process.env.MONGO_URI)
    .then(()=>{ app.listen(process.env.PORT,()=>{
        console.log('connected to db and listening on port',process.env.PORT)
    })}
       
    )
    .catch((err)=>{
        console.log(err.message,'here is the error')
    })
    

app.use((req,res,next)=>{
    console.log(req.path,req.method)
    next()
})

app.use(express.json())

app.use('/api/blogs',Blogrouter)