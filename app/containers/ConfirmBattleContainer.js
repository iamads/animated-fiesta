var React = require('react');
var ConfirmBattle = require('../components/ConfirmBattle');

var ConfirmBattleContainer = React.createClass({
	contextTypes: {
		router: React.PropTypes.object.isRequired
	},
    	getInitialState: function () {
		return {
			isLoading: false,
    			playerInfo: []		
		}
	},
    	componentDidMount : function () {
		console.log(this.props.location.query);
		// fetch info from github then state
	},
	render: function() {
		return (
				<ConfirmBattle 
					isLoading={this.state.isLoading}
					playersInfo = {this.state.playersInfo} />
			);
	}
});

module.exports = ConfirmBattleContainer;
