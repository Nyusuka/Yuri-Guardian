//Penser à créer une commande d'avertissement [&warn] avec avertissement en mp, proposition de ban après 5 avertissements, etc. Penser aussi à l'anti-flood.
//Problème des commandes NSFW ; tout remettre en une commande avec arguments, ou tester un "if(message.content.startsWith(prefix + "command_name arg"))").
//Modifier la commande NSFW pour qu'elle affichent de vraies images à certains contributeurs.
//Mettre une réponse en zalgo pour le [&&hack <user>].
//Priorités : créer commandes cat, modifier commande help, voir pour le projet de reconnaisance vocale, ajouter des possibilités aux commandes hack, cadavresexquis, etc.

//Pas touche aux premières constantes. Sinon, ça va moins bien marcher.
const Discord = require('discord.js');
const bot = new Discord.Client();
const token = process.env.token;
bot.login(token);

//Boucle contenant les évènements :
bot.on("message", async message =>{

    //Pour réagir aux 👌 :
        let ok_hand_event = ['👌'];
            let ok_hand_fondintext = false;
            for(var i in ok_hand_event){
                if(message.content.toLowerCase().includes(ok_hand_event[i].toLowerCase()))
                    ok_hand_fondintext = true;
                if(ok_hand_fondintext){
                    message.channel.send('👆');
        }};
        
    //Pour mettre un sticker :larry: :
        let larry_event = [':larry:'];
            let larry_fondintext = false;
            for(var i in larry_event){
                if(message.content.toLowerCase().includes(larry_event[i].toLowerCase()))
                    larry_fondintext = true;
                if(larry_fondintext){
                    message.channel.send("https://cdn.discordapp.com/emojis/540223339411537932.png");
        }};

    //Pour emmerder le plus gentil des noobs de l'orthograve :
        let typo_01_event = ["bizzard"];
            if(message.author.id === "246395977450258432"){
            let typo_01_fondintext = false;
            for(var i in typo_01_event){
                if(message.content.toLowerCase().includes(typo_01_event[i].toLowerCase()))
                    typo_01_fondintext = true;
                if(typo_01_fondintext){
                    message.channel.send("bizarre*");
        }}};

    //Dialogue entre bots 1 avec Kagura :
        let dialogue_01_event = ["ce que tu dit"];
            if(message.author.id === "511235137791459332"){
            let dialogue_01_fondintext = false;
            for(var i in dialogue_01_event){
                if(message.content.toLowerCase().includes(dialogue_01_event[i].toLowerCase()))
                    dialogue_01_fondintext = true;
                if(dialogue_01_fondintext){
                    message.channel.send("Ce que je dis est bizarre ? Et le fait que tu te cures le nez, on en parle ?");
        }}};

    //Dialogue entre bots 2 avec Kagura :
        let dialogue_02_event = ["Ceux qui font les grammair-nazi ont toujour quelque chose a compenser"];
            if(message.author.id === "511235137791459332"){
            let dialogue_02_fondintext = false;
            for(var i in dialogue_02_event){
                if(message.content.toLowerCase().includes(dialogue_02_event[i].toLowerCase()))
                    dialogue_02_fondintext = true;
                if(dialogue_02_fondintext){
                    message.channel.send("Peut-être, mais toi aussi, étant donné que tu esquives ma question à propos du fait que tu te cures le nez et que t'as un peu l'air d'une autiste. =P");
        }}};

    //Dialogue entre bots 3 avec Kagura :
        let dialogue_03_event = ["On dirai que j'ai toucher un point sensible"];
            if(message.author.id === "511235137791459332"){
            let dialogue_03_fondintext = false;
            for(var i in dialogue_03_event){
                if(message.content.toLowerCase().includes(dialogue_03_event[i].toLowerCase()))
                    dialogue_03_fondintext = true;
                if(dialogue_03_fondintext){
                    message.channel.send("Pourquoi tu esquives encore, tu es vexée ? =]");
        }}};

});

