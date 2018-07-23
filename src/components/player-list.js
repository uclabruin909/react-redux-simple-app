import React, { Component } from 'react';
import { connect } from 'react-redux';

class PlayerList extends Component {
  renderPlayers() {
    let playerListBlock = this.props.players.map((player) => {
      return <li key={player.name} className="list-player-item">{player.name}</li>
    });

    return playerListBlock;
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderPlayers()}
      </ul>
    );
  }
}

//What is returned will show up as props inside PlayerList class
function mapStateToProps(state) {
  return {
    players: state.players
  };
}

export default connect(mapStateToProps)(PlayerList);


