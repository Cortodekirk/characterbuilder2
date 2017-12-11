import React, { Component } from 'react';
import './Description.css';

class Description extends Component {
	render() {
		// return the useful markup
		return (
			<div className="Description">
				<h2>Description</h2>
				<div className="DescriptionContent">
					<textarea className="DescriptionInput" />
				</div>
				<div className="PowersInput">
					<button className="DescriptionButtonStyle">Update</button>
				</div>
			</div>
		);
	}
}

export default Description;