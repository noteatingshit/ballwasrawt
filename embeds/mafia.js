module.exports= {
    name: `mafia`,
    fullstaffchatid: `993210756894052472`,
    description: `Организаторы столов по мафии.`,
    label: `Ведущий мафии`,
    form: [
      {
        type: `text`,
        label: `Был ли опыт в проведении мафии до этого?`,
        name: `exp`,
        style: 2,
        placeholder: ``,
        required: true,
      },
      {
        type: `text`,
        label: `Сколько игр на нашем сервере?`,
        name: `ammountgame`,
        style: 1,
        placeholder: `Например: 4`,
        required: true,
      },
      {
        type: `text`,
        label: `Сколько можно взять +30 за круг?`,
        name: `krug`,
        style: 2,
        placeholder: `Например: пять раз`,
        required: true, 
      },
      {
        type: `text`,
        label: `Что будет после 3-ёх фолов у игрока?`,
        name: `fall`,
        style: 2,
        placeholder: ``,
        required: true,  
      },
      {
        type: `text`,
        label: `Что вы сделаете за клятву во время игры?`,
        name: `klyatva`,
        style: 2,
        placeholder: `???`,
        required: true,    
      },
    ],

    embed: {
        title: "НАЗВАНИЕ ДАННОГО ТИТЛА",
        description: "**Приветик**, милашки **виртуального** мира, у нас открывается набор на роль - <@&944556479405522984>\n\n```Ведущий-должность отвечающая за проведении классической и городской мафии.```\n**Что от вас требуется:**\n\n> 15 полных лет.\n\n> Знание правил мафии(классик , город)\n\n> Стрессоустойчивость, терпение и адекватность\n\n**Что вас ждет:**\n\n> Высокая зарплата, в виде серверной валюты.\n\n> Хороший коллектив и много приятных знакомств!\n\n> Награда за активность: **Discord Nitro**, личные комнаты и др.",
        color: 16502749,
        image: {
          url: "https://i.pinimg.com/originals/4b/84/ff/4b84ff9e88217de337e04cf1680d1e06.gif"
        },
      },
    }