//Boucle contenant les commandes :
bot.on("message", async message => {

    //Constantes pour l'ID de la propriétaire et des contributeurs du bot. :
        const ownerID = "382500192907165717"; //Nyusuka ; propriétaire du bot.
        const contributorID_01 = "246395977450258432"; //Arkaxii ; testeur et maître du codage.

    //Autres constantes pour le bon focntionnement des commandes. :
        const prefix = '&';
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

//Commandes expérimentales :

    //Commande fourre-tout pour tests. [&test01] :
        if(command === "test01"){
            if(message.author.id !== "382500192907165717" && message.author.id !== "246395977450258432")
                return message.channel.send("Désolée, mais cette commande n'est utilisable qu'à des fins expérimentales par les personnes qui contribuent à mon développement. Si vous souhaitez l'utiliser et apporter votre maigre soutien, veuillez ~~aller vous faire foutre~~ postuler via la commande `&suggest` ou vous adresser directement à ma créatrice.");
            var tuck01 = [
                `${message.guild.members.random()}`,
                `<@${message.author.id}>`
            ];
            var tuck02 = tuck01[Math.floor(Math.random() * tuck01.length)];
            var tuck03 = [
                `1test_pas_ouf.exe = ${tuck02} | Par <@${message.author.id}>.`,
                `2test_pas_ouf.exe = ${tuck02} | Par <@${message.author.id}>.`,
                `3test_pas_ouf.exe = ${tuck02} | Par <@${message.author.id}>.`
            ];
            var tuck04 = tuck03[Math.floor(Math.random() * tuck03.length)];
            message.channel.send(tuck04);
        };

    //Test pour essayer une réaction au hasard. [&test02] :
        {
            function random(min, max){
                min = Math.ceil(1);
                max = Math.floor(10);
                randnum = Math.floor(Math.random() * (max - min +1) +min);
            }
        if(command === "test02"){
            var general_help = new Discord.RichEmbed()
                .setColor('RANDOM')
                .setThumbnail("https://media.discordapp.net/attachments/576853882811187219/658356977885511700/pdp_pour_bot.png")
                .setDescription(`Test`)
            message.channel.send(general_help)
            .then(message => {
                message.react("💡")
            .then( r => {
                message.react("🖼")
            .then( r => {
                message.react("🎮")
            .then( r => {
                random(); 
                if(randnum == 1){
                    message.react("🤷‍♂️");
                }
                if(randnum == 2){
                    message.react("👀");
                }
                if(randnum == 3){
                    message.react("🎱");
                }
                if(randnum == 4){
                    message.react("😉");
                }
                if(randnum == 5){
                    message.react("🤤");
                }
                if(randnum == 6){
                    message.react("😏");
                }
                if(randnum == 7){
                    message.react("🍕");
                }
                if(randnum == 8){
                    message.react("☢");
                }
                if(randnum == 9){
                    message.react("🔞");
                }
                if(randnum == 10){
                    message.react("🚾");
                }
            })
            })
            })
            })
        }};

    //Test pour la commande help [test03] :
    {
        function random(min, max){
            min = Math.ceil(1);
            max = Math.floor(10);
            randnum = Math.floor(Math.random() * (max - min +1) +min);
        }
    if(command === "test03"){
        /*let pages = ["Informations", "Stickers", "Jeux", "Divers"];
        let page = 1;*/
        var helpt_embed = new Discord.RichEmbed()
            .setColor('RANDOM')
            .setThumbnail("https://media.discordapp.net/attachments/576853882811187219/658356977885511700/pdp_pour_bot.png")
            .setTitle('Les commandes disponibles pour le RisiBot sont regroupées par catégories. Voici la liste des catégories ! :')    
            .setDescription(`:bulb: Informations\n:frame_photo: Stickers\n:video_game: Jeux\n:pencil: Divers`)
            .setFooter("Cette liste n'est pas complète pour le moment. Elle s'agrandira a fur et à mesure du développement du bot.\nUtilisez les réactions pour afficher la catégorie souhaitée.")
        message.channel.send(helpt_embed)
        .then(message => {
            message.react("💡")
        .then( r => {
            message.react("🖼")
        .then( r =>{
            message.react("🎮")
        .then( r =>{
            random(); 
                if(randnum == 1){
                    message.react("🤷‍♂️");
                }
                if(randnum == 2){
                    message.react("👀");
                }
                if(randnum == 3){
                    message.react("🎱");
                }
                if(randnum == 4){
                    message.react("😉");
                }
                if(randnum == 5){
                    message.react("🤤");
                }
                if(randnum == 6){
                    message.react("😏");
                }
                if(randnum == 7){
                    message.react("🍕");
                }
                if(randnum == 8){
                    message.react("☢");
                }
                if(randnum == 9){
                    message.react("🔞");
                }
                if(randnum == 10){
                    message.react("🚾");
                }
        })
        })
        })
        })

        bot.on('messageReactionAdd',async (reaction, user) =>{
            if(reaction.emoji.name === "💡" && user.id !== bot.user.id){
                reaction.remove(user)
                helpt_embed.setColor('RANDOM')
                helpt_embed.setThumbnail("https://media.discordapp.net/attachments/576853882811187219/658356977885511700/pdp_pour_bot.png")
                helpt_embed.setTitle(':bulb: Informations')    
                helpt_embed.setDescription("● `&help` _(Pour afficher la liste de toutes les commandes.)_\n● `&invite` _(Pour inviter le bot sur ton serveur.)_\n● `&ping` _(Pour connaitre le temps de réponse (ping) du bot et la latence de l'API Discord.)_\n● `&suggest <Insérez une suggestion ici.>` _(Des questions ? Des remarques ? Des idées de commandes, de Chuck Norris fact, et autres possibilité à proposer ? Soumettez-moi tout cela via cette commande, et je m'en occuperai moi-même dans les plus brefs délais !)_")
                helpt_embed.setFooter("Cette liste n'est pas complète pour le moment. Elle s'agrandira a fur et à mesure du développement du bot.\nUtilisez les réactions pour afficher la catégorie souhaitée.")
                message.channel.send(helpt_embed)
                message.react("🔙")
            }
        });
    }};

//Catégorie "Jeux" :

    //Commandes pour faire un Pile ou face. [&pile/&face]:
        {
            function random(min, max){
                min = Math.ceil(1);  //C'est le minimum qu'il peut choisir.
                max = Math.floor(3); //C'est le maximum qu'il peut choisir.
                randnum = Math.floor(Math.random() * (max - min +1) +min); //On définit le randnum : en gros, chaque random est numéroté.
            }
        if(message.content.startsWith(prefix + "pile")){
            random(); //On initialise le random.        
                if(randnum == 1){ //Chaque nouveau random est numéroté comme ça.
                    message.reply("Et tu tombes sur pile, c'est gagné !"); //Le message que tu envoies. (Réponse du bot, quoi.)
                }
                if(randnum == 2){ //Idem
                    message.reply("Tu es tombé sur face, pas de CHANCE.");
                }
                if(randnum == 3){
                    message.reply("Euh, la pièce est restée sur la tranche..."); //J'avais collé ça dans ma version sur calculatrice... xD
                }
        }};

        {
            function random(min, max){
                min = Math.ceil(1);
                max = Math.floor(3);
                randnum = Math.floor(Math.random() * (max - min +1) +min);
            }
        if(message.content.startsWith(prefix + "face")){
            random();
                if(randnum == 1){
                    message.reply("Et tu tombes sur face, c'est gagné !");
                }
                if(randnum == 2){
                    message.reply("Tu es tombé sur pile, pas de CHANCE.");
                }
                if(randnum == 3){
                    message.reply("Euh, la pièce est restée sur la tranche...");
                }
        }};

    //Commande pour créer des cadavres exquis. [&cadavresexquis] :
        if(message.content.startsWith(prefix + "cadavresexquis")){
            var sujets_liste = [ //7
                "Une bande de soviétiques ",
                "Emmanuel Macron ",
                "Le vieux schnok du quartier ",
                "Un manchot ",
                `<@${message.author.id}> `,
                `${message.guild.members.random()} `,
                "Un communiste "
            ];
            var verbes_liste = [ //6
                "bande ",
                "complote ",
                "marche ",
                "pisse ",
                "se suicide ",
                "se prend une sodomie à sec "
            ];
            var compléments_liste = [ //7
                "avec amour.",
                "comme un con.",
                "contre un arbre.",
                "sur un cheval.",
                "sans vergogne.",
                "avec un verre de vodka.",
                `en pensant à ${message.guild.members.random()}.`
            ];
            var sujet = sujets_liste[Math.floor(Math.random() * sujets_liste.length)];
            var verbe = verbes_liste[Math.floor(Math.random() * verbes_liste.length)];
            var complément = compléments_liste[Math.floor(Math.random() * compléments_liste.length)];
            var cadavres_exquis = new Discord.RichEmbed()
                .setColor('RANDOM')
                .setDescription(sujet + verbe + complément)
                .setFooter(`Demandé par ${message.author.username}.`)
                .setTimestamp()
            message.channel.send(cadavres_exquis);
        };

    //Commande pour faire un Either.io sur Discord. [&either] :
        if(message.content.startsWith(prefix + "either")){
            var either_list = [ //`:regional_indicator_a: ...XXXXX ?\n**OU**\n:b: ...XXXXX ?`,
                `:regional_indicator_a: ...être chauve ?\n**OU**\n:b: ...être manchot ?`,
                `:regional_indicator_a: ...le RisiBot ?\n**OU**\n:b: ...Kagura ?`,
                `:regional_indicator_a: ...Staline ?\n**OU**\n:b: ...Hitler ?`,
                `:regional_indicator_a: ...ne plus jamais pouvoir t'habiller ?\n**OU**\n:b: ...ne plus jamais pouvoir te laver ?`,
                `:regional_indicator_a: ...faire le métier que tu détestes le plus toute ta vie, ne jamais partir à la retraite, et vivre jusqu'à l'âge de 160 ans ?\n**OU**\n:b: ...être rejeté(e) et détesté(e) par tous les gens que tu aimes et vivre dans la solitude jusqu'à l'âge de 357 ans ?`,
                `:regional_indicator_a: ...ne jamais pouvoir avoir de rapports sexuels ?\n**OU**\n:b: ...ne plus jamais pouvoir jouer aux jeux vidéos ?`,
                `:regional_indicator_a: ...être très sociable mais toujours être préoccupé par les problèmes des autres ?\n**OU**\n:b: ...être antisocial et ne jamais te soucier des autres ?`
            ];
            var either = either_list[Math.floor(Math.random() * either_list.length)];
            var either_embed = new Discord.RichEmbed()
                .setColor('RANDOM')
                .setTitle("**Est-ce que tu préfères...**")
                .setDescription(either)
                .setFooter("Répondre avec les réactions A ou B.")
            message.channel.send(either_embed)
            .then(message => {
                message.react("🇦")
            .then( r => {
                message.react("🅱️")
            })
            })
        };

//Catégorie "Divers" :

    //Fausses commandes NSFW. [&nsfw <truc pas très catho>] :
        if(command === "nsfw"){
            message.reply("Si tu ne me dis pas ce que tu cherches, je ne peux pas savoir ce que je dois te mettre, si ce n'est ma ||main|| dans ton ||faciès||.\nMais sinon, voilà ce que tu peux chercher :\n● `&boobs`\n● `&dick`\n● `&lolicon`");
        };

        if(command === "boobs"){
            var boobs_embed = new Discord.RichEmbed()
                .setColor('RANDOM')
                .setImage("https://media.discordapp.net/attachments/382605587034144778/637796109208518678/Blank_84137de241bbb5d823d4a467c98f0ca8.gif")
                .setFooter(`Demandé par ${message.author.username}#${message.author.discriminator}.`)
                .setTimestamp()
            message.channel.send(boobs_embed);
        };

        if(command === "dick"){
            var dick_embed = new Discord.RichEmbed()
                .setColor('RANDOM')
                .setDescription("Here is a dick pick !")
                .setImage("https://media.discordapp.net/attachments/419199325684367360/645052037729615883/Dick_pick.jpg?width=268&height=473")
                .setFooter(`Demandé par ${message.author.username}#${message.author.discriminator}.`)
                .setTimestamp()
            message.channel.send(dick_embed);
        };

        if(command === "lolicon"){
            var loli_list = [
                "https://media.discordapp.net/attachments/444241116082995225/648211507892584476/tenor.png",
                "https://media.discordapp.net/attachments/444241116082995225/648213084829384715/932931506666fcbd6b414bb0e9fe7f9a.jpeg?width=455&height=474",
                "https://media.discordapp.net/attachments/444241116082995225/648213111563747361/original.jpg?width=434&height=473",
                "https://media.discordapp.net/attachments/419199325684367360/658337039355215878/IMG_20191126_183542_229.jpg"
            ];
            var loli = loli_list[Math.floor(Math.random() * loli_list.length)];
            var loli_embed = new Discord.RichEmbed()
                .setColor('RANDOM')
                .setTitle("Il n'y a vraiment que des pédophiles pour utiliser ce genre de commande !")
                .setImage(loli)
                .setFooter(`Demandé par ${message.author.username}#${message.author.discriminator}.`)
                .setTimestamp()
            message.channel.send(loli_embed);
        };

    //Commande de faux hacks. [&hack <user>] :
        if(message.content.startsWith(prefix + "hack")){
            if(!message.channel.guild) return message.channel.send("Désolé, mais cette commande n'est pas disponible en messages privés.");
            let troll_hack_target = message.mentions.members.first();
            if(!troll_hack_target) return message.reply("Si tu ne mentionne pas un utilisateur valide, je ne risque pas de faire grand chose.");
            var fake_hacks_list = [
                "J'avais la flemme de hack ce type, en fait.",
                "T'as vraiment cru que j'étais un bot de hacking, couillon ?!",
                "Euh... t'aimerais pas savoir ce que j'ai trouvé sur cette personne, en fait...",
                "Sainte mère de Dieu, cet individu en a au moins pour 4 Go de lolicons sur son PC !",
                `Je me suis aperçu que je me suis trompé de cible et que j'ai hacké la Maison Blanche...\nPrépare-toi à voir les gros hélicoptères noirs arriver !`
            ];
            var fake_hack = fake_hacks_list[Math.floor(Math.random() * fake_hacks_list.length)];
            const troll_hack = await message.channel.send(`_Connerie en cours. Veuillez patienter._
            **→ ---------- __0%__**`);
            troll_hack.edit(`_Connerie en cours. Veuillez patienter._
            **→ ●--------- __10%__**`);
            troll_hack.edit(`_Connerie en cours. Veuillez patienter._
            **→ ●●-------- __20%__**`);
            troll_hack.edit(`_Connerie en cours. Veuillez patienter._
            **→ ●●●------- __30%__**`);
            troll_hack.edit(`_Connerie en cours. Veuillez patienter._
            **→ ●●●●------ __40%__**`);
            troll_hack.edit(`_Connerie en cours. Veuillez patienter._
            **→ ●●●●●----- __50%__**`);
            troll_hack.edit(`_Connerie en cours. Veuillez patienter._
            **→ ●●●●●●---- __60%__**`);
            troll_hack.edit(`_Connerie en cours. Veuillez patienter._
            **→ ●●●●●●●--- __69%__**`);
            troll_hack.edit(`_Connerie en cours. Veuillez patienter._
            **→ ●●●●●●●●-- __80%__**`);
            troll_hack.edit(`_Connerie en cours. Veuillez patienter._
            **→ ●●●●●●●●●- __90%__**`);
            troll_hack.edit(`_Connerie en cours. Veuillez patienter._
            **→ ●●●●●●●●●● __100%__**`);
            troll_hack.edit(`_Voyons voir ce que ça donne..._`);
            troll_hack.edit(fake_hack);
        };

    //Commande pour afficher des Chuck Norris facts. [&chucknorrisfact] :
        if(message.content.startsWith(prefix + "chucknorrisfact")){
            var chuck_norris_facts_tuck01 = [
                `${message.guild.members.random()}`,
                `<@${message.author.id}>`
            ];
            var chuck_norris_facts_tuck02 = chuck_norris_facts_tuck01[Math.floor(Math.random() * chuck_norris_facts_tuck01.length)];
            var facts_list = [
                "Chuck Norris a déjà compté jusqu'à l'infini. Deux fois !",
                "Le Père Noël croît en Chuck Norris.",
                "Les extraterrestres ont peur de se faire capturer par Chuck Norris.",
                "Les suisses ne sont pas neutres. Ils attendent juste de savoir de quel côté est Chuck Norris.",
                "Quand il était petit, Chuck Norris n'envoyait pas de lettre au Père Noël. Il lui envoyait des ultimatums.",
                "Chuck Norris est né dans une maison en rondins qu'il a construite lui-même.",
                "Chuck Norris n'a pas de père. Personne ne nique la mère de Chuck Norris !",
                "Si Chuck Norris n'existait pas, il s'inventerait.",
                "Chuck Norris peut claquer une porte fermée.",
                "Un jour, Chuck Norris a balancé une grenade sur 12 personnes, et les 12 personnes sont mortes. Puis la grenade a explosé après.",
                "Quand Chuck Norris joue à Pile ou face, la pièce peut rester sur la tranche...",
                "Chuck Norris peut t'étrangler avec le fil d'un téléphone sans fil.",
                "Si c'était Chuck Norris qui codait ce bot, il fonctionnerait du premier coup et il n'y aurait pas d'erreurs.",
                "Quand Chuck Norris fume un joint, c'est le joint qui est défoncé.",
                "Chuck Norris a fini Super Mario Bros sans sauter.",
                "Chuck Norris joue à la console sans télé. Il trouve ça trop facile, sinon.",
                "En France, on dit aux petits enfants que le Grand Méchant Loup viendra les manger s'ils ne finissent pas leur assiette. Aux États-Unis, on leur parle de Chuck Norris. C'est pour ça qu'il y a autant d'enfants obèses en Amérique.",
                "Quand Chuck Norris utilise Windows, il ne plante pas.",
                "Un jour, Chuck Norris a perdu son alliance. Depuis, c'est le bordel sur la terre du milieu.",
                "Chuck Norris se souvient très bien de son futur.",
                "Un jour, Chuck Norris a fait un bras de fer contre One Punch Man ; le perdant devait se raser le crâne.",
                "Les petits enfants portent des pyjamas Super Man. Super Man porte des pyjamas Chuck Norris.",
                "Chuck Norris est la raison pour laquelle Charlie se cache.",
                "La Lune tourne autour de la Terre pour échapper au regard de Chuck Norris.",
                "Chuck Norris peut tirer une balle de fusil à mains nues.",
                "Chuck Norris envoie ses e-mails par la Poste.",
                "Chuck Norris regarde la télé avec sa radio.",
                "Chuck Norris a inventé le lance-flammes en urinant sur la flamme d'un briquet.",
                "Chuck Norris peut supprimer la corbeille.",
                "La mort se demande souvent ce qu'il y a après Chuck Norris.",
                "Quand Chuck Norris entre dans une pièce sombre, il n'allume pas la lumière. Il éteint l'obscurité.",
                "Chuck Norris dort avec la lumière allumée. Pas parce qu'il a peur du noir, mais parce que le noir a peur de lui.",
                "Un jour, Chuck Norris a visité les Îles vierges. Depuis, elles s'appellent juste les Îles...",
                "Les amnésiques se souviennent quand-même de Chuck Norris.",
                "Les aveugles peuvent voir Chuck Norris.",
                "Chuck Norris apparaît en couleur sur les vieux écrans de télévision en noir et blanc.",
                "Quand Google ne sait pas quelque chose, il demande à Chuck Norris.",
                "Le seule endroit où tu peux taper Chuck Norris, c'est la barre de recherche de Google.",
                "Chuck Norris peut abattre 11 cibles sur les 10 qu'il a devant lui... et avec seulement 9 balles.",
                "Chuck Norris dort avec un oreiller sous son arme.",
                "Chuck Norris peut éteindre un incendie avec un bidon d'essence.",
                `Chuck Norris peut tuer les amis imaginaires de ${chuck_norris_facts_tuck02}.`,
                "Chuck Norris sait parler le braille.",
                "Chuck Norris peut entendre la langue des signes.",
                "Chuck Norris était censé mourrir il y a 20 ans, mais la Mort n'a jamais eu le courage de lui dire.",
                "Un jour, un serpent a mordu la jambe de Chuck Norris. Après avoir terriblement souffert pendant 4 jours, le serpent a fini par mourir.",
                "À la fin du livre des records, il est écrit que tous les records sont en réalité détenus par Chuck Norris, et que les performances citées dans le livre sont celles qui se rapproche le plus de celles de Chuck.",
                "Quand la nuit tombe, Chuck Norris la ramasse.",
                "Chuck Norris peut faire une roue avant avec un monocycle.",
                "La peur des araignées s'appelle l'arachnophobie. La peur des espaces publics s'appelle l'agoraphobie. La peur de Chuck Norris s'appelle la logique.",
                "Chuck Norris mange sa soupe avec une fourchette.",
                "Un jour, Chuck Norris est allé sur Mars. Depuis, il n'y a plus aucune trace de formes de vie sur la planète rouge.",
                "Voldemort a peur de prononcer le nom de Chu... de *vous savez qui*.",
                "Chuck Norris est le père de Dark Vador.",
                "La gravité, c'est ce qui fait que la Terre tient sous Chuck Norris.",
                "Chuck Norris dort les yeux ouverts.",
                "Chuck Norris joue à Pokemon Go avec un téléphone fixe.",
                "Chuck Norris joue à la roulette russe avec un chargeur plein. Et il gagne à chaque fois.",
                "Un jour, Chuck Norris à eu un 0/20 à un contrôle de Latin. Depuis, c'est une langue morte.",
                "Il n'y a pas de théorie de l'évolution. Il y a juste une liste d'espèces que Chuck Norris autorise à survivre.",
                "La seule chose qui arrive a la cheville de Chuck Norris, c'est sa chaussette.",
                "Les fantômes se racontent des histoires de Chuck Norris pour se faire peur.",
                "Chuck Norris ne ment pas. C'est la vérité qui se trompe.",
                `Chuck Norris détient la liste de tous les amateurs de Boku No Pico. D'ailleurs, il a remarqué que ${chuck_norris_facts_tuck02} regarde très souvent.`,
                "Le meunier fabrique de la farine avec du blé. Chuck Norris, lui, peut fabriquer du blé avec de la farine.",
                "Chuck Norris sait où se trouve le papa de Stromaé.",
                "Chuck Norris ne porte pas de montre. Il décide de l'heure qu'il est.",
                "Un jour, Chuck Norris a commandé un steak au restarant. Et le steak a obéï.",
                "Chuck Norris a inventé le code qui s'optimise lui-même.",
                "Chuck Norris peut tuer un cadavre.",
                "Tout ce que le roi Midas touche devient de l'or. Tout ce que Chuck Norris touche devient mort."
            ];
            var chucknorrisfact = facts_list[Math.floor(Math.random() * facts_list.length)];
            message.channel.send(chucknorrisfact);
        };

    //Commande pour faire dire quelque chose au bot. [&say] :
        if(message.content.startsWith(prefix + "say")){
            if(!message.channel.guild) return message.channel.send("Désolé, mais cette commande n'est pas disponible en messages privés.");
            const sayMessage = args.join(" ");
            message.delete().catch(O_o=>{});
            message.channel.send(sayMessage);
        };

    //Commande qui sert à rien. [&nawak] :
        if(command === "nawak"){
            message.delete().catch(O_o=>{});
            console.log(`${message.author.username}#${message.author.discriminator} (ID : ${message.author.id}) vient d'utiliser la commande qui ne sert à rien...`);
        };

//Catégorie "Informations" :

    //Commande pour afficher la liste des commandes disponibles du bot. [&help]
        //Informations, Stickers, Jeux, Divers.
        if(message.content.startsWith(prefix + "help")){
            var help = new Discord.RichEmbed()
                .setColor('RANDOM')
                .setTitle('Liste des commandes disponibles pour le RisiBot ! :')    
                .setDescription("**__Informations :__**\n● `&help` _(Pour afficher la liste de toutes les commandes.)_\n● `&invite` _(Pour inviter le bot sur ton serveur.)_\n● `&ping` _(Pour connaitre le temps de réponse (ping) du bot et la latence de l'API Discord.)_\n● `&suggest <Insérez une suggestion ici.>` _(Des questions ? Des remarques ? Des idées de commandes, de Chuck Norris fact, et autres possibilité à proposer ? Soumettez-moi tout cela via cette commande, et je m'en occuperai moi-même dans les plus brefs délais !)_\n \n**__Stickers :__**\n● `&reverse` _(Quand t'as besoin d'une reverse card bien placée parce que tu as la flemme d'avoir une bonne répartie.)_\n● `&respect` _(Quand tu sens que le respect est mort et que tu veux l'exprimer en beauté.)_\n \n**__Jeux :__**\n● `&pile/&face` _(Pour jouer à Pile ou face.)_\n● `&either` _(Le jeu Either.io adapté sur mesure sur Discord.)_\n● `&cadavresexquis` _(Une phrase amusante se crée aléatoirement rien que pour vous.)_\n \n**__Divers :__**\n● `&chucknorrisfact` _(Pour afficher un Chuck Norris fact et en apprendre plus sur l'entité la plus puissante de l'univers.)_\n● `&say <texte>` _(Pour faire dire des conneries au bot.)_\n● `&hack <user>` _(Pour récolter quelques dossiers comprométants sur Céléstin.)_\n● `&nsfw` _(Les connaisseurs sauront à quoi sert cette commande. Pour les autres, je ne vous explique pas, vous êtes probablement encore jeunes et innocents. Ou du moins plus pour très longtemps... :smirk:)_\n● `&nawak` _(Personne ne sait vraiment à quoi sert cette commande.)_")
                .setFooter("Cette liste n'est pas complète pour le moment. Elle s'agrandira a fur et à mesure du développement du bot.")
            message.channel.send(help);
        };

    //Commande de ping. [&ping] :
        if(message.content.startsWith(prefix + "ping")){
            message.channel.send(`Ping de \` ${new Date().getTime() - message.createdTimestamp} \` ms. \nLatence de l'API de \` ${Math.round(bot.ping)} \` ms.`);
        };

    //Commande pour laisser des suggestions pour le bot. (Le gens fait la commande avec sa suggestion, le bot me la renvoie en mp puis delete la commande.) [&suggest] :
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
            message.reply("Moi et mon créateur vous remercions de cette proposition. Nous l'examinerons dès que possible !");
        };

        if(command === "invite"){
		   var invite_embed = new Discord.RichEmbed()
    		   .setTitle("Ne cliquez pas ici pour m'ajouter à votre serveur !...")
               .setURL("https://discordapp.com/oauth2/authorize?client_id=" + `${bot.user.id}` + "&scope=bot&permissions=2146958847")
               .setDescription(`Par contre, si vous n'êtes pas satisfait(e), on ne rembourse pas.`)
               .setFooter(`Demandé par ${message.author.username}#${message.author.discriminator}.`)
               .setTimestamp()
		   message.channel.send(invite_embed);
        };

//Catégorie "Stickers" :

    //Commande pour afficher une reverse card dans le salon. [&reverse] :
        if(command === "reverse"){
            var reverse = new Discord.RichEmbed() //C'est le nom de l'embed, et chaque embed doit en avoir un distinct.
                .setColor('RANDOM')
                .setImage("https://cdn.discordapp.com/attachments/389333591575756803/630076056824446976/yXEiYQ4.png") //Tu as aussi .setTumbnail(" ") pour mettre l'image en mode portrait, en petit.
            message.channel.send(reverse);
        }; 

    //Commande pour afficher un meme sur le manque de respect. [&respect] :
        if(command === "respect"){
            var respect_links = [
                "https://cdn.discordapp.com/attachments/576854376451407873/639983272528707588/telechargement.jpg",
                "https://cdn.discordapp.com/attachments/576854376451407873/639964529031118879/Faut_retrouver_le_respect.jpg",
                "https://cdn.discordapp.com/attachments/576854376451407873/639919162545930271/18194982_2112951462264918_8985794969497464227_n.jpg",
                "https://cdn.discordapp.com/attachments/576854376451407873/639983266207760384/images_1.jpg",
                "https://cdn.discordapp.com/attachments/576854376451407873/639983269009555486/images.jpg",
                "https://cdn.discordapp.com/attachments/576854376451407873/639983264907657236/d6s9WS6z_400x400.jpg",
                "https://cdn.discordapp.com/attachments/576854376451407873/639983261296230446/1405.jpg",
                "https://cdn.discordapp.com/attachments/576854376451407873/639983256871239711/images_2.jpg",
                "https://cdn.discordapp.com/attachments/576854376451407873/639990280614969346/Alerte_Respect_Dispary.jpg"
            ];

            var respect_images = respect_links[Math.floor(Math.random() * respect_links.length)];
            var respect_embed = new Discord.RichEmbed()
                .setColor('RANDOM')
                .setImage(respect_images)
            message.channel.send(respect_embed);
        };

//Catégorie "Administration et modération":

    //Commande pour enlever le bot du serveur où la commande est effectuée. [&leaveserver] :
        if(command === "leaveserver"){
            if(message.author.id !== ownerID && message.author.id !== contributorID_01) return message.channel.send("Désolée, pour des raisons pratiques, cette commande est uniquement réservé à l'usage exclusif de ma créatrice.");
            message.delete().catch(O_o=>{});
            message.guild.leave()
            .then( g => console.log(`Extraction du serveur ${g} effectuée avec succès.`))
            .catch(console.error);
            var dumb_server_leaved_notify = new Discord.RichEmbed()
                .setThumbnail(message.guild.iconURL)
                .setDescription(`Extraction du serveur ${message.guild.name} effectuée avec succès.`)
                .setColor('RANDOM')
                .setTimestamp()
            bot.fetchUser("382500192907165717", false)
            .then(user => {user.send(dumb_server_leaved_notify)
            });
        };
});
