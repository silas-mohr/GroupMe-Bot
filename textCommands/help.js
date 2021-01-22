export function runFunction(commands, args, request) {
	var output = "";
	output += "Commands That Send Images\n";
	output += "---------------------------------+\n"
	for (var command in commands[0]) {
		output += "!" + command + ": " + commands[0][command] + "\n";
	}
	output += "\nCommands That Send Text\n";
	output += "---------------------------------+\n"
	for (var command in commands[1]) {
		output += "!" + command + ": " + commands[1][command] + "\n";
	}
	return [output, "", ""];
};