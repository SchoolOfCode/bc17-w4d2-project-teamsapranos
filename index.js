//#1 import and use express
import express from 'express'
const app = express()

//#1 set up port
const port = 3000

//#1 test port
app.listen(port, () => {
  console.log(`Mafia app listening on port ${port}`)
})

//#1 get req test
app.get('/', (req, res) => {
  res.send('Say hello to my little friend...')
  console.log('Success Tony!')
})

//#2 import and use helmet 
import helmet from 'helmet'
app.use(helmet())

//#3 import mafia activies
import mafiaActivity from "./mafiaActivity.js"

//#3 get req for all activities
app.get('/mafiaActivities', (req, res) => {
  try {
    res.status(200).json({
      "payload": mafiaActivity,
      "success": true
    })
  } catch (error) {
    res.status(400).json({
      "payload": null,
      "error": true,
    })
  }
})

//#3 get req for spesific activity id
app.get('/mafiaActivities/:id', (req, res) => {
  try {
      //create var to store which id was reqqed
    const requestedId = req.params.id
    res.status(200).json({
      "payload": mafiaActivity[requestedId], 
      "success": true
    })
  } catch (error) {
    res.status(400).json({
      "payload": null,
      "error": true,
    })
  }
})

//#4 json reading middleware
app.use(express.json())

//#4 imoprt id makey middleware (and install!)
import { v4 as uuid_v4 } from "uuid"

//#4 post an activity
app.post('/mafiaActivities', (req, res) => {
  //make requested activity into const
  const reqAddMafiaActivity = req.body 
  //use an if to check an activity is acually requested
  if (!reqAddMafiaActivity) {
    res.status(400).json({
      "payload": null,
      "error": true,
    })
  } else {
  //create new const to combine added activity with a time
  const reqAddMafiaActivityObj = {
    mafia_activity_id: uuid_v4(),
    mafia_activity_time_stamp: `${Date.now()}`,
    ...reqAddMafiaActivity,
  }
  //push added activity to data file
  res.status(200).json({
    "payload": reqAddMafiaActivityObj,
    "success": true
  })
}
})

//#5 put (update) req

//#6 delete req

//#7 express-validator

//#8 write custon middleware function that only allows
  // delete reqs with “Authorisation” header of “Bearer TEST_TOKEN”
  // otherwise gives error