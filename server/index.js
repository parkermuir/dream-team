const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');


let app = express();

app.use(express.static(__dirname + '/../dist'));

// app.get('/', (req, res) => {
//   res.status(200).send('Hello World!!');
// });

app.get('/team', (req, res) => {
  axios
    .get('https://nba-players.herokuapp.com/players-stats-teams/cle')
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
    .catch((err) => console.error(err));
});

let port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on port ${port}`));