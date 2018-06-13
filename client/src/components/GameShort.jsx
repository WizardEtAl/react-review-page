import React from 'react';

const GameShort = ({ game }) => {
  return (
    <div onClick={()=>console.log('clickedShort')}>
      <h1>GAME SHORT</h1>
      <div>
        <div>Home Team</div>
        <div>{game.homeTeam.City}</div>
        <div>{game.homeTeam.Name}</div>
      </div>
      <div>
        <div>Away Team</div>
        <div>{game.awayTeam.City}</div>
        <div>{game.awayTeam.Name}</div>
      </div>
      <div>Arena: {game.location}</div>
      <div>Tip Off: {game.time}</div> 
    </div>
    );
};

export default GameShort;