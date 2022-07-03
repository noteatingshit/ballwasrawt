module.exports= {
    name: `bunker`,
    fullstaffchatid: `993210756894052472`,
    description: `Организаторы столов по бункеру.`,
    label: `Ведущий бункера`,
    form: [
      {
        type: `text`,
        label: `Имя, возраст`,
        name: `name`,
        style: `SHORT`,
        placeholder: `Саша, 19`,
        required: true,
      },
      {
        type: `text`,
        label: `Напишите немного о себе.`,
        name: `osebe`,
        style: `LONG`,
        placeholder: ``,
        required: true,
      },
      {
        type: `text`,
        label: `Сколько времени можете уделять должности?`,
        name: `ammounttime`,
        style: `LONG`,
        placeholder: `Например: 4 часа`,
        required: true, 
      },
      {
        type: `text`,
        label: `Сколько бункеров, Вы наиграли? (число)?`,
        name: `ammountgames`,
        style: `LONG`,
        placeholder: `400`,
        required: true,  
      },
      {
        type: `text`,
        label: `Почему мы должны взять именно Вас?`,
        name: `why`,
        style: `LONG`,
        placeholder: ``,
        required: true,    
      },
    ],

    embed: {
        title: "НАЗВАНИЕ ДАННОГО ТИТЛА",
        description: "**Здаровчики**, ребятки если любите проводить время на такой \n интеллектуальной игры как **Бункер**, то я могу предложить вам одну стафф роль- <@&944556479405522984>\n\n```Ведущий-данная должность отвечает за проведении такой игры как Бункер.```\n**Что от вас требуется**\n\n> **Стрессоустойчивость, терпение и адекватность.**\n\n> **Знание правил Бункера.**\n\n> **15 полных лет.**\n\n**Что вас ждет:**\n\n> **Высокая зарплата, в виде серверной валюты.**\n\n> **Хороший коллектив и много приятных знакомств!**\n\n> **Награда за активность: Nitro, личные комнаты, роли и др.**",
        color: 8035568,
        image: {
            url: `https://media.discordapp.net/attachments/608711485849337856/985632355257561158/75917368e7bd568b5a91b7a4dbeb6afe.gif`,
        },
      },
    }