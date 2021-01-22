export function runFunction(commands, args, request) {
	var output = "I love you " + request.name + "!\n";
	
	return [output, "", ""];
};