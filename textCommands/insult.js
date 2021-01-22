messages = [
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

export function runFunction(commands, args, request) {
    return [request.name + ", " + messages[Math.floor(Math.random() * messages.length)], "", ""];
};