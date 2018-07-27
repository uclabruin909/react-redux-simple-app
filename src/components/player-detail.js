import React, { Component } from 'react';
import { connect } from 'react-redux';

class PlayerDetail extends Component {
	render() {

		let activePlayer = this.props.activePlayer;
		if (!activePlayer) {
			return (
				<div>
					<p>Select a Player from list:</p>
				</div>
			);
		}

		return (
			<div>
				<h3>Player Detail:</h3>
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