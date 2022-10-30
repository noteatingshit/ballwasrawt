const closepravila= require(`../utils/closeplavila`);
const {hellokitty}=require (`../devconfig`);

const closeEmbed={
    embeds: [
      {
        description: "**Здесь можно выбрать правила из раздела \"Игровых ивентов\"**",
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
            customId: `${hellokitty}_closepravila`,
            maxValues: 1,
            minValues: 1,
            placeholder: `Выберите нужное`,
            options: closepravila.map(e=>({
                label: e.label,
                value: e.key,
            }))

        }]
    }]
  }

 module.exports=closeEmbed

 