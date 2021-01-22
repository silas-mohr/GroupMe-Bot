var cool = require('cool-ascii-faces');

exports.runFunction = function runFunction(commands, args, request) {
	var botResponse, type, link;

	botResponse = cool();
	type = "text";
	link = "";

	return [botResponse, type, link];
};