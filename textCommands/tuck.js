exports.runFunction = function runFunction(commands, args, request) {
	var output = "*BrickBot gently tucks " + request.name + " in*\n";
	return [output, "", ""];
};