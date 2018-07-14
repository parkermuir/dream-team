import React from 'react';
import PlayerCard from './PlayerCard.jsx';

var MyTeam = ({ team }) => {
  if (team.length === 0) {
    return (<div></div>);
  }

  const showTeam = team.map((player, index) => {
    return <div className="column is-one-fifth">
      <PlayerCard player={player} key={index} />
    </div>;
  });

  return (
    <div className="columns">{showTeam}</div>
  );
};

export default MyTeam;