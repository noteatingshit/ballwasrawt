const discordModals = require('discord-modals');
const { Modal, TextInputComponent, SelectMenuComponent, showModal } = discordModals;
const { Client, IntentsBitField, ComponentType, ButtonStyle } = require('discord.js');
const embeds = require(`./embeds`);
const privetembeds = require(`./embedsprivet`);
const bigboy = require(`./bigboyembeds`);
const {prefix,hellokitty}=require (`./devconfig`);
// const { components } = require('./bigboyembeds/hudojka');
const bigboyembeds = require('./bigboyembeds');
const eventpravila = require(`./utils/embedeventpravila`);
const closePravila = require(`./utils/closeplavila`);
const browserPravila = require(`./utils/browserplavila`);
const allinfo = require('./allinfo').execute;
// const { embed } = require('./embeds/control');

const hypecore = '293772563040174082'
const tfanfy02 = '429519445086568449'
const da6ko = `542752250607566868`
const anata = `812820462027276318`
const kayanokaede = `1032726813350318100`
const lmdn = `236508653434306560`
const hoki = `297372127768870913`

// Create a new client instance
const client = new Client({ intents: [IntentsBitField.Flags.Guilds, IntentsBitField.Flags.MessageContent, IntentsBitField.Flags.GuildMessages] });
discordModals(client);

client.on('messageCreate', message => {
    if (![hypecore, tfanfy02, da6ko, anata, kayanokaede, lmdn, hoki].includes(message.author.id)) return;
    const args = message.content.split(/ +/);
    const command = args.shift(); 
    if (!command.startsWith(prefix)) return;
    switch (command.replace(prefix, '')) {
        case `staffembed`: require(`./commands/staffembed`)(message);break;
        case `privet`: require(`./commands/embedprivet`)(message);break;
        case `сказати`: require(`./commands/say`)(message);break;
        case `bigboy` : require(`./commands/bigboy`)(message);break;
        case `gameroles` : require(`./commands/roli`)(message);break;
        case `anonsroles` : require(`./commands/anonsi`)(message);break;
        case `friends` : require(`./commands/friends`)(message);break;
        case `allinfo` : require(`./commands/allinfo`)(message);break;
        case `eventpravila` : message.channel.send(require(`./commands/eventpravila`) );break;
        case `closepravila` : message.channel.send(require(`./commands/closepravila`));break;
        case `browserpravila` : message.channel.send(require(`./commands/browserpravila`));break;
     }
});

// When the client is ready, run this code (only once)
client.once('ready', () => {
    console.log('Ready!');
});

client.on(`interactionCreate`, async interaction => {
    if (interaction.applicationId !== client.application?.id) return;
    if (interaction.isSelectMenu()) {
        const [prefix, command] = interaction.customId.split('_');
        console.log(command)
        if (prefix !== hellokitty) return;
        if (command === 'allInfo') {
            return allinfo(interaction);
        }
        if (command === `selectembed`) {
            const value = interaction.values[0];
            const embed = embeds.find(e => e.name === value)?.embed;
            if (!embed) return;

            interaction.reply({
                ephemeral: true,
                embeds: [embed],
                components: [{
                    type: ComponentType.ActionRow,
                    components: [{
                        type: ComponentType.Button,
                        customId: `${hellokitty}_selectembed_${value}`,
                        label: `⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀Подать заявку⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀`,
                        style: ButtonStyle.Secondary,

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
            const result = bigboy.find(e => e.name === value);
            if (!result) return;
            const {embed,buttonUrl,form}=result;
                interaction.reply({
                    ephemeral: true,
                    embeds: [embed],
                    components:(form||buttonUrl)?[{ 
                        type: ComponentType.ActionRow,
                        components: [{
                            type: ComponentType.Button,
                            customId: form ? `${hellokitty}_selectembed_${value}` :null,
                            url:buttonUrl,  
                            label: `⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀Подать заявку⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀`,
                            style: form ? ButtonStyle.Secondary : ButtonStyle.Link,
                            
    
                            }]
                    }]:[],})      
            
        }else if (command ===`gameroles`||command ===`anonsroles`) {
            const values = interaction.values
            if (!values.length) return;
            const roles = values.map(id=>interaction.guild.roles.cache.get(id))
            const hasRoles = roles.filter(role=>interaction.member.roles.cache.has(role.id))
            const hasNotRoles = roles.filter(role=>!hasRoles.map(r => r.id).includes(role.id))
            hasRoles.length && await interaction.member.roles.remove(hasRoles)
            hasNotRoles.length && await interaction.member.roles.add(hasNotRoles)
            interaction.reply({
                ephemeral: true,
                content: `succes`


            })      
        }else if(command ===`eventpravila`){
            const eventEmbed = eventpravila.find(e => e.key===interaction.values[0])
            interaction.reply({
                ephemeral: true,
                embeds: [eventEmbed],
            })
        }else if(command ===`closepravila`){
            const closeEmbed = closePravila.find(e => e.key===interaction.values[0])
            interaction.reply({
                ephemeral: true,
                embeds: [closeEmbed],
            })
        }else if(command ===`browserpravila`){
            const browserEmbed = browserPravila.find(e => e.key===interaction.values[0])
            interaction.reply({
                ephemeral: true,
                embeds: [browserEmbed],
            })
        }

    }
    else if (interaction.isButton()) {
        const [prefix, command, value] = interaction.customId.split('_');
        if (prefix !== hellokitty) return;
        if (command === `selectembed`) {
            const roleObj = embeds.find(e => e.name === value)||bigboyembeds.find (e => e.name === value)
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
                .setCustomId(`${hellokitty}_form_${value}`)
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
    if (prefix !== hellokitty) return;
    if (command === `form`) {
        const roleObj = embeds.find(e => e.name === value)||bigboyembeds.find (e => e.name === value)
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
        }).catch(() => console.log(`У роли ${roleObj.name} нету доступа в стафф чат`));
    }
})

client.login(require(`./config.json`).token);
