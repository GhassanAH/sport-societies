const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const keys = require('./config')
const schedule = require('node-schedule');


require("./model/Standings")
require("./model/NextMatch")
require("./model/TopScorers")

mongoose.connect(process.env.MONGOURI || keys.mongURI,{
  useNewUrlParser: true
  
})

app.use(cors());
app.use(express.json())

// const runApi = require("./services/apiSchedule")
// schedule.scheduleJob("0 */2 * * * *", () => {
//   runApi();
// })



require("./routes/leaguesRoute")(app)


if(process.env.NODE_ENV === "production"){
    app.disable('x-powered-by')
    const path = require('path')
  
    app.use(express.static(path.join(__dirname, 'client', 'build')));
  
    app.get('*', (req,res) => {
  
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  
    })
  }

  
  const port = process.env.PORT || 5000
  app.listen(port, () => {
      console.log('server is running')
  })