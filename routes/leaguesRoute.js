const axios = require("axios");
const mongoose = require('mongoose');
const Standings = mongoose.model('standing');
const TopScorers = mongoose.model('topScorer');
const NextMatch = mongoose.model('nextMatch');

module.exports = leagueRoutes = (app) => {

    app.get('/api/standing/:league', async (req, res) => {
        const league = req.params.league
        try {
          var response = await Standings.findOne({league: league})
          if(response.data){
            response = JSON.parse(response.data)
            return res.status(200).send({message:`successfully ${league} standings fetched`, data:response})
          }else{
            return res.status(200).send({message:`successfully ${league} standings fetched`, data:[]})
  
          }
        } catch (error) {
            return res.status(400).send({message:`unsuccessfully ${league} standings fetched`, data:[]})
          
        }

    })

    app.get('/api/topscorers/:league', async (req, res) => {
        const league = req.params.league
        try {
          var response = await TopScorers.findOne({league: league})
          if(response.data){
            response = JSON.parse(response.data)
            return res.status(200).send({message:`successfully ${league} topscorers fetched`, data:response})
          }else{
            return res.status(200).send({message:`successfully ${league} topscorers fetched`, data:[]})
  
          }
        } catch (error) {
            return res.status(400).send({message:`unsuccessfully ${league} topscorers fetched`, data:[]})
          
        }

    })

    app.get('/api/nextMatches/:league', async (req, res) => {
      const league = req.params.league
      try {
        var response = await NextMatch.findOne({league: league})
        if(response.data){
          response = JSON.parse(response.data)
          return res.status(200).send({message:`successfully ${league} nextMatches fetched`, data:response})
        }else{
          return res.status(200).send({message:`successfully ${league} nextMatches fetched`, data:[]})

        }
      } catch (error) {
          return res.status(400).send({message:`unsuccessfully ${league} nextMatches fetched`, data:[]})
        
      }


  })
  
}
