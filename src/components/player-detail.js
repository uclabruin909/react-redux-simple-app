import React, { Component } from 'react';
import { connect } from 'react-redux';

class PlayerDetail extends Component {
	render() {

		let activePlayer = this.props.activePlayer;
		if (!activePlayer) {
			return (
				<div className="col-sm-8">
					<p>Select a Player from list:</p>
				</div>
			);
		}

		return (
			<div className="col-sm-8">
				<h3>Player Detail:</h3>
				<p>Name: {activePlayer.name}</p>
				<p>Team: {activePlayer.team}</p>
			</div>
		);
	}
}

//What is returned will show up as props inside PlayerDetail class
function mapStateToProps(state) {
  return {
    activePlayer: state.activePlayer
  };
}

export default connect(mapStateToProps)(PlayerDetail);