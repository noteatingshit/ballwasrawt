module.exports= {
  name: `control`,
  fullstaffchatid: `972522006983614494`,
  description: `Модерация чатов и войсов сервера.`,
  label: `Контрол`,
  form: [
    {
      type: `text`,
      label: `Имя и возраст`,
      name: `name`,
      style: `SHORT`,
      placeholder: `Арина, 24`,
      required: true,
    },
     {
      type: `text`,
      label: `Есть ли опыт работы в подобной сфере?.`,
      name: `exp`,
      style: `LONG`,
      placeholder: `Если есть, опиши какой и где.`,
      required: true,
     },
     {
      type: `text`,
      label: `Были ли у тебя муты/варны/баны?`,
      name: `reports`,
      style: `LONG`,
      placeholder: `Если были, то за что?`,
      required: true, 
     },
     {
      type: `text`,
      label: `Время когда вам удобно работать?`,
      name: `gmt`,
      style: `LONG`,
      placeholder: `Время указывайте по московскому времени.`,
      required: true,   
     },
     {
      type: `text`,
      label: `Расскажи немного о себе.`,
      name: `why`,
      style: `LONG`,
      placeholder: `Выдели свои основные качества и почему мы должны взять именно тебя.`,
      required: true,   
     },
     
  ],

  embed: {
      title: "<a:chupa:921400596572033094> Открыт набор на роль Control !",
      description: "<@&842077390641561610> — **данная должность отвечает за порядок на сервере и выдает наказания нарушителям**\n\n<a:oblachko:869889640419700808> **От тебя потребуется:**\n\n⁣<a:tochka__:924659815681261630>Адекватность и стрессоустойчивость;\n⁣<a:tochka__:924659815681261630>16 полных лет;\n<a:tochka__:924659815681261630>Минимум месяц без нарушений;⁣\n<a:tochka__:924659815681261630>От 3-х часов свободного времени в день.\n\n<a:oblachko:869889640419700808>  **Что тебя ждет:**\n\n<a:tochka__:924659815681261630>Карьерный рост;\n<a:tochka__:924659815681261630>Высокая зарплата в виде серверной валюты;\n<a:tochka__:924659815681261630>Награды за активность: Discord Nitro, личные комнаты и тд.",
      color: 3026739,
      image: {
        url: `https://pa1.narvii.com/7263/dbc6e3af659c0d30abde5720c450d9d44c262d6ar1-600-328_hq.gif`
      },
    },
  }