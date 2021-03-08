/** 
 * This module is all about getting a users command and running it.
 * First it listens to see if any user has sent a message.
 * Then it checks if the message contains a valid command.
 * If there is a valid command it runs that command and returns the output.
 * The bot then sends the output through a function that wraps the message to conform to GroupMe character limits
 * Then the output is posted to the GroupMe group using https requests.
 */

var HTTPS = require('https');

var botID = process.env.BOT_ID;
var botName = "ThotBot 2.0";

var textCommands = {
  // List of all the commands the bot responds with text to
  help : "Prints commands and their descriptions.",
  love : "Tells you you're loved.",
  police : "Don't you dare say it.",
  marielle : "Marielle B is always watching.",
  // titty : "Sweet dreams!",
  pun : "Insert something punny here.",
  stepsis : "👀",
  ship : "A nice message for your ship. (!ship NAME to direct the message at someone)",
  appreciate : "You are appreciated. (!appreciate NAME to appreciate someone else)",
  tuck : "Get some good night wishes",
  vote : "It's your civic duty",
  //mom : "A message from mom",
  dick : "A big, hard joke.",
  insult : "Ok loser.",
  //sean : "👀",
  cool : "ThotBot's a cool guy.",
  haddock : "Captain Haddock would like to have a word with you.",
  books : "Book recommendations!",
  venmo : "🥺",
  pressed : "pReSSeD",
  address : "A spreadsheet of addresses.",
  map: "housing locations"
};

var imageCommands = {
  // List of all the commands the bot responds with (an) image(s) to
  enselfie: "A blank selfie for everyone.",
  pocket : "Get back in there!",
  jail : "You know what you did",
  regret : "Even I realize that message was stupid",
  albert : "Everyone's favorite google hangout maestro",
  michelle : "Have your favorite first lady scold someone",
  ap: "Someone asked again."
};

var hiddenCommands = {
  // Commands that don't show up in help
  unsend: "You can't."
}

function respond() {
  // Check if someone sent a (potential) command by starting a message with the character "!"
  var request = JSON.parse(this.req.chunks[0]);
  var botRegex = /^!/;
  var LIKED_USER_ID = 79452004;

  console.log("Message: " + request.text);
  console.log("From User ID: " + request.sender_id);
  if(request.name != botName && request.text && botRegex.test(request.text)) {
    this.res.writeHead(200);

    // Cuts off unecessary whitespace and sets it to all lowercase to prepare the command to be run
    request.text = request.text.trim();
    command = request.text.toLowerCase();

    var response = checkCommand(command, request);
    postWrapper(response);

    this.res.end();
  }
  else {
    var request = JSON.parse(this.req.chunks[0]);
    waitRegex = /\bwait\b/i;
    apRegex = /\bap\b/i;

    // Checks if an actual user sent the message
    if(request.name != botName && request.text) {
      
      // Checks if user said "wait" and if so runs the !police command
      if(waitRegex.test(request.text)) {
        this.res.writeHead(200);

        command = "!police";
        var response = checkCommand(command, request);
        postMessage(response);

        this.res.end();
      }

      // Checks if user said "ap" and if so runs the !ap command
      else if(apRegex.test(request.text)) {
        this.res.writeHead(200);

        command = "!ap";
        var response = checkCommand(command, request);
        postMessage(response);

        this.res.end();
      }
      else if (request.sender_id == LIKED_USER_ID) {
        this.res.writeHead(200);

        like(request);

        this.res.end();
      }
      else {
        // If no command is said, don't do anything
        console.log("don't care");
        this.res.writeHead(200);
        this.res.end();
      }
    }
    else {
      // If a message from the bot, don't do anything
      console.log("don't care");
      this.res.writeHead(200);
      this.res.end();
    }
  }
}

