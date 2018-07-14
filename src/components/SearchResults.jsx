import React from 'react';
import PlayerCard from './PlayerCard.jsx';

var SearchResults = (props) => {
  if (!props.player) {
    return (
      <div></div>
    );
  }

  // const showTeam = props.team.map((player, i) => {
  //   return <li key={i}>{player.name}</li>;
  // });

  return (
    <PlayerCard player={props.player}/>
  );
};

export default SearchResults;