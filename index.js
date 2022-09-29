const discordModals = require('discord-modals');
const { Modal, TextInputComponent, SelectMenuComponent, showModal } = discordModals;
const { Client, Intents } = require('discord.js');
const embeds = require(`./embeds`);
const privetembeds = require(`./embedsprivet`);
const bigboy = require(`./bigboyembeds`);

const hypecore = '293772563040174082'
const tfanfy02 = '429519445086568449'
const da6ko = `542752250607566868`

// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
discordModals(client);
client.on('messageCreate', message => {
    if (![hypecore, tfanfy02, da6ko].includes(message.author.id)) return;
    const args = message.content.split(/ +/);
    const command = args.shift();
    console.log(command.replace(`!`, ''));
    if (!command.startsWith(`!`)) return;

    switch (command.replace(`!`, '')) {
        case `staffembed`: require(`./commands/staffembed`)(message);break;
        case `privet`: require(`./commands/embedprivet`)(message);break;
        case `сказати`: require(`./commands/say`)(message);break;
        case `bigboy` : require(`./commands/bigboy`)(message);break;
        case `gameroles` : require(`./commands/roli`)(message);break;
        case `anonsroles` : require(`./commands/anonsi`)(message);break;
        case `friends` : require(`./commands/friends`)(message);break;
     }

});

// When the client is ready, run this code (only once)
client.once('ready', () => {
    console.log('Ready!');
});

client.on(`interactionCreate`, interaction => {
    if (interaction.applicationId !== client.application?.id) return;
    if (interaction.isSelectMenu()) {
        const [prefix, command] = interaction.customId.split('_');
        if (prefix !== `hellokitty`) return;
        if (command === `selectembed`) {
            const value = interaction.values[0];
            const embed = embeds.find(e => e.name === value)?.embed;
            if (!embed) return;

            interaction.reply({
                ephemeral: true,
                embeds: [embed],
                components: [{
                    type: `ACTION_ROW`,
                    components: [{
                        type: `BUTTON`,
                        customId: `hellokitty_selectembed_${value}`,
                        label: `⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀Подать заявку⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀`,
                        style: 'SECONDARY',

                    }]
                }]

            })
        }else if (command ===`privet`) {
            const value = interaction.values[0];
            const embed = privetembeds.find(e => e.name === value)?.embed;
            if (!embed) return;

            interaction.reply({
                ephemeral: true,
                embeds: [embed],


            })     
        }else if (command ===`bigboy`) {
            const value = interaction.values[0];
            const embed = bigboy.find(e => e.name === value)?.embed;
            if (!embed) return;

            interaction.reply({
                ephemeral: true,
                embeds: [embed],


            })      
        }else if (command ===`gameroles`||command ===`anonsroles`) {
            const value = interaction.values[0];
            const role = interaction.guild.roles.cache.get(value);
            if (!role) return; 
            const hasRole = interaction.member.roles.cache.has(value)
            if (!hasRole){
                interaction.member.roles.add(value)
            }else{
                interaction.member.roles.remove(value)  
            }
            interaction.reply({
                ephemeral: true,
                content: hasRole ? `Вы успешно сняли себе ${role}` : `Вы успешно выдали себе ${role}`


            })      
        }



    }
    else if (interaction.isButton()) {
        const [prefix, command, value] = interaction.customId.split('_');
        if (prefix !== `hellokitty`) return;
        if (command === `selectembed`) {
            const roleObj = embeds.find(e => e.name === value);
            if (!roleObj) return;
            const components = roleObj.form.map(question => (
                question.type === `text`
                    ? (
                        new TextInputComponent()
                            .setCustomId(question.name)
                            .setPlaceholder(question.placeholder)
                            .setLabel(question.label)
                            .setRequired(question.required)
                            .setStyle(question.style)
                    ) : (
                        new SelectMenuComponent()
                            .setCustomId(question.name)
                            .setPlaceholder(question.placeholder)
                            .setOptions(question.options)
                            .setMinValues(1)
                            .setMaxValues(1)
                    )
            ))
            const modal = new Modal()
                .setCustomId(`hellokitty_form_${value}`)
                .setTitle(`Заполнить форму ${roleObj.label}`)
                .addComponents(...components)
            showModal(modal, {
                client, interaction
            })
        }
    }
})

client.on(`modalSubmit`, async modal => {
    if (modal.applicationId !== client.application?.id) return;
    const [prefix, command, value] = modal.customId.split('_');
    if (prefix !== `hellokitty`) return;
    if (command === `form`) {
        const roleObj = embeds.find(e => e.name === value);
        if (!roleObj) return;
        const answers = roleObj.form.map(question => {
            const label = question.type === `text` ? question.label : question.placeholder;
            const answer = question.type === `text` ? modal.getTextInputValue(question.name) : modal.getSelectMenuValues(question.name)?.[0];
            return `**${label}**\n${answer}`;
        })
        const content = `**Форма заполнена**\n<@${modal.user.id}> ${modal.user.tag} ${modal.user.id}\n` + answers.join(`\n\n`);
        const chat = client.channels.cache.get(roleObj.fullstaffchatid)
            || client.channels.fetch(roleObj.fullstaffchatid)
                .catch(() => console.log(`У роли ${roleObj.name} хуёвый стаф чат`));
        if (!chat) return;
        modal.update({ content: `Заявка успешно отправлена`, embeds: [], components: [] })
        chat.send({
            embeds: [{
                title: `Заявка на роль ${roleObj.label}`,
                description: content,
            }]
        }).catch(() => console.log(`У роли ${roleObj.name} нету доступа в стафф чат`));;
    }
})

client.login(require(`./config.json`).token);