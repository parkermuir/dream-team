require('dotenv').config();
const mongoose = require('mongoose');
mongoose.connect(process.env.DB_HOST);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'mongo connection error'));
db.once('open', () => console.log('Successful connection to mlab DB'));

let teamsSchema = mongoose.Schema({
  team: Array,
  createdAt: Date
});

var Team = mongoose.model('Team', teamsSchema);


let saveTeam = (team) => {
  let newTeam = new Team(team);
  newTeam.save();
};

let loadTeams = () => {
  return Team.find()
    .sort({createdAt: -1})
    .exec();
};


module.exports.saveTeam = saveTeam;
module.exports.loadTeams = loadTeams;