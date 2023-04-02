const { hellokitty } = require(`../devconfig`);
const { ComponentType } = require('discord.js');
const options = require('../allinfo').infoOptions;
function allinfo(message) {
  message.channel.send({
    embeds: [embed],
    components: [
      {
        type: ComponentType.ActionRow,
        components: [
          {
            type: ComponentType.SelectMenu,
            customId: `${hellokitty}_allInfo`,
            maxValues: 1,
            minValues: 1,
            placeholder: `Выберите нужное`,
            options: options.map(e => ({
              label: e.label,
              value: e.value,
              emoji: e.emoji,
              description: e.description,
            }))
          }
        ]
      }
    ]
  })
}

const embed = {
  title: "asd",
  description: "asd",
  image: {
    url: "https://cdn.discordapp.com/attachments/793498184990457856/1003992412600946698/sss.png"
  },
  color: 3092790,
};

module.exports = allinfo;