import React, { Component } from 'react';
import './Skills.css';

class Skills extends Component {
	render() {
		var skills = ["Herbology","Bladesmith","Stealth"];
					
		var skillList = [];

		for (var i = 0; i < skills.length; i++)
		{
			skillList.push(<ul key={i}>{skills[i]}</ul>);
		}

		return (
			<div className="Skills">
				<h2>Skills</h2>
				<div className="SkillsList">
					<ul>
						{skillList}
					</ul>
				</div>
				<div className="SkillsInput">
					<input className="inputStyle" />&nbsp;<button className="buttonStyle">+</button>
				</div>
			</div>
		);
	}
}

export default Skills;