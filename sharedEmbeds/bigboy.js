const {hellokitty}=require (`../devconfig`);
const embeds= require(`../bigboyembeds`);
const { ComponentType } = require('discord.js');

module.exports = {
    content: null,
    embeds: [
        {
            image:{
              url: "https://media.discordapp.net/attachments/730090980631642192/1004729403332370512/big_boy.png",
            },
            color: 3092790,
          },
        {
            title: "Информация о основных кастомных ролях сервачка:",
            fields: [
                {
                    name: "<:fon:916322554053029938>",
                    value: "<:nitro2:965539708643991593> — n1tr0 buster\n<:bookmeta:1026251022466822244> — чтец сервера\n<:mic:965495296341733376> — даббер сервера\n<:notemeta:965541182199459890> — музыкант сервера\n<:artqq:965495296333348865> — художник сервера",
                    inline: true
                },
                {
                    name: "<:fon:916322554053029938>",
                    value: "<:selfak:965539198230749194> — селфи сендер\n<:pictures:965539708836913182> — роль сендить пикчи\n<:loveroom:965495296119410689> — чувачки с лаврумой\n<:oblachko:965495296337522688> — порядочный человек\n<:kubok:965495296429801532> — победитель глобалок",
                    inline: true
                },
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
            customId: `${hellokitty}_bigboy`,
            maxValues: 1,
            minValues: 1,
            placeholder: `Выберите нужное`,
            options: embeds.map(e => ({
                label: e.label,
                description: e.description,
                value: e.name,
                emoji: e.emoji,
            }))

        }]
    }]
};