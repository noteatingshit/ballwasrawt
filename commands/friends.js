async function friends(message) {
    for await (const server of servers) {
        await message.channel.send({
            embeds: [{
                image: {
                    url: server.image,
                },
                color: 3092790,
            }],
            components: [{
                type: "ACTION_ROW",
                components: [{
                    type: "BUTTON",
                    style: "LINK",
                    label: "ᅠᅠᅠᅠᅠᅠᅠᅠᅠᅠПрисоединиться ᅠᅠᅠᅠᅠᅠᅠᅠᅠ",
                    url: server.url
                }]
            }]

        })
    }
}

const servers = [
    { //tenderly
        image: `https://cdn.discordapp.com/attachments/793498184990457856/1009140430962708541/tenderly2.png`,
        url: `https://discord.gg/tenderly`,
    },
    { //darkness
        image: `https://cdn.discordapp.com/attachments/793498184990457856/1009140429624713376/darkness2.png`,
        url: `https://discord.gg/darkness`,
    },
    { //hatory
        image: `https://cdn.discordapp.com/attachments/793498184990457856/1009140429972836392/hatory2.png`,
        url: `https://discord.gg/hatory`,
    },
    { //solisaid
        image: `https://cdn.discordapp.com/attachments/793498184990457856/1009140430287421521/solisaid2.png`,
        url: `https://discord.gg/solisaid`,
    },
    { //sweetness
        image: `https://cdn.discordapp.com/attachments/793498184990457856/1009140430631346276/sweetness2.png`,
        url: `https://discord.gg/sweetness`,
    },
    { //twix
        image: `https://cdn.discordapp.com/attachments/793498184990457856/1009140431310831676/twix2.png`,
        url: `https://discord.gg/twix`,
    },
]
module.exports = friends;