import React from 'react';

import GameShort from './GameShort.jsx';

const GameList = ({ games }) => {
  var tonightsGames = games.map((aGame, i) => <GameShort game={aGame} key={i} />);
  return (
    <div>
      <h1>GameList</h1>
      <div>{tonightsGames}</div>
    </div>
  );
};

export default GameList;