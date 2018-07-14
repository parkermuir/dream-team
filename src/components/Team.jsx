import React from 'react';
import PlayerCard from './PlayerCard.jsx';

var MyTeam = ({ team, handleDelete }) => {
  if (team.length === 0) {
    return (<div></div>);
  }

  const showTeam = team.map((player, index) => {
    player.index = index;
    return <div className="column is-one-fifth">
      <PlayerCard player={player} key={index} handleDelete={handleDelete} />
    </div>;
  });

  return (
    <div className="columns">{showTeam}</div>
  );
};

export default MyTeam;