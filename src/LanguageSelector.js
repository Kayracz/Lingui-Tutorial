import React from "react";

const LanguageSelector = ({ language, onChangeLangage }) => {
	const handleChange = (event) => {
		event.preventDefault();

		onChangeLangage(event.target.value);
	};

  // EVENTS AND SELECTION OPTIONS
	return (
		<div className="select">
			<select onChange={handleChange} value={language}>
				<option value="en">English</option>
				<option value="fr">Français</option>
				<option value="es">Español</option>
			</select>
		</div>
	);
};

export default LanguageSelector;
//#3 gets language and onchangelanguage characteristics into const
// -handlechange and passes it to selection options with the value as language