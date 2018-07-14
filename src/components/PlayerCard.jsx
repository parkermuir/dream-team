import React from 'react';


var PlayerCard = ({player}) => {
  return (
    <div>
      <div className="card">
        <div className="card-content">
          <p className="title">{player.name}</p>
          <p className="subtitle">{player.team_name}</p>
          <span>Points: {player.points_per_game} </span>
          <span>Rebounds: {player.rebounds_per_game} </span>
          <span>Assists: {player.assists_per_game} </span>
        </div>
        <p className="card-footer-item">
          <span>
            <a className="button is-link">Add To My Dream Team</a>
          </span>
        </p>
      </div>
    </div>
  );
};

export default PlayerCard;