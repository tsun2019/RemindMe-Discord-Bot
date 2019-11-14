const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  let textID = "";
  console.log("Connected as " + client.user.tag);
  console.log("Servers: " )
  client.guilds.forEach((guild) => {
    console.log(guild.name + " ");
    

    guild.channels.forEach((channel) => {
      console.log(`Name: ${channel.name}, Type: ${channel.type}, ID: ${channel.id}`);
      if (channel.id == "561341142030090247") {
        textID = channel.id;
      }
    })
  })
  let textChannel = client.channels.get(textID);
});


client.on('message', (receivedMessage) => {
  if (receivedMessage.author == client.user) {
    return;
  }

  if (receivedMessage.content.startsWith("!")){
    processCommand(receivedMessage);
  }
})

getRandomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
}

processCommand = (receivedMessage) => {
  let command = receivedMessage.content.substr(1);
  let fullcommand = command.split(" ");
  command = fullcommand[0];
  //make arguments take rest of command
  let arguments = fullcommand.slice(1);
  if (command == "remindme") {
    //time/duration will always be last argument
    //if not number then error?
    let time = arguments.pop();
    let description = arguments.join(" ");
      
    //if begin/end with quotes then take it as description
    if(description[0] == '"' && description[description.length - 1] == '"'){
     //remove quotes by removing first and last characters of string.
     description = description.slice(1, -1);
     console.log(description);
    console.log("<@" + receivedMessage.author.id + "> " + description);
     setTimeout(() => receivedMessage.channel.send("<@" + receivedMessage.author.id + "> " + description), time * 60000);
    }
    else
     receivedMessage.channel.send("error");
    //receivedMessage.channel.send("kobe " + description);

  }
  else if (command == "GOT") {
    receivedMessage.channel.send("FACT! Game of Thrones' directors ruined the closing of the show.");
  }
  else if (command == "quote") {
    let quotes = [
      '"And men go abroad to admire the heights of mountains, the mighty waves of the sea, the broad tides of rivers, the compass of the ocean, and the circuits of the stars, yet pass over the mystery of themselves without a thought." ― St. Augustine',
      "\"For the soul is dyed by the soul's thoughts.\" - Marcus Aurelius (originally Heraclitus thought)",
      '"When I was a boy and I would see scary things in the news, my mother would say to me, "Look for the helpers. You will always find people who are helping." - Fred Rogers',
      '"Be who you are and say what you feel because those who mind don’t matter and those who matter don’t mind." – Dr. Seuss'
    ];
    
    receivedMessage.channel.send(quotes[getRandomInt(4)]);
    
  }
  else{
    receivedMessage.channel.send("Not a command you silly goose!");
  }
}


bot_secret_token = "NTYxMzM4NTg5NzQxNTgwMjg5.XKpIkg.RDjA9zwS1fuu06Yb-56n6N6mlUs";

client.login(bot_secret_token);
