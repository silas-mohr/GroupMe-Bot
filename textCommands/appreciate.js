messages = [
    "you are appreciated!",
	"I like everything about you!",
	"you are a wonderful person!",
	"you knocked me off my feet!",
	"I knew we would be fast friends the moment we met. I'm so glad that I was right.",
	"you always have a way of bringing laughter, happiness, and joy into my life. When you are around, everything feels more peaceful, more exciting, and more interesting.",
	"you're a great friend who brings out the best in me. I am so grateful to have you in my life. Thank you for being you.",
	"your dedication, understanding, and time all mean so much to me, and I feel very lucky to be able to experience life alongside you. I cherish you forever, my friend.",
	"there is never anything random about your acts of kindness. Thank you for everything that you do.",
	"I want to thank you for all the wonderful ways you make me happy, even when you don’t realize it.",
	"I know that I don’t say this often enough, but I want to tell you how much I appreciate you and everything you do.",
	"here is a special thank you from my heart to someone who is special in my life. To someone who means a lot to me. A special thank you from me to you, for making life always feel like new."
];

export function runFunction(commands, args, request) {
	var name = "";

	if (args.length == 0)
		name = request.name;
	else {
		args.forEach(function (word, index) {
			name += word.charAt(0).toUpperCase() + word.substr(1) + " ";
		})
		name = name.slice(0, -1);
	}


	return [name + ", " + messages[Math.floor(Math.random() * messages.length)], "", ""];
}