export function runFunction(commands, args, request) {
	var output = "";
	
	books.forEach(function (book, index) {
		var title = book[0];
		var author = book[1];
		var genre = book[2];
		var desc = book[3];
		var bookLink = book[4];

		output += title + " by " + author + " (" + genre + "): " + desc;
		if (bookLink.length != 0) {
			output += " (" + bookLink + ")";
		}
		output += "\n\n";
	});
	return [output, "", ""];
};

var books = [
["Slaughterhouse-House Five", "Kurt Vonnegut",
                               "Sci-Fi / Anti-war",
                               "Guy constantly teleports to different parts of his life.",
                               "https://1.cdn.edl.io/pC7FBRodeIjWLt4krVUQOVYD2XQsIJdg1XQ8hrUnwLBevOah.pdf"],
["And Then There Were None",   "Agatha Christie",
							   "Mystery",
							   "A group of people is stuck on an island and one of them is a secret killer/mastermind",
							   "http://pustaka.unp.ac.id/file/abstrak_kki/EBOOKS/And%20Then%20There%20Were%20None.pdf"],
[	"Americanah"               , "Chimamanda",
								   "Realistic Fiction",
								   "The book’s first word is “Princeton“, it’s about a Nigerian girl who comes to the US to go to college. Talks about race and hair and mircoaggressions and racism.",
								   ""],
[	"17776"                    , "Jon Bois",
								   "Online Multimedia Narrative",
								   "Space probes become sentient and observe humans (who magically became immortal), keep themselves occupied with football.",
								   ""],
[	"Beloved"                  , "Toni Morrison",
								   "Fiction",
								   "A former slave's murdered child comes back from the dead to haunt her mother and sister.",
								   "https://www.matermiddlehigh.org/ourpages/auto/2012/11/16/50246772/Beloved.pdf"],
[	"I, Robot"                 , "Isaac Asimov",
								   "Sci-Fi / Essay Anthology",
								   "Asimov chronicles the development of the robot through a series of interlinked stories.",
								   ""],
[	"Invisible Man"            , "Ralph Waldo Ellison",
								   "Fiction (but low-key kind of surreal),",
								   "A star student at an all-black university is forced to drop out. Outside of his collegiate bubble, he learns about his relationship to blackness as well as his personal identity. This book is low-key THE Great American Novel.",
								   "https://bpi.edu/ourpages/auto/2010/5/11/36901472/Ralph%20Ellison%20-%20Invisible%20Man%20v3_0.pdf"],
[	"The Audacity of Hope"     , "Barack Obama",
								   "Biography",
								   "Obama lays out his vision for what politics in America should look like.",
								   ""],
[	"Becoming"                 , "Michelle Obama",
								   "Biography",
								   "Michelle's memoire that details her life from childhood through being FLOTUS.",
								   ""],
[	"Alice's Adventures in Wonderland", "Lewis Carroll",
								   "Fiction",
								   "You've all seen the movie. You fucking have to read the book. Its genius.",
								   ""],
[	"The Phantom Tollbooth"    , "Norton Juster",
								   "Surrealist, Fantasy",
								   "A bored child named Milo finds purpose in the absurd. This book is BSE and AB friendly because my man Norton Juster was an author and an architect.",
								   ""],
[	"Persepolis"               , "Marjane Satrapi",
								   "Autobiographical Graphic Novel",
								   "Black and white and very serious. About a young girl in Iran during the Islamic revolution. Funny outlook on serious historical event.",
								   ""],
[	"Passage to India"         , "E. M. Forster",
								   "Fiction",
								   "It’s about colonialism and it’s good.",
								   ""],
[	"The Foundation Trilogy"   , "Isaac Asimov",
								   "Sci-Fi",
								   "Mathematician Hari Seldon devises a plan to guide two settlements of humanities greatest minds to preserve science and civilization through a galactic Dark Age.",
								   ""],
[	"Catch 22"                 , "Joseph Heller",
								   "Satirical War",
								   "The novel examines the absurdity of war and military life through the experiences of Yossarian and his cohorts, who attempt to maintain their sanity while fulfilling their service requirements so that they may return home.",
								   "https://antilogicalism.com/wp-content/uploads/2018/04/catch-22.pdf"],
[	"The Poet X"                 , "Elizabeth Acevedo",
								   "Fiction / Poetry",
								   "A girl growing up in Harlem uses slam poetry to cope with her life and her relationships.",
								   ""]
];