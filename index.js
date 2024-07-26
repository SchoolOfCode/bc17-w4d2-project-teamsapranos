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

app.get('/mafiaActivities/:id', (req, res) => {
    try {
    const activityId = req.params.id
    res.status(200).json({
      "payload": mafiaActivity[activityId],
      "success": true,
    })
}   catch (error){
      res.status(400).json({
      "payload": null,
      "error": true,
    })
  }

})

app.use(express.json())
import {v4 as uuid_v4} from "uuid"

//ticket 4 post 
app.post('/mafiActivities', (req, res) => {
    const userInput = req.body
    if (!userInput){
      res.status(400).json({
      "payload": null,
      "error": true,
    })
  } else {
    const userInputActivity = {
      mafia_activity_id: uuid_v4(),
      mafia_activity_time_stamp: `${Date.now()}`,
      ...userInput,
    }
    res.status(200).json({
      "payload": userInputActivity,
      "success": true,
    })
  }
})




app.listen(port, () => {
  console.log(`mafiaApp listening on port ${port}`)
})
