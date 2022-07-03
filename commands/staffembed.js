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
        fields: [
          {
            name: "<:fon11:832188712644902927>",
            value: "<a:heartdotmeta00:965684404850679837><@&842077390641561610><:fon11:832188712644902927>\n<a:heartdotmeta01:965684412828237934><@&865974246597066762><:fon11:832188712644902927>\n<a:heartdotmeta02:965684420696768512><@&944556479405522984><:fon11:832188712644902927>\n<a:heartdotmeta03:965684428271665182><@&866366388117176320><:fon11:832188712644902927>\n<:fon11:832188712644902927>",
            inline: true
          },
          {
            name: "<:fon11:832188712644902927>",
            value: "<a:heartdotmeta04:965684435741716510><@&973940203595112458>\n<a:heartdotmeta05:965684442704269412><@&909123243754008586>\n<a:heartdotmeta06:965684449125761064><@&957019679036158044>\n<a:heartdotmeta07:965684455958265976><@&911700891357306900>\n<:fon11:832188712644902927>",
            inline: true
          }
        ],
        image: {
        url: "https://www.repstatic.it/content/nazionale/img/2019/03/06/151914583-47d48d06-ec2c-4f8e-a690-274304f0b89b.jpg"
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