//Pas touche aux premières constantes. Sinon, ça va moins bien marcher.
const Discord = require('discord.js');
const bot = new Discord.Client();
const token = process.env.token;
bot.login(token);
//Note à moi-même : penser à ajouter des commandes "nya" et "nose bleed" à mon bot.

//Boucle pour le statut du bot au démarrage :
bot.on("ready", () =>{
    bot.user.setActivity("chat perché ! 😹")
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

//Commandes de roleplay :

    /*
    #hug <user>
    #kiss (bisou-joue) <user>
    #cuddle <user>
    #pat <user>
    #poke (tripotage de joue) <user>
    #handholding <user>
    #smile [user]
    #blush [user]
    */

    //Hug :
        if(command === "hug"){
            let member = message.mentions.members.first();
                if(!member) return message.reply("Tu dois mentionner une personne à câliner. =3");
            var hug_list = [
                "https://imgur.com/6D4XKIq.gif",
                "https://imgur.com/j21DTlV.gif",
                "https://cdn.discordapp.com/attachments/706170967960977409/726571096416976926/08e4fe14-485f-4f2b-9014-892d1d672b94.gif",
                "https://media.tenor.com/images/dedb92412ec281c9a89b79492fa71831/tenor.gif",
                "https://media.tenor.com/images/daed52a4ee85e276e1099ac77d1539c3/tenor.gif",
                "https://cdn.discordapp.com/attachments/706170967960977409/726570789050122340/tenor-1.gif",
                "https://images-ext-2.discordapp.net/external/RZTr3T4mdgJtcY3q1LIplds03o9b123e2V7SQP_CLxk/https/cdn.weeb.sh/images/B1SzeshCW.gif?width=400&height=225",
                "https://images-ext-1.discordapp.net/external/OCi3hLOGIydsGnduaL_DrKrldFZP0RdFrkC8aa91R7A/https/cdn.weeb.sh/images/B1Qb88XvW.gif",
                "https://images-ext-1.discordapp.net/external/ald1WHnALpYd-BV4lAZ1WYJ5bV938TPuERkyqse2Fig/https/cdn.weeb.sh/images/SJfEks3Rb.gif?width=400&height=225",
                "https://images-ext-1.discordapp.net/external/xUyeHjViQkLTS-QPI894Pgi3sMvA70O54QSBr-LX8P0/https/cdn.weeb.sh/images/Hyv6uOQPZ.gif?width=400&height=208",
                "https://images-ext-1.discordapp.net/external/ED29Pd7JzKFcWtjEd_I9NUoms47X7asheMx4blzO5kY/https/cdn.weeb.sh/images/H1X6OOmPW.gif"
            ];
            var hug_image = hug_list[Math.floor(Math.random() * hug_list.length)];
            var hug_embed = new Discord.RichEmbed()
            .setColor('RANDOM')
            .setTitle('Câlin !')
            .setURL(hug_image)
            .setImage(hug_image)
            .setDescription(`_**${message.author.username}** fait un câlin à **${member.displayName}**._`)
            message.channel.send(hug_embed);
        };

    //Cuddle :
        if(command === "cuddle"){
            let member = message.mentions.members.first();
                if(!member) return message.reply("Tu dois mentionner une personne à réconforter. =3");
            var cuddle_list = [
                "https://imgur.com/YdjuHIr.gif",
                "https://imgur.com/ix4pgEJ.gif",
                "https://imgur.com/MCAueOW.gif",
                "https://media.tenor.com/images/7a6c91842f8b2871ecf5234bcd095da7/tenor.gif",
                "https://media.tenor.com/images/8d33eeee359d0453de52c5779dd23c46/tenor.gif",
                "https://images-ext-1.discordapp.net/external/ZxjcfVrvsko4WLdMZ-BzQgntB-W2PsXM3S6avmUKrIY/https/cdn.weeb.sh/images/r12R1kYPZ.gif",
                "https://images-ext-2.discordapp.net/external/WTezF_lBdL2PKmcOFQVo7xocXD9pJLmGMJhDRvzjiug/https/cdn.weeb.sh/images/rkA6SU7w-.gif",
                "https://images-ext-1.discordapp.net/external/j2lZhG1iY9jAPEab8SxR6FFo4V9uVghg92yJUZDCwiI/https/cdn.weeb.sh/images/BJkABImvb.gif?width=271&height=300"
            ];
            var cuddle_image = cuddle_list[Math.floor(Math.random() * cuddle_list.length)];
            var cuddle_embed = new Discord.RichEmbed()
            .setColor('RANDOM')
            .setTitle('Cuddle !')
            .setURL(cuddle_image)
            .setImage(cuddle_image)
            .setDescription(`_**${message.author.username}** réconforte **${member.displayName}**._`)
            message.channel.send(cuddle_embed);
        };

    //Kiss (bisou-joue) :
        if(command === "kiss"){
            let member = message.mentions.members.first();
                if(!member) return message.reply("Tu dois mentionner une personne à bisouter. =3");
            var kiss_list = [
                "https://cdn.discordapp.com/attachments/706170967960977409/726570393925582988/9ba325b3eee2c69f0b3ffd00696230a0.gif",
                "https://tenor.com/view/yuri-kiss-anime-blushed-gif-17050283"
            ];
            var kiss_image = kiss_list[Math.floor(Math.random() * kiss_list.length)];
            var kiss_embed = new Discord.RichEmbed()
            .setColor('RANDOM')
            .setTitle('Bisou-joue !')
            .setImage(kiss_image)
            .setDescription(`_**${message.author.username}** fait un bisou sur la joue de **${member.displayName}**._`)
            message.channel.send(kiss_embed);
        };

    //Blush (rougir) :
        if(command === "blush"){
            var blush_list = [
                "https://media.tenor.com/images/b1626b3f9b94d3494c8a05d5cad15332/tenor.gif",
                "https://images-ext-2.discordapp.net/external/sDMoN120Tl0gsGgg4gLBAcFWtsIRMlkhKLfNHOmlsbw/https/cdn.weeb.sh/images/B1J4GIQP-.gif",
                "https://media.tenor.com/images/818a1df69200edd887d3bfc99969d65c/tenor.gif",
                "https://tenor.com/view/surprised-anime-anime-huh-wait-what-catalina-claes-gif-17082491",
                "https://thumbs.gfycat.com/WickedMelodicAfricangroundhornbill-small.gif"
            ];
            var blush_image = blush_list[Math.floor(Math.random() * blush_list.length)];
            let member = message.mentions.members.first();
                if(!member){
                    var blush_embed = new Discord.RichEmbed()
                    .setColor('RANDOM')
                    .setTitle('(≧▽≦)')
                    .setURL(blush_image)
                    .setImage(blush_image)
                    .setDescription(`_**${message.author.username}** rougit._`)
                    message.channel.send(blush_embed);
                };            
            var blush_embed = new Discord.RichEmbed()
            .setColor('RANDOM')
            .setTitle('(≧▽≦)')
            .setURL(blush_image)
            .setImage(blush_image)
            .setDescription(`_**${message.author.username}** rougit face à **${member.displayName}**._`)
            message.channel.send(blush_embed);
        };

    //Poke :
        if(command === "poke"){
            let member = message.mentions.members.first();
                if(!member) return message.reply("Tu dois mentionner une personne à tripoter. =3");
            var poke_list = [
                "..."
            ];
            var poke_image = poke_list[Math.floor(Math.random() * poke_list.length)];
            var poke_embed = new Discord.RichEmbed()
            .setColor('RANDOM')
            .setTitle('Tripotage de joue !')
            .setURL(poke_image)
            .setImage(poke_image)
            .setDescription(`_**${message.author.username}** tripote la joue de **${member.displayName}**._`)
            message.channel.send(poke_embed);
        };

    //Pat
        if(command === "pat"){
            let member = message.mentions.members.first();
                if(!member) return message.reply("Tu dois mentionner une personne à pat pat. =3");
            var pat_list = [
                "https://tenor.com/view/anime-fox-cute-pat-head-gif-14083552"
            ];
            var pat_image = pat_list[Math.floor(Math.random() * pat_list.length)];
            var pat_embed = new Discord.RichEmbed()
            .setColor('RANDOM')
            .setTitle('Pat pat !')
            .setURL(pat_image)
            .setImage(pat_image)
            .setDescription(`_**${message.author.username}** fait pat pat à **${member.displayName}**._`)
            message.channel.send(pat_embed);
        };

    //Smile :
        if(command === "smile"){
            var smile_list = [
                "https://tenor.com/view/charlotte-anime-gif-5919725",
                "https://media.tenor.com/images/8f711b12e00bc1816694bf51909f8b8f/tenor.gif",
                "https://tenor.com/view/anime-creature-happy-smiling-fox-gif-16683079"
            ];
            var smile_image = smile_list[Math.floor(Math.random() * smile_list.length)];
            let member = message.mentions.members.first();
            if(!member){
                var smile_embed = new Discord.RichEmbed()
                .setColor('RANDOM')
                .setTitle('(✿^‿^)')
                .setURL(smile_image)
                .setImage(smile_image)
                .setDescription(`_**${message.author.username}** sourit._`)
                message.channel.send(blush_embed);
            }
            else{         
                var smile_embed = new Discord.RichEmbed()
                .setColor('RANDOM')
                .setTitle('(✿^‿^)')
                .setURL(smile_image)
                .setImage(smile_image)
                .setDescription(`_**${message.author.username}** sourit à **${member.displayName}**._`)
                message.channel.send(smile_embed)
            }
        };

    //Handholding :
        if(command === "handholding"){
            let member = message.mentions.members.first();
                if(!member) return message.reply("Tu dois mentionner une personne à qui tenir la main. =3");
            var handholding_list = [
                "https://images.app.goo.gl/z1SMC4Ukxs85wta9A",
                "https://images.app.goo.gl/DQMiVj25qN3wPyGJ9"
            ];
            var handholding_image = handholding_list[Math.floor(Math.random() * handholding_list.length)];
            var handholding_embed = new Discord.RichEmbed()
            .setColor('RANDOM')
            .setTitle('Ship !')
            .setURL(handholding_image)
            .setImage(handholding_image)
            .setDescription(`_**${message.author.username}** tient la main de **${member.displayName}**._`)
            message.channel.send(handholding_embed);
        };

 /*   //Nose_bleed :
        if(command === "smile"){
            var smile_list = [
                "https://tenor.com/view/charlotte-anime-gif-5919725",
                "https://media.tenor.com/images/8f711b12e00bc1816694bf51909f8b8f/tenor.gif",
                "https://tenor.com/view/anime-creature-happy-smiling-fox-gif-16683079"
                ];
            var smile_image = smile_list[Math.floor(Math.random() * smile_list.length)];
            let member = message.mentions.members.first();
            if(!member){
                var smile_embed = new Discord.RichEmbed()
                .setColor('RANDOM')
                .setTitle('(✿^‿^)')
                .setURL(smile_image)
                .setImage(smile_image)
                .setDescription(`_**${message.author.username}** sourit._`)
                message.channel.send(blush_embed);
            }
            else{         
                var smile_embed = new Discord.RichEmbed()
                .setColor('RANDOM')
                .setTitle('(✿^‿^)')
                .setURL(smile_image)
                .setImage(smile_image)
                .setDescription(`_**${message.author.username}** sourit à **${member.displayName}**._`)
                message.channel.send(smile_embed)
            }
        };*/

//Autres commandes :

    //Commande pour afficher la liste des commandes disponibles du bot. [&help] :
        if(message.content.startsWith(prefix + "help")){
            var help = new Discord.RichEmbed()
                .setColor('RANDOM')
                .setTitle('Liste des commandes disponibles :')    
                .setDescription("**__Commandes de roleplay :__**\n● `%hug`\n● `%cuddle`\n● `%kiss`\n● `%pat`\n● `%poke`\n● `%smile`\n● `%handholding`\n \n**__Autres commandes :__**\n● `%gif_suggest` _(Permet de suggérer de nouveaux GIFs pour les commadnes de roleplay.)_\n● `%bug_report` _(Permet de signaler un bug dans le but de le corriger.)_")
                .setFooter("Certaines commandes possèdent encore assez peu de GIFs. D'autres ne fonctionneront pas car elles n'ont pas de GIF. Alors pensez à en proposer régulièrement pour qu'ils puissent être ajoutés le plus vite possible.")
            message.channel.send(help);
        }; //hug kiss cuddle pat poke smile handholding

    //Commande pour laisser des suggestions pour le bot. [%suggest] :
        if(message.content.startsWith(prefix + "suggest")){
            let sayMessage = args.join(" ");
            message.react('👍')
            var suggestion = new Discord.RichEmbed()
                .setAuthor(message.author.username + "#" + message.author.discriminator + " vous propose la suggestion suivante ! :")
                .setThumbnail(message.author.avatarURL)
                .setDescription(sayMessage)
                .setColor('RANDOM')
                .setTimestamp()
            bot.fetchUser("382500192907165717", false)
            .then(user => {user.send(suggestion)
            });
            message.reply("Moi et ma créatrice vous remercions de cette proposition. Nous l'examinerons dès que possible !");
        };

    //Commande pour laisser des suggestions de GIFs. [%gif_suggest] :
        if(message.content.startsWith(prefix + "gif_suggest")){
            let sayMessage = args.join(" ");
            message.react('👍')
            var suggestion = new Discord.RichEmbed()
                .setAuthor(message.author.username + "#" + message.author.discriminator + " vient de proposer un nouveau GIF ! :")
                .setThumbnail(message.author.avatarURL)
                .setDescription(sayMessage)
                .setColor('RANDOM')
                .setTimestamp()
            bot.fetchUser("382500192907165717", false)
            .then(user => {user.send(suggestion)
            });
            message.reply("Merci bien ! =D");
        };

    //Commande pour signaler un bug. [%bug_report] :
        if(command === "bug_report"){
            if(message.content.startsWith(prefix + "say")){
                if(!message.channel.guild) return message.channel.send("Désolé, mais cette commande n'est pas disponible en messages privés.");
                const sayMessage = args.join(" ");
                if(!sayMessage) return message.reply("Tu as oublié de mettre un GIF; =(");
                message.delete().catch(O_o=>{});
                message.channel.send(`<@${ownerID}, le bug suivant vient d'être signalé dans ce salon par <@${message.author.id}>. : "${sayMessage}"`);
            };
        }
    
    //Commande de ping. [&ping] :
        if(message.content.startsWith(prefix + "ping")){
            message.channel.send(`Ping de \` ${new Date().getTime() - message.createdTimestamp} \` ms. \nLatence de l'API de \` ${Math.round(bot.ping)} \` ms.`);
        };

    //Commande pour changer le statut du bot. [%aktivität] :
        if(command === "aktivität"){
            const aktivität = args.join(" ");
            if(message.author.id !== ownerID && message.author.id !== contributorID_01) return message.channel.send("Désolée, mais cette commande n'est utilisable qu'à des fins expérimentales par les personnes qui contribuent à mon développement. Si vous souhaitez l'utiliser et apporter votre maigre soutien, veuillez ~~aller vous faire foutre~~ postuler via la commande `&suggest` ou vous adresser directement à ma créatrice.");
            if(!aktivität) return message.reply("AKTIVITÄT ! SCHNELL !");
            bot.user.setActivity(aktivität);
            message.delete().catch(O_o=>{});
            console.log(`Le statut du bot à été changé pour "Joue à ${aktivität}" par ${message.author.username}#${message.author.discriminator} (ID : ${message.author.id}).`);
        };
});
