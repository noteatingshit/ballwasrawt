const embeds= require(`../embedsprivet`);
const { hellokitty } = require (`../devconfig`);
const { ComponentType } = require('discord.js');

function staffembed(message){
    message.delete();  
message.channel.send(embed)
}
const embed={
    content: null,
    embeds: [
      {
        description: "```Кому писать чтобы пожаловаться на стафф?```",
        color: 3092790,
        image: {
          url: "https://media.discordapp.net/attachments/774042908718399509/830486108978544680/1111.png"
        },
      }
    ],
    attachments: [],
    components: [{
        type: ComponentType.ActionRow,
        components:[{
            type: ComponentType.SelectMenu,
            customId: `${hellokitty}_privet`,
            maxValues: 1,
            minValues: 1,
            placeholder: `Выбери роль на которую хочешь подать жалобу`,
            options: embeds.map(e=>({
                label: e.label,
                description: e.description,
                value: e.name,
                emoji: `<:hellokittyos:993243920735670342>`,
            }))

        }]
    }]
  }

  module.exports=staffembed;