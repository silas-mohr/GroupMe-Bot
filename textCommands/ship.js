ships = [
	"you have no idea how much my heart races when I see you.",
	"I love when I catch you looking at me.",
	"you're weird… but I like it!",
	"your voice is my favorite sound.",
	"so far, every moment we've spent together has been awesome. But I promise you, that the best is yet to come.",
	"if only you knew how much those little moments with you matter to me.",
	"you make me forget how to breathe.",
	"nobody is perfect, but you're so close it's scary 👌👸",
	"all I need is you right here.",
	"I love you more than I did yesterday but not more than I will tomorrow ❤",
	"the only time I stupidly smile at my phone is when I get text messages from you.",
	"what is love? It is what makes your cell phone ring every time I send text messages.",
	"I always wake up smiling. I think it's your fault.",
	"I can't explain the way you make me feel when I hear your voice or see your face, but I adore it.",
	"just had to let you know… loving you is the best thing that happened to me 💕",
	"can I borrow a kiss? I promise to give it back 😘",
	"I think you're cuter than any cat picture 🐈",
	"if Van Gogh had you as a subject, the sunflowers would have gone in the trash 🌻🌻🌻",
	"if I were a stop light 🚦, I would turn red every time you passed by so that I could stare at you a bit longer.",
	"you wanna know who I'm in love with? Read the first word again ❤",
	"🐳 you be mine forever?",
	"you're my 👸🐝",
	"🍊 you glad we found each other? You're a great 🎣",
	"to honor your beauty, I present you with a dozen red roses 🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹",
	"you've turned my life 🔄⬆⬇"
]

export function runFunction(commands, args, request) {
	var name = "";
	var message = ships[Math.floor(Math.random() * ships.length)];

	if (args.length == 0) {
		message = message.charAt(0).toUpperCase() + message.substr(1);
		return [message, "", ""];
	}
	else {
		args.forEach(function (word, index) {
			name += word.charAt(0).toUpperCase() + word.substr(1) + " ";
		})
		name = name.slice(0, -1);

		return [name + ", " + message, "", ""];
	}
};