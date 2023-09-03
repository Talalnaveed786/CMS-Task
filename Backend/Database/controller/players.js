const playerschema = require('../Models/players')
 
async function getPlayerbyID(id){
    const player = await playerschema.findById(id)
    return player
}

async function getAllPlayers(){
    const player = await playerschema.find()
    return player
}

async function addPlayer(player){
    const {name,age,position,club,nationality} = player
    const newplayer = new playerschema({
        name,age,position,club,nationality
    })
    return await newplayer.save() 
     
}

async function deleteAllPlayers(id) {
    
      const deletedPlayers = await playerschema.findByIdAndDelete(id) 
      return deletedPlayers
  
  }

  
async function updatePlayer(id, player) {
    const playerInDb = await playerschema.findById(id)
    if (!playerInDb) {
        throw new Error({ status: 404, message: 'player not found' })
    }

    const { name, age, position,club, nationality } = player
    if (name) playerInDb.name = name
    if (age) playerInDb.age = age
    if (position) playerInDb.position = position
    if (club) playerInDb.club = club
    if (nationality) playerInDb.nationality = nationality

    return await playerInDb.save()
}


  

 
module.exports.getPlayerbyID= getPlayerbyID
module.exports.deleteAllPlayers= deleteAllPlayers
module.exports.addPlayer = addPlayer
module.exports.getAllPlayers = getAllPlayers
module.exports.updatePlayer = updatePlayer
 