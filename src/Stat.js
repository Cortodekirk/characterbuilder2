import React, { Component } from 'react';
import './Stat.css';

class Stat extends Component {
	render() {
		return (
			<div className="Stat">
				<table>
					<tr><td rowSpan="2">
						<span className="StatName">{this.props.Name}:</span>&nbsp;<span className="StatValue">Amber</span>&nbsp;&nbsp;
					</td><td>
						<button className="StatButtonStyle">+</button>
					</td></tr>
					<tr><td>
						<button className="StatButtonStyle">-</button>
					</td></tr>
				</table>
			</div>
		);
	}
}

export default Stat;