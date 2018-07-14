import React from 'react';
import PlayerCard from './PlayerCard.jsx';

var MyTeam = ({team}) => {
  if (team.length === 0) {
    return (<div></div>);
  }

  const showTeam = team.map((player, i) => {
    return <div className="column"><PlayerCard player={player} key={i}/></div>;
  });

  return (
    <div className="columns">{showTeam}</div>
  );
};

export default MyTeam;