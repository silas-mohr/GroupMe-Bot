exports.runFunction = function runFunction(commands, args, request) {
	var output = "*Test Bot gently tucks " + request.name + " in*\n";
	return [output, "", ""];
};