
async function pravila(interaction) {
        await interaction.reply({
        ephemeral: true,
        embeds: embeds.slice(0,10),
    }) 
        await interaction.followUp({
            embeds: embeds.slice (10,20),
            ephemeral: true,
         })
        await interaction.followUp({
            embeds: embeds.slice (20,30),
            ephemeral: true,
            
        })
        await interaction.followUp({
            embeds: embeds.slice (30),
            ephemeral: true,
            
        })
}

const embeds = [
    /// голосовые
    {
        image: {
            url: "https://media.discordapp.net/attachments/962023960726351902/1092010992180920440/-.png?width=1440&height=428",
        },
        color: 2829617,
    },
    {
        image: {
            url: "https://media.discordapp.net/attachments/962023960726351902/1092010796621512794/1.1.png?width=1440&height=576",
        },
        color: 2829617,
    },
    {
        image: {
            url: "https://media.discordapp.net/attachments/962023960726351902/1092010796986400778/1.2.png?width=1440&height=576",
            color: 2829617,
        },
    },
    {
        image: {
            url: "https://media.discordapp.net/attachments/962023960726351902/1092010796399218718/1.3.png?width=1440&height=576",
            color: 2829617,
        },
    },
    /// текстовые
    {
        image: {
            url: "https://media.discordapp.net/attachments/962023960726351902/1092010992868786186/-.png?width=1440&height=428",
        },
        color: 2829617,
    },
    {
        image: {
            url: "https://media.discordapp.net/attachments/962023960726351902/1092010829106393098/2.1.png?width=1440&height=576",
        },
        color: 2829617,
    },
    {
        image: {
            url: "https://media.discordapp.net/attachments/962023960726351902/1092010829374820463/2.2.png?width=1440&height=576",
        },
        color: 2829617,
    },
    {
        image: {
            url: "https://media.discordapp.net/attachments/962023960726351902/1092010829655847043/2.3.png?width=1440&height=576",
        },
        color: 2829617,
    },
    {
        image: {
            url: "https://media.discordapp.net/attachments/962023960726351902/1092010828842143784/2.4.png?width=1440&height=576",
        },
        color: 2829617,
    },
    /// общие
    {
        image: {
            url: "https://media.discordapp.net/attachments/962023960726351902/1092010992449359952/2a9b3600f0874df1.png?width=1440&height=428",
        },
        color: 2829617,
    },
    {
        image: {
            url: "https://media.discordapp.net/attachments/962023960726351902/1092010855375310898/3.1.png?width=1440&height=576",
        },
        color: 2829617,
    },
    {
        image: {
            url: "https://media.discordapp.net/attachments/962023960726351902/1092010855618596884/3.2.png?width=1440&height=576",
        },
        color: 2829617,
    },
    {
        image: {
            url: "https://media.discordapp.net/attachments/962023960726351902/1092010855887028264/3.3.png?width=1440&height=576",
        },
        color: 2829617,
    },
    {
        image: {
            url: "https://cdn.discordapp.com/attachments/962023960726351902/1092013545463500830/3.4.png",
        },
        color: 2829617,
    },
    {
        image: {
            url: "https://cdn.discordapp.com/attachments/962023960726351902/1092013545744502864/3.5.png",
        },
        color: 2829617,
    },
    {
        image: {
            url: "https://media.discordapp.net/attachments/962023960726351902/1092013546084257802/3.6.png?width=1440&height=576",
        },
        color: 2829617,
    },
    {
        image: {
            url: "https://media.discordapp.net/attachments/962023960726351902/1092013545241202729/3.7.png?width=1440&height=576",
        },
        color: 2829617,
    },
    {
        image: {
            url: "https://media.discordapp.net/attachments/962023960726351902/1092010856193200189/3.8.png?width=1440&height=576",
        },
        color: 2829617,
    },
    {
        image: {
            url: "https://media.discordapp.net/attachments/962023960726351902/1092010856604258375/3.9.png?width=1440&height=576",
        },
        color: 2829617,
    },
    {
        image: {
            url: "https://media.discordapp.net/attachments/962023960726351902/1092010855069143090/3.10.png?width=1440&height=576",
        },
        color: 2829617,
    },
    {
        image: {
            url: "https://media.discordapp.net/attachments/962023960726351902/1092010879526129704/3.11.png?width=1440&height=576",
        },
        color: 2829617,
    },
    {
        image: {
            url: "https://media.discordapp.net/attachments/962023960726351902/1092010879744213052/3.12.png?width=1440&height=576",
        },
        color: 2829617,
    },
    {
        image: {
            url: "https://cdn.discordapp.com/attachments/962023960726351902/1092014372315987978/3.13.png",
        },
        color: 2829617,
    },
    /// примечания
    {
        image: {
            url: "https://media.discordapp.net/attachments/962023960726351902/1092010992675856384/eda71f7129a4b2fa.png?width=1440&height=428",
        },
        color: 2829617,
    },
    {
        image: {
            url: "https://media.discordapp.net/attachments/962023960726351902/1092010960316809307/4.1.png?width=1440&height=576",
        },
        color: 2829617,
    },
    {
        image: {
            url: "https://media.discordapp.net/attachments/962023960726351902/1092010960706871329/4.2.png?width=1440&height=576",
        },
        color: 2829617,
    },
    {
        image: {
            url: "https://media.discordapp.net/attachments/962023960726351902/1092010960950153327/4.3.png?width=1440&height=576",
        },
        color: 2829617,
    },
    {
        image: {
            url: "https://media.discordapp.net/attachments/962023960726351902/1092010961226973204/4.4.png?width=1440&height=576",
        },
        color: 2829617,
    },
    {
        image: {
            url: "https://media.discordapp.net/attachments/962023960726351902/1092010961487011870/4.5.png?width=1440&height=576",
        },
        color: 2829617,
    },
    {
        image: {
            url: "https://media.discordapp.net/attachments/962023960726351902/1092010961751265311/4.6.png?width=1440&height=576",
        },
        color: 2829617,
    },
    {
        image: {
            url: "https://media.discordapp.net/attachments/962023960726351902/1092010960048377967/4.7.png?width=1440&height=576",
        },
        color: 2829617,
    },
    {
        image: {
            url: "https://cdn.discordapp.com/attachments/962023960726351902/1092014920192761927/4.8.png",
        },
        color: 2829617,
    },
    {
        image: {
            url: "https://cdn.discordapp.com/attachments/962023960726351902/1092010987693023252/4.9.png",
        },
        color: 2829617,
    },
    {
        image: {
            url: "https://media.discordapp.net/attachments/962023960726351902/1092010987986620488/4.10.png?width=1440&height=576",
        },
        color: 2829617,
    },
    {
        image: {
            url: "https://media.discordapp.net/attachments/962023960726351902/1092010988288614430/4.11.png?width=1440&height=576",
        },
        color: 2829617,
    },
]

module.exports = {
    action: pravila,
    emoji: '🛐',
    label: 'Правила',
    value: 'pravila',
};