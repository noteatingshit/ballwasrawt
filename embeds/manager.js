module.exports= {
    name: `manager`,
    fullstaffchatid: `993197278191951892`,
    description: `пиар сервера.`,
    label: `Manager`,
    form: [
      {
        type: `text`,
        label: `Укажите своё имя и возраст`,
        name: `name, age`,
        style: `SHORT`,
        placeholder: `Например: Вадим, 21`,
        required: true,
      },
      {
        type: `text`,
        label: `Укажите количество часов на сервере.`,
        name: `time`,
        style: `SHORT`,
        placeholder: `Например: 540 часов`,
        required: true,
      },
      {
        type: `text`,
        label: `На каких платформах ты сидишь?`,
        name: `platform`,
        style: `LONG`,
        placeholder: `Например: twitch, youtube, rosgram`,
        required: true, 
      },
      {
        type: `text`,
        label: `Нарушал ли ты правила сервера?`,
        name: `mutes`,
        style: `LONG`,
        placeholder: `Имеется ввиду нарушения на сервере discord.gg/metaplay`,
        required: true,  
      },
      {
        type: `text`,
        label: `Есть ли опыт в данной сфере?`,
        name: `exp`,
        style: `LONG`,
        placeholder: `???`,
        required: true,    
      },
    ],

    embed: {
        title: "Набор на должность Менеджер!",
        description: "Привет! Залипаешь на твичеров и ютуберов? Или может ты часами засиживаешься в ленте рекомендаций тик-тока и смотришь классных ребят?\n\nТогда приветствуем тебя у нас, <@&909123243754008586> !\n\n<a:chupa1:921400596433633330>От тебя потребуется:\n<:tochka1:921405594160734278>16 полных лет\n<:tochka1:921405594160734278>Знание популярных платформ\n<:tochka1:921405594160734278>От 2-х часов свободного времени в день!\n\n<a:chupa1:921400596433633330>Что вас ждет: \n<:tochka1:921405594160734278>Дружеская атмосфера в стаффе\n<:tochka1:921405594160734278>Зарплата в виде серверной валюты\n<:tochka1:921405594160734278>Принятие участия в жизни и развитии нашего проекта",
        color: 9709869,
        image: {
          url: `https://media.discordapp.net/attachments/969596649183776848/990663615516377239/d9828c9adaa51dd6e2e66b48787e4023.gif`,
        },
      },
    }