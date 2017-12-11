import React, { Component } from 'react';
import './Powers.css';

class Powers extends Component {
	render() {
		// Fake the data
		var powers = ["Basic Pattern","Pattern Lense","Conjuration"];
		var costs = ["50","25","15"];

		var PowersData = [];
		

		for (var i = 0; i < powers.length; i++)
		{
			var tempArray = [];

			tempArray[0] = costs[i];
			tempArray[1] = powers[i];

			PowersData.push(tempArray);
		}
			
		// Create the array for display		
		var PowersList = [];

		for (var i = 0; i < PowersData.length; i++)
		{
			PowersList.push(<ul key={i}>({PowersData[i][0]}) {PowersData[i][1]}</ul>);
		}

		// return the useful markup
		return (
			<div className="Powers">
				<h2>Powers</h2>
				<div className="PowersList">
					<ul>
						{PowersList}
					</ul>
				</div>
				<div className="PowersInput">
					<input className="inputStyleCost" />&nbsp;<input className="inputStyleBody" />&nbsp;<button className="PowersButtonStyle">+</button>
				</div>
			</div>
		);
	}
}

export default Powers;