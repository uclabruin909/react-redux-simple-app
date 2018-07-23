import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

//redux action imports
import { selectPlayer } from '../actions/index';

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

//Anything returned from this function will show up as props inside PlayerList
function mapDispatchProps(dispatch) {
  //whenever selectPlayer is called, the result should be passed to all reducers
  return bindActionCreators({selectPlayer: selectPlayer}, dispatch);
}

export default connect(mapStateToProps, mapDispatchProps)(PlayerList);


