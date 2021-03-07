messages = [
    "Where do bad dicks go?   To the penistentiary.",
    "I'd tell you a penis joke, but I might come off as cocky.",
    "How do you get 'Dick' from 'Richard'?   You ask him nicely.",
    "What do you call a ghost erection?   A boo-ner.",
    "What do you call a woman who loves small dicks?   Hopefully your girlfriend.",
    "Why do men have a hole in their penis?   So their brains can get some oxygen now and then.",
    "What do you call the useless piece of skin on a cock?   The man.",
    "Had a fight with a erection, this morning. I BEAT IT SINGLE HANDEDLY!",
    "What does the receptionist at the sperm bank say when clients are leaving?   Thanks for coming!",
    "Why did the pervert cross the road?   His dick was stuck in the chicken.",
    "What's the difference between pink and purple?   The grip!",
    "What's another name for pickled bread?   Dill-dough.",
    "What do you call a sunburnt penis?   Sunny D",
    "What do a Rubix cube and a cock have in common?   The longer you play with them, the harder they get.",
    "What can a bird do that a man can't do?   Eat with his pecker.",
    "What do you call a New York Times Bestselling book about cock?   The Da Vinci Chode.",
    "My penis is so polite. It stands up so girls can sit down.",
    "Welcome to the Piss club! Just complete this registration form and urine!",
    "I accidentally swallowed some WhiteOut last night. Woke up with a massive correction.",
    "My girlfriend just caught me blow-drying my penis and asked what was I doing. Apparently, 'heating your dinner' was not the right answer.",
    "Roses are red. Violets are blue. Math is real hard, and my penis is too.",
    "Penis jokes are so old...I mean cum on",
    "When Albert Einstein masterbates is it a stroke of genius?",
    "What’s the difference between your jokes and your penis?   Nobody laughs at your jokes.",
    "My penis was in the Guinness book of world records.   Then the librarian told me to take it out."
];

exports.runFunction = function runFunction(commands, args, request) {
    return [messages[Math.floor(Math.random() * messages.length)], "", ""];
};