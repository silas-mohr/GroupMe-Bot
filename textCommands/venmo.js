export function runFunction(commands, args, request) {
	var output = "EVERYONE GO VENMO MY FRIEND $1 SHE GOT A $" + Math.floor(Math.random() * 500) + " SPEEDING TICKET😞 any amount is appreciated ❤️ Venmo: " + request.name.replace(" ", "-") + "-74606\n";
	
	return [output, "", ""];
}