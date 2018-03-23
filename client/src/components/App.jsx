import React from 'react';
import axios from 'axios';

import GameOfTheNight from './GameOfTheNight.jsx';
import GameList from './GameList.jsx';

// /Users/huntermorgenstern/hackReactor/react-review-page/client/src/components/GameOfTheNight.jsx

const REST_SERVER_URL = `http://localhost:3000/gameentry`;

const demoGame = {
  "id": "2",
  "scheduleStatus": "Normal",
  "originalDate": null,
  "originalTime": null,
  "delayedOrPostponedReason": null,
  "date": "2018-03-11",
  "time": "3:30PM",
  "awayTeam": {
    "ID": "89",
    "City": "Chicago",
    "Name": "Bulls",
    "Abbreviation": "CHI"
  },
  "homeTeam": {
    "ID": "91",
    "City": "Atlanta",
    "Name": "Hawks",
    "Abbreviation": "ATL"
  },
  "location": "Philips Arena"
};

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentGame: demoGame,
      games: []
    };

  }

  componentDidMount() {
    this.loadTonightsGames();
  }
  
  clickHandler(e) {
    //change the current game
  }
  loadTonightsGames() {
    axios({
      method: 'get',
      url: REST_SERVER_URL,
    })
      .then((response) => {
        this.setState({
          games: response.data,
          currentGame: response.data[0]
        });
        console.log('response', response);
      })
      .catch((err)=> {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        Hello From the Otherside
        <div>
          <GameOfTheNight game={this.state.currentGame}/>
        </div>
        <div>
          <GameList games={this.state.games}/>
        </div>
      </div>
    );
  }
}

export default App;