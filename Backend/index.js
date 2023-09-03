const express = require('express')
const app = express()
const apirouter = require('./routes/api')
const cors = require('cors')

app.use(cors())
app.use(express.json())
app.use('/api', apirouter)
app.use('/',express.static('public')) 
////?


app.listen(3000, ()=> 
{
    console.log("Listening on port 3000")
})
