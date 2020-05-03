//Pas touche aux premières constantes. Sinon, ça va moins bien marcher.
const Discord = require('discord.js');
const bot = new Discord.Client();
const token = process.env.token;
bot.login(token);

//Boucle pour le statut du bot au démarrage :
bot.on("ready", async message =>{
    bot.user.setActivity("chat perché ! 😹")
});

//Boucle contenant les évènements :
bot.on("message", async message =>{

});

//Boucle contenant les commandes :
bot.on("message", async message => {

    //Constantes pour l'ID de la propriétaire et des contributeurs du bot. :
        const ownerID = "382500192907165717"; //Nyusuka ; propriétaire du bot.
        const contributorID_01 = "452410888910143499"; //Alyssia ; propriétaire du serveur Fans de yuri FR.

    //Autres constantes pour le bon focntionnement des commandes. :
        const prefix = '<!';
            if(message.content.indexOf(prefix) !== 0) return;
        const args = message.content.slice(prefix.length).trim().split(/ +/g); 
        const command = args.shift().toLowerCase();

//Commandes réservées à Nyusuka et aux contributeurs du développement du bot :

    //Commande pour changer le statut du bot. [&aktivität] :
        if(command === "aktivität"){
            const aktivität = args.join(" ");
            if(message.author.id !== ownerID && message.author.id !== contributorID_01) return message.channel.send("Désolée, mais cette commande n'est utilisable qu'à des fins expérimentales par les personnes qui contribuent à mon développement. Si vous souhaitez l'utiliser et apporter votre maigre soutien, veuillez ~~aller vous faire foutre~~ postuler via la commande `&suggest` ou vous adresser directement à ma créatrice.");
            if(!aktivität) return message.reply("AKTIVITÄT ! SCHNELL !");
            bot.user.setActivity(aktivität);
            message.delete().catch(O_o=>{});
            console.log(`Le statut du bot à été changé pour "Joue à ${aktivität}" par ${message.author.username}#${message.author.discriminator} (ID : ${message.author.id}).`);
        };

});
