"use strict";

const dom = require('./dom');

var dinosaurs = [];

// var dinoGetter = function(){
// 	$.ajax("./db/dinosaurs.json").done(function(data1){
// 		console.log("data1", data1);
// 		data1.dinosaurs1.forEach(function(dino){
// 			dinosaurs.push(dino);
// 		});
// 		console.log("dinosaurs after foreach", dinosaurs);
// 		$.ajax("./db/dinosaurs2.json").done(function(data2){
// 			console.log("data2", data2);
// 			data2. dinosaurs2.forEach(function(dino){
// 				dinosaurs.push(dino);
// 			});
// 			console.log("dinosaurs after foreach", dinosaurs);
// 			$.ajax("./db/dinosaurs3.json").done(function(data3){
// 			console.log("data2", data3);
// 			data3. dinosaurs3.forEach(function(dino){
// 				dinosaurs.push(dino);
// 			});
// 			console.log("dinosaurs after foreach", dinosaurs);
// 		});
// 	});
// });
// };

var firstDinosaurJSON = function(){
	return new Promise(function(resolve, reject){
		$.ajax('./db/dinosaurs.json').done(function(data1){
			resolve(data1.dinosaurs1);
		}).fail(function(error1){
			reject(error1);
		});
	});
};

var secondDinosaurJSON = function(){
	return new Promise(function(resolve, reject){
		$.ajax('./db/dinosaurs2.json').done(function(data2){
			resolve(data2.dinosaurs2);
		}).fail(function(error2){
			reject(error2);
		});
	});
};

var thirdDinosaurJSON = function(){
	return new Promise(function(resolve, reject){
		$.ajax('./db/dinosaurs3.json').done(function(data3){
			resolve(data3.dinosaurs3);
		}).fail(function(error3){
			reject(error3);
		});
	});
};

//PROMISE WORKS- promise pyramid of doom
// var dinoGetter = function(){
// 	firstDinosaurJSON().then(function(results){
// 		results.forEach(function(dino){
// 			dinosaurs.push(dino);
// 		});
// 		secondDinosaurJSON().then(function(results2){
// 			results2.forEach(function(dino){
// 				dinosaurs.push(dino);
// 			});
// 			});
// 			thirdDinosaurJSON().then(function(results3){
// 				results3.forEach(function(dino){
// 				dinosaurs.push(dino);
// 			});
// 		console.log("dinosaurs", dinosaurs);
// 	});
// 	}).catch(function(error){
// 		console.log("error", error);
// 	});
// };

//Promise- correct way- This is the correct way but there is a better way!
var dinoGetter = function(){
	firstDinosaurJSON().then(function(results){
		results.forEach(function(dino){
			dinosaurs.push(dino);
		});
		return secondDinosaurJSON();
	}).then(function(results2){
		results2.forEach(function(dino){
			dinosaurs.push(dino);
		});
		return thirdDinosaurJSON();
	}).then(function(results3){
		results3.forEach(function(dino){
			dinosaurs.push(dino);
		});
		console.log("dinosaurs", dinosaurs);
		makeDinos();
	});
};

var makeDinos = function(){
	dinosaurs.forEach(function(dino){
		dom(dino);
	});
};

var initializer = function(){
	dinoGetter();
};

var getDinosaurs = function() {
	return dinosaurs;
};

module.exports = {initializer: initializer, getDinosaurs: getDinosaurs};