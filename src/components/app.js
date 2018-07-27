import React, { Component } from 'react';

import PlayerList from './player-list';
import PlayerDetail from './player-detail';

export default class App extends Component {
  render() {
    return (
      <div>
        <PlayerList />
        <PlayerDetail />
      </div>
    );
  }
}