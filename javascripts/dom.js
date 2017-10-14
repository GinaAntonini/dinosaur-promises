"use strict";

const outputDiv = $('#dinosaur');

const domString = (dinosaur) => {
	var dinoString = "";
		dinoString += `<div class=${dinosaur.info === 'Carnivore' ? 'card-bad' : 'card-good'}>`;
		dinoString += `<h1>${dinosaur.type}</h1>`;
		dinoString += `<h4>${dinosaur.bio}</h4>`;
		if (dinosaur.info === 'Carnivore') {
			dinoString += `<h4>Has some tasty snacks.</h4>`;
		} else {
			dinoString += `<h4>Has some adorable(debatable) friends.</h4>`;
		}
		dinoString += `<div class='card-holder'>`;
		dinosaur.snacks.forEach((cat) => {
			dinoString += `<div class='card'>`;
			dinoString += `<h5>${cat.name}</h5>`;
			dinoString += `<div class='card-img'>`;
			dinoString += `<img src=${cat.imageUrl}>`;
			dinoString += `</div>`;
			dinoString += `<p class='card-description'>${cat.specialSkill}</p>`;
			dinoString += `</div>`;
		});
		dinoString += `</div>`;
		dinoString += `</div>`;
	writeToDom(dinoString);
};

const writeToDom = (strang) => {
	outputDiv.append(strang);
};

module.exports = domString;