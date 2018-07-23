import React, { Component } from 'react';
import { connect } from 'react-redux';

class PlayerList extends Component {
  render() {
    return (
      <ul className="list-group col-sm-4">
        <li>Test Link1</li>
        <li>Test Link2</li>
        <li>Test Link3</li>
        <li>Test Link4</li>
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


