const axios = require("axios");
const mongoose = require('mongoose');
const Standings = mongoose.model('standing');
const TopScorers = mongoose.model('topScorer');
const NextMatch = mongoose.model('nextMatch');

const leagues = ["39", "1", "2", "140", "135", "61", "78", "94", "88"]
// const leagues = ["2"]
var errorLeagues = []

const runStandings = async ()  => {

    for(let i = 0; i < leagues.length; i++){
        const league = leagues[i];
        const options = {
            method: 'GET',
            url: 'https://api-football-v1.p.rapidapi.com/v3/standings',
            params: {season: '2022', league: league},
            headers: {
              'X-RapidAPI-Key': '42075cc1cbmsh93869658737ba91p1efae0jsn12d9b7724344',
              'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
            }
          };
          try {
            const response = await axios.request(options);
            var data = response.data["response"];
            if(data.length !== 0){
              data = data[0]["league"]["standings"];
            }
            var found = await Standings.findOne({league:league});
            data = JSON.stringify(data);
            if(found){
                found.data = data;
                found.save();
            }else{
                const newStandings = await new Standings({
                  league:league,
                  data:data
                });
                newStandings.save();
            }
          console.log("F A");
          } catch (error) {
            console.log(error);
            errorLeagues = [...errorLeagues, leagues[i]];
          }

    }
}

const runNextMatch = async ()  => {

  for(let i = 0; i < leagues.length; i++){
      const league = leagues[i];
      const options = {
          method: 'GET',
          url: 'https://api-football-v1.p.rapidapi.com/v3/fixtures',
          params: {next: '50', league:league},
          headers: {
            'X-RapidAPI-Key': '42075cc1cbmsh93869658737ba91p1efae0jsn12d9b7724344',
            'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
          }
        };
        try {
          const response = await axios.request(options);
          var data = response.data["response"];
          var found = await NextMatch.findOne({league:league});
          data = JSON.stringify(data);
          if(found){
              found.data = data;
              found.save();
          }else{
              const newNextMatches = await new NextMatch({
                league:league,
                data:data
              });
              newNextMatches.save();
          }
          console.log("F B");
        } catch (error) {
          console.log(error);
          errorLeagues = [...errorLeagues, leagues[i]];
        }

  }
}

const runTopScorers = async ()  => {

  for(let i = 0; i < leagues.length; i++){
      const league = leagues[i];
      const options = {
          method: 'GET',
          url: 'https://api-football-v1.p.rapidapi.com/v3/players/topscorers',
          params: {league: league, season: '2022'},
          headers: {
            'X-RapidAPI-Key': '42075cc1cbmsh93869658737ba91p1efae0jsn12d9b7724344',
            'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
          }
        };
        try {
          const response = await axios.request(options);
          var data = response.data["response"];
          var found = await TopScorers.findOne({league:league});
          data = JSON.stringify(data);
          if(found){
              found.data = data;
              found.save();
          }else{
              const newTopScorers = await new TopScorers({
                league:league,
                data:data
              });
              newTopScorers.save();
          }
          console.log("F C");
        } catch (error) {
          console.log(error);
          errorLeagues = [...errorLeagues, leagues[i]];
        }

  }
}

module.exports = runApi = () => {
  runStandings();
  runNextMatch();
  runTopScorers();
}