"use strict";

const outputDiv = $('#dinosaur');

const domString = (dinosaur) => {
	var dinoString = "";
		dinoString += `<div>`;
		dinoString += `<h1>${dinosaur.type}</h1>`;
		dinoString += `</div>`;
	writeToDom(dinoString);
};

const writeToDom = (strang) => {
	outputDiv.append(strang);
};

module.exports = domString;