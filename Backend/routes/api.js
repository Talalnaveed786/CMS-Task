const router = require('express').Router()
const playersRouter = require('./players')


// router.get('/',(req,res)=>
// {
//     res.send("Welcome to api tab")
// })

// router.get('/users',(req,res)=>
// {
//     res.send("Welcome to users tab")
// })

router.use('/players', playersRouter)


module.exports = router