module.exports= {
    name: `eventer`,
    fullstaffchatid: `909267115696087040`,
    description: `Организаторы мероприятий.`,
    label: `Ивентер`,
    form: [
      {
        type: `text`,
        label: `Твои имя, возраст, часовой пояс.`,
        name: `name`,
        style: `SHORT`,
        placeholder: `Антон, 17, мск/+3мск`,
        required: true,
      },
       {
        type: `text`,
        label: `Сколько у тебя свободного времени в неделю?`,
        name: `time`,
        style: `SHORT`,
        placeholder: `2 часа в неделю, к примеру`,
        required: true,
       },
       {
        type: `text`,
        label: `Расскажи о себе, о своём прошлом опыте.`,
        name: `exp`,
        style: `LONG`,
        placeholder: `Занимаюсь футболом, стоял на тендерли ивентёром`,
        required: true, 
       },
       {
        type: `text`,
        label: `Какие ивенты предпочтительно готов проводить?`,
        name: `events`,
        style: `LONG`,
        placeholder: `кодик/шляпа/такеноко`,
        required: true,  
       },
       {
        type: `text`,
        label: `Почему именно ты?`,
        name: `ammount`,
        style: `LONG`,
        placeholder: `потому что я крутой/интересный и т.п`,
        required: true,  
       },

    ],

    embed: {
        title: "Набор на должность Ивентер!",
        description: "Тебе нравится проводить различные мероприятия?\nТогда приглашаем тебя стать одним из: <@&865974246597066762>!",
        fields: [{
              name: "**Что от вас требуется:**",
              value: "▪  От 2 часов времени в день;\n▪ Знание правил ивентов;\n▪ Адекватность;\n▪ Стрессоустойчивость.",
              inline: true
            },
            {
              name: "**Что мы предлагаем взамен:**",
              value: "▪ Участие в развитии проекта;\n▪ Работа в дружным коллектив;\n▪ Зарплата в виде валюты серва-\n▪ Discord nitro и другого.",
              inline: true
            }],
        color: 3026739,
        image: {
          url: `https://media.discordapp.net/attachments/690620268237946983/1038968579955114064/kk.jpg`
        },
        footer: {
          text: `По всем вопросам обращайтесь к .hoki#6693`
        },
      },
    }