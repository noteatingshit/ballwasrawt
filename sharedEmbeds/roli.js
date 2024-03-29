const {game_roles}= require(`../utils/const`);
const {hellokitty}=require (`../devconfig`);
const { ComponentType } = require('discord.js');

module.exports = {
    content: null,
    embeds: [
        {
            image:{
              url: "https://media.discordapp.net/attachments/730090980631642192/1004728236036595812/37e3599062319dc7.png",
            },
            color: 3092790,
          },
        {
            title: "Выбери роль, чтобы проще находить тиммейтов в пати:",
            fields: [
                {
                    name: "<:fon11:832188712644902927>",
                    value: "<@&867477201137434664>\n<@&867411578838843433>\n<@&899939202182033459>\n<@&867411639548772352>\n<@&868111703240507512>",
                    inline: true
                },
                {
                    name: "<:fon11:832188712644902927>",
                    value: "<@&867411587996057610>\n<@&867411593351397376>\n<@&867411616822591528>\n<@&867412430930182174>\n<@&867411596618629151>",
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
        type: ComponentType.ActionRow,
        components: [{
            type: ComponentType.SelectMenu,
            customId: `${hellokitty}_gameroles`,
            maxValues: 10,
            minValues: 1,
            placeholder: `Выберите нужное`,
            options: game_roles.map(e => ({
                label: e.label,
                value: e.value,
                emoji: e.emoji,
            }))

        }]
    }]
};