const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const dbMethods = require('../database');

let app = express();

app.use(express.static(__dirname + '/../dist'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/player', (req, res) => {
  const player = req.body.player.toLowerCase();
  const first = player.split(' ')[0];
  const last = player.split(' ')[1];

  const url = `https://nba-players.herokuapp.com/players-stats/${last}/${first}`;

  axios.get(url)
    .then((response) => {
      res.send(response.data);
    });
});

app.post('/teams', (req, res) => {
  console.log('received team of length: ', req.body.team.length);
  dbMethods.saveTeam({
    team: req.body.team,
    createdAt: new Date()
  });
  res.status(201).send();
});

let port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Server listening on port ${port}`));