const browserpravila= require(`../utils/browserplavila`);
const { ComponentType } = require('discord.js');
const { hellokitty } = require (`../devconfig`);

const browserEmbed={
    embeds: [
      {
        description: "**Здесь можно выбрать правила из раздела \"браузерных игр\"**",
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
            customId: `${hellokitty}_browserpravila`,
            maxValues: 1,
            minValues: 1,
            placeholder: `Выберите нужное`,
            options: browserpravila.map(e=>({
                label: e.label,
                value: e.key,
            }))

        }]
    }]
  }

 module.exports=browserEmbed

 