const embeds= require(`../embeds`);

function staffembed(message){
    console.log(`1`)
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
        type: `ACTION_ROW`,
        components:[{
            type: `SELECT_MENU`,
            customId: `hellokitty_selectembed`,
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