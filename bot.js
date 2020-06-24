//Pas touche aux premières constantes. Sinon, ça va moins bien marcher.
const Discord = require('discord.js');
const bot = new Discord.Client();
const token = process.env.token;
bot.login(token);

//Boucle pour le statut du bot au démarrage :
bot.on("ready", () =>{
    bot.user.setActivity("chat perché ! 😹")
});

//Boucle contenant la blacklist :
bot.on("guildMemberAdd", member =>{
    if(member.id = "376500913465982976"){ //Petit con de 14 piges.
        const reason = "Cette personne a été blacklisté car considéré(e) comme potentiellement nuisible au bien-être du serveur."
        member.ban(reason);
        console.log(`${member.username}#${member.discriminator} a été banni avec succès.`)
    }
});

//Boucle contenant les commandes :
bot.on("message", async message => {

    //Constantes pour l'ID de la propriétaire et des contributeurs du bot. :
        const ownerID = "382500192907165717"; //Nyusuka ; propriétaire du bot.
        const contributorID_01 = "452410888910143499"; //Alyssia ; propriétaire du serveur Fans de yuri FR.

    //Autres constantes pour le bon focntionnement des commandes. :
        const prefix = '%';
            if(message.content.indexOf(prefix) !== 0) return;
        const args = message.content.slice(prefix.length).trim().split(/ +/g); 
        const command = args.shift().toLowerCase();

//Commandes réservées à Nyusuka et aux contributeurs du développement du bot :

    //Commande pour changer le statut du bot. [&aktivität] :
        if(command === "aktivität"){
            const aktivität = args.join(" ");
            if(message.author.id !== ownerID && message.author.id !== contributorID_01) return message.channel.send("Désolée, mais pour des raisons pratiques, cette commande n'est utilisable que par Nyusuka ou Alyssia.");
            if(!aktivität) return message.reply("AKTIVITÄT ! SCHNELL !");
            bot.user.setActivity(aktivität);
            message.delete().catch(O_o=>{});
            console.log(`Le statut du bot à été changé pour "Joue à ${aktivität}" par ${message.author.username}#${message.author.discriminator} (ID : ${message.author.id}).`);
        };

//Commandes de role-play :

    //Hug :
        if(command === "hug") {

        let member = message.mentions.members.first();
            if(!member)
            return message.reply("Tu dois mentionner une personne à câliner. =3");

        var hug_list = [
            "https://imgur.com/YdjuHIr.gif",
            "https://imgur.com/aEdAZYc.gif",
            "https://imgur.com/ix4pgEJ.gif",
            "https://imgur.com/mAklRRg.gif",
            "https://imgur.com/6D4XKIq.gif",
            "https://imgur.com/j21DTlV.gif",
            "https://imgur.com/cSg1o6L.gif",
            "https://imgur.com/MCAueOW.gif"
        ];
    
        var hug_image = hug_list[Math.floor(Math.random() * hug_list.length)] ;
        var hug_embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setTitle('Câlin !')
        .setImage(hug_image)
        .setDescription(`_**${message.author.username}** fait un câlin à **${member.displayName}**._`)
        message.channel.send(hug_embed);
    };

});
