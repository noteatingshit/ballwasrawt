const {anons_roles}= require(`../utils/const`);
const {hellokitty}=require (`../devconfig`);

function bigboy(message){
    message.delete();  
message.channel.send(embed)
}
const embed={
    content: null,
    embeds: [
      {
        title: "Здесь можете выбрать роль для анонсов мероприятий:",
        fields: [
            {
              name: "<:fon:916322554053029938>",
              value: "<:video:965539708748841050> — анонсы кинотеатра\n<:hlopushka:965495295922298882> — анонсы браузер игр\n<:naborstaff:965495296039731231> — анонсы наборов в стаф\n<:creaanons:965495296262025276> — анонсы творческих штук<:fon:916322554053029938>",
              inline: true
            },
            {
              name: "<:fon:916322554053029938>",
              value: "<:closeanons:965495296245268511> — анонсы о клозах\n<:mafiameta:965530371120836608> — анонсы о мафиях\n<:bunkermeta:965530345363636225> — анонсы о бункерах\n<:dice:965495296366903296> — анонсы о настолках <:fon:916322554053029938>",
              inline: true
            }
          ],
        image: {
        url: "https://media.discordapp.net/attachments/774042908718399509/830486108978544680/1111.png"
        },
        color: 3092790,
      }
    ],
    attachments: [],
    components: [{
        type: `ACTION_ROW`,
        components:[{
            type: `SELECT_MENU`,
            customId: `${hellokitty}_anonsroles`,
            maxValues: 1,
            minValues: 1,
            placeholder: `Выберите нужное`,
            options: anons_roles.map(e=>({
                label: e.label,
                value: e.value,
                emoji: e.emoji,
            }))

        }]
    }]
  }

  module.exports=bigboy;