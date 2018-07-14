const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

let app = express();

app.use(express.static(__dirname + '/../dist'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

axios.get('https://nba-players.herokuapp.com/players/ennis_iii/james').then((response) => {
  console.log(response.data);
  
});