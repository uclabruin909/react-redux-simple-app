import React, { Component } from 'react';
import { connect } from 'react-redux';

class PlayerDetail extends Component {
	render() {
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