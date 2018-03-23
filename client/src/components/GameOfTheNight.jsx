import React from 'react';

// import basketball from '/Users/huntermorgenstern/hackReactor/react-review-page/client/dist/assets/images/basketball.png';

const GameOfTheNight = ({ game }) => {

  return (
    <div>
      <div>Game of the Night</div>
      <div>
        <div>Home Team</div>
        {/* <img src={basketball} alt='where duh pic'/> */}
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

export default GameOfTheNight;