import express from 'express'
const app = express()
const port = 3000
import helmet from 'helmet'

app.use(helmet())

//res.send('Say hello to my little friend...')
//console.log('')

import mafiaActivity from './mafiaActivity.js'
//ticket 3 GET all activities
app.get('/mafiaActivities', (req, res) => {
    try {
    res.status(200).json({
      "payload": mafiaActivity,
      "success": true,
    })
}   catch (error){
      res.status(400).json({
      "payload": null,
      "error": true,
      //"success"; false
    })
  }
  
})

//ticket 4 post 
app.post('/mafiActivities', (req, res) => {
    const userInput = req.body
    console.log(userInput)
    if (!userInput){
      res.status(400).json({
      "payload": null,
      "error": true,
    })
  } else {

    const userInputActivity = {
      mafia_activity_id: uuid_v4(),
      mafia_activity_time_stamp: `${Date.now()}`,
      ...userInputActivity,
    }
    res.status(200).json({
      "payload": userInput,
      "success": true,
    })
  }

})



app.listen(port, () => {
  console.log(`mafiaApp listening on port ${port}`)
})