function like (message) {
  console.log("I tried to like the message");
  try {
    options = {
      hostname: 'api.groupme.com',
      path: '/v3/messages/59972343/' + message.id + '/like?token=' + process.env.ACCESS_TOKEN,
      method: 'POST'
    };

    botReq = HTTPS.request(options, function(res) {
        
        // If everything worked, do nothing
        if(res.statusCode == 200) {
          //neat
        } 
        
        // If there is an error, send the error to the console
        else {
          console.log('rejecting bad status code ' + res.statusCode);
        }
    });

    // If an error happens, send an error message to the console
    botReq.on('error', function(err) {
      console.log('error posting message '  + JSON.stringify(err));
    });

    // If the requests timesout, send an error message to the console
    botReq.on('timeout', function(err) {
      console.log('timeout posting message '  + JSON.stringify(err));
    });

    // Write body to botReq and end https request
    botReq.end();

  } 
  catch(err) {
    console.error(err);
  }
}

// Checks if command is valid
function checkCommand(command, request) {
  command = command.substr(1);

  // Removes the "!" from the beginning of the command
  args = command.split(" ");
  command = args.shift();

  // Checks if the command is in either list of commands and runs it if it is, says it is not a valid command if not
  if (command in textCommands || command in hiddenCommands || command in imageCommands) {
    return runCommand(command, args, request, "text");
  }
  else if (command in imageCommands) {
    return runCommand(command, args, request, "image");
  }
  else {
    var output = "!" + command + " is not a valid command.\n"
    return [output, "", ""];
  }
}

// Opens module that contains the function for the particular command and runs the function
function runCommand(command, args, request, type) {
  var file = require('./' + type + 'Commands/' + command + '.js');
  var commandList = [imageCommands, textCommands]
  return file.runFunction(commandList, args, request);
}

// Wraps text after 1000 characters and breaks at word boundaries
async function postWrapper(response) {
  var maxWidth = 1000;
  var message = response[0];
  var messageArray = [];

  // Loop runs if the message is over 1000
  while (message.length > maxWidth) {
    found = false;

    // Finds first whitespace before 1000 characters and breaks up the message there
    for (i = maxWidth; i >=0; i--) {
      if (testWhite(message.charAt(i))) {
        
        // Breaks message at the white space and pushes the first part of the message to the array of all messages
        messageArray.push(message.substr(0, i));
        message = message.substr(i + 1);
        found = true;
        break;
      }
    }

    // If no white space characters exist, just break at 1000 characters
    if (!found) {
        messageArray.push(message.substr(0, maxWidth));
        message = message.substr(maxWidth);

    }
  }

  // Loop through array of messages, waiting for the last one to post before posting the next one
  for (var i = 0; i <= messageArray.length-1; i++) {
    postMessage([messageArray[i], response[1], response[2]]);
    await new Promise(r => setTimeout(r, 400));
  }

  // Post what ever is left after wrapping the message
  postMessage([message, response[1], response[2]]);

}

// Tests if first character of given string is whitespace
function testWhite(x) {
  var white = /\s/;
  return white.test(x.charAt(0));
}

// Takes in the message, type, and link and actually sends the message to GroupMe
function postMessage(response) {
  var options, body, botReq;

  var botResponse = response[0];
  var type = response[1];
  var link = response[2];

  // Sets up parameters for https request to go to the GroupMe api
  options = {
    hostname: 'api.groupme.com',
    path: '/v3/bots/post',
    method: 'POST'
  };

  // Sets what the message will actually send
  if (type == "image") {
    body = {
      "bot_id" : botID,
      "text" : botResponse,
      "attachments": [
        {
        "type"  : type,
        "url"   : link
        }
    ]
    };
  }
  else {
    body = {
      "bot_id" : botID,
      "text" : botResponse
    };
  }

  console.log('sending ' + botResponse + ' to ' + botID);

  // Sends https request to the GroupMe api
  botReq = HTTPS.request(options, function(res) {
      
      // If everything worked, do nothing
      if(res.statusCode == 202) {
        //neat
      } 
      
      // If there is an error, send the error to the console
      else {
        console.log('rejecting bad status code ' + res.statusCode);
      }
  });

  // If an error happens, send an error message to the console
  botReq.on('error', function(err) {
    console.log('error posting message '  + JSON.stringify(err));
  });

  // If the requests timesout, send an error message to the console
  botReq.on('timeout', function(err) {
    console.log('timeout posting message '  + JSON.stringify(err));
  });

  // Write body to botReq and end https request
  botReq.end(JSON.stringify(body));
}

// Allows other files to access respond()
exports.respond = respond;