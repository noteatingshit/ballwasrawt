const embeds= require(`../embeds`);
const { hellokitty } = require (`../devconfig`);
const { ComponentType } = require(`discord.js`)
function staffembed(message){
message.channel.send(embed)
}
const embed={
    content: null,
    embeds: [
      {
        title: "Меню для подачи заявки на стафф роли сервера META.",
        description: "<:hellokittyos:993243920735670342> Чтобы подать заявку, выбери роль снизу, и заполни анкету.",
        image: {
        url: "https://cdn.discordapp.com/attachments/793498184990457856/1003992412600946698/sss.png"
        },
        color: 3092790,
      }
    ],
    attachments: [],
    components: [{
        type: ComponentType.ActionRow,
        components:[{
            type: ComponentType.SelectMenu,
            customId: `${hellokitty}_selectembed`,
            maxValues: 1,
            minValues: 1,
            placeholder: `Выбери роль на которую хочешь подать заявку`,
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