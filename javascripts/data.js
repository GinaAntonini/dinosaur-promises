"use strict";

const dom = require('./dom');

var dinosaurs = [];

var initializer = function(){
	dom({"name":"T-rex"});
};

var getDinosaurs = function() {
	return dinosaurs;
};

module.exports = {initializer, getDinosaurs};