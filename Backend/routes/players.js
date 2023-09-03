const Joi= require ('joi')
const { getAllPlayers, addPlayer, deleteAllPlayers, getPlayerbyID, updatePlayer } = require('../Database/controller/players')
const players = require('../Database/Models/players')

const router = require('express').Router()

router.get('/:id',async (req,res) =>{

    const playerid = req.params.id

    try {
        
        const players = await getPlayerbyID(playerid)
        if (!players) res.status(404).send('Student not found')
            else 
            return res.send([players])
        

    } catch (error) {
        console.log(error)
        res.status(500).send("Internal Server Error")
        
    }
})

//Display all players
router.get('/',async (req,res) =>{
    try {
        const players = await getAllPlayers()
        res.send(players)

    } catch (error) {
        console.log(error)
        res.status(500).send("Internal Server Error")
        
    }
})

//Add players
router.post('/add',async (req,res) =>{
    
    try {
        const PlayerSchema = Joi.object({
            name: Joi.string().required(),
            age: Joi.number().required(),
            position: Joi.string().required(),
            club: Joi.string().required(),
            nationality: Joi.string().required(),
        })
        const validate = PlayerSchema.validate(req.body)
        if(validate.error)
        {
            res.status(400).send(validate.error.details[0].message)
        }
        
    const {name,age,position,club,nationality} = req.body
    const playerObj = {name,age,position,club,nationality}
    const addplyr =await addPlayer(playerObj)
        res.send(addplyr)
        
    
    } catch (error) {
        res.status(500).send("Internal Server Error")
         
    }
  
})
//Delete players
router.delete('/delete',async (req,res) =>{

    const {id} = req.query  
    
if(!id){
    res.status(400).send("id is required")
}
    try {
        const delplayers = await deleteAllPlayers(id)
        res.send(delplayers)

    } 
    catch (error) {
        console.log(error)
        res.status(500).send("Internal Server Error")
        
    }

})


router.put('/update', async (req, res) => {
    try {
        const PlayerSchema = Joi.object({
            _id: Joi.string().required(),
            name: Joi.string().required(),
            age: Joi.number().required(),
            position: Joi.string().required(),
            club: Joi.string().required(),
            nationality: Joi.string().required()
        })

        const validate = PlayerSchema.validate(req.body)

        if (validate.error) {
            res.status(400).send(validate.error.details[0].message)
            return
        }

        const { _id, name, age, position, club ,nationality } = req.body
        const plyrObj = {
            name, age, position, club ,nationality
        }

        const plyrInDb = await updatePlayer(id = _id, plyrObj)
        res.send(plyrInDb)
    } catch (err) {
        console.log(err)
        res.status(500).send(err)
    }
  })




module.exports = router