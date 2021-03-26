insults = [
    "looks ugly.",
    "I'll teach you some manners, you blithering bombadier! I'll soon deflate you!. Ectoplasm!",
    "you ante-diluvian bulldozer!",
    "come closer if you dare, you jobbernowl, and I'll turn you into a hearth-rug!",
    "you duck-billed platypus!... Jellied eel!... Bashi-bazouk!... Anthropophagus!... Cercopithecus!... Psycopath!",
    "you look busted today. Well, every day I guess.",
    "you are sooo brave waking up everyday looking like that.",
    "I saw your feet pics. weird toes...",
    "not even Marielle B. likes you!",
    "has anyone ever told you that you have a weird voice?",
    "why, you stuck-up, half-witted, scruffy-looking nerf herder!"
];

// exports.runFunction = function runFunction(commands, args, request) {
//     return [request.name + ", " + insults[Math.floor(Math.random() * insults.length)], "", ""];
// };

exports.runFunction = function runFunction(commands, args, request) {
	var name = "";
	var message = insults[Math.floor(Math.random() * insults.length)];

	if (args.length == 0) {
		message = message.charAt(0).toUpperCase() + message.substr(1);
		return [request.name + ", " + message, "", ""];
	}
	else {
		args.forEach(function (word, index) {
			name += word.charAt(0).toUpperCase() + word.substr(1) + " ";
		})
		name = name.slice(0, -1);

		return [name + ", " + message, "", ""];
	}
};