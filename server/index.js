const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

let app = express();

app.use(express.static(__dirname + '/../dist'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/team', (req, res) => {
  const team = req.body.team.toLowerCase();
  console.log('Processing POST request /team: ', req.body);
  const url = 'https://nba-players.herokuapp.com/players-stats-teams/' + team;
  axios
    .get(url)
    .then((players) => {
      return players.data.map((player) => {
        return {
          name: player.name,
          team: player.team_name,
          ppg: player.points_per_game,
          rpg: player.rebounds_per_game,
          apg: player.assists_per_game
        };
      });
    })
    .then((filtered) => res.send(filtered))
    .catch((err) => console.log('express server post /team error: ', err));
});

let port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on port ${port}`));