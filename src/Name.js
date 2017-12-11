import React, { Component } from 'react';
import './Name.css';

class Name extends Component {
	render() {
		return (
			<div className="Name">
				<span className="NameText">{this.props.Name}&nbsp;&nbsp;</span>&nbsp;<span className="NamePoints">({this.props.Points})</span>
			</div>
		);
	}
}

export default Name;