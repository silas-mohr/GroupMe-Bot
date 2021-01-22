export function runFunction(commands, args, request) {
  var botResponse, type, link;

  botResponse = "";
  type = "image";
  link = images[Math.floor(Math.random() * images.length)]

  return [botResponse, type, link];
}


images = [
"https://i.groupme.com/480x678.jpeg.512a698a8cdd46319583341a56b1def6.large",
"https://i.groupme.com/752x756.jpeg.763dcb1a253a4e7196f394b8a613c253.large",
"https://i.groupme.com/1080x1920.jpeg.1cd4177e9f264d39966b4d94010387c3.large"
]
