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
      if (channel.id == "XXXXXXXXXXXXXXXXXXX") {
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
  let arguments = fullcommand.slice(1);
  if (command == "remindme") {
    let name = arguments[0];

  }
  else if (command == "GOT") {
    receivedMessage.channel.send("FACT! Game of Thrones is the best show of all time.");
  }
  else if (command == "quote") {
    let quotes = [
      '"And men go abroad to admire the heights of mountains, the mighty waves of the sea, the broad tides of rivers, the compass of the ocean, and the circuits of the stars, yet pass over the mystery of themselves without a thought." ― St. Augustine',
      "\"For the soul is dyed by the soul's thoughts.\" - Marcus Aurelius (originally Heraclitus thought)",
      '"When I was a boy and I would see scary things in the news, my mother would say to me, "Look for the helpers. You will always find people who are helping." - Fred Rogers'
    ];
    
    receivedMessage.channel.send(quotes[getRandomInt(4)]);

  }
  else{
    receivedMessage.channel.send("Not a command you silly goose!");
  }
}


bot_secret_token = "XXXXXXXXXXXXXXXXXX";

client.login(bot_secret_token);
