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
        image: `https://cdn.discordapp.com/attachments/729777975041720380/1009122369224314941/tenderly.png`,
        url: `https://discord.gg/tenderly`,
    },
    { //darkness
        image: `https://cdn.discordapp.com/attachments/729777975041720380/1009122367634681996/darkness.png`,
        url: `https://discord.gg/darkness`,
    },
    { //hatory
        image: `https://cdn.discordapp.com/attachments/729777975041720380/1009122368087654430/hatory.png`,
        url: `https://discord.gg/hatory`,
    },
    { //solisaid
        image: `https://cdn.discordapp.com/attachments/729777975041720380/1009122368502894632/solisaid.png`,
        url: `https://discord.gg/solisaid`,
    },
    { //sweetness
        image: `https://cdn.discordapp.com/attachments/729777975041720380/1009122368838443129/sweetness.png`,
        url: `https://discord.gg/sweetness`,
    },
    { //twix
        image: `https://cdn.discordapp.com/attachments/729777975041720380/1009122369610199121/twix.png`,
        url: `https://discord.gg/twix`,
    },
]
module.exports = friends;