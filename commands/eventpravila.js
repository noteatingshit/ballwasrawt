const eventpravila= require(`../utils/embedeventpravila`);
const {hellokitty}=require (`../devconfig`);

const eventEmbed={
    embeds: [
      {
        description: "**Здесь можно выбрать правила из раздела \"Настольных игр\"**",
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
            customId: `${hellokitty}_eventpravila`,
            maxValues: 1,
            minValues: 1,
            placeholder: `Выберите нужное`,
            options: eventpravila.map(e=>({
                label: e.label,
                value: e.key,
            }))

        }]
    }]
  }

 module.exports=eventEmbed

 