const embeds= require(`../embedsprivet`);

function staffembed(message){
    message.delete();  
    console.log(`1`)
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
        type: `ACTION_ROW`,
        components:[{
            type: `SELECT_MENU`,
            customId: `hellokitty_privet`,
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