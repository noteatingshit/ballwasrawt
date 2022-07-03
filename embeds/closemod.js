module.exports= {
  name: `closemod`,
  fullstaffchatid: `993202806532096060`,
  description: `Организация игровых мероприятий.`,
  label: `Клозер`,
  form: [
    {
      type: `text`,
      label: `Расскажите немного о себе`,
      name: `info`,
      style: `LONG`,
      placeholder: `имя, возраст, что из себя представляешь и тд`,
      required: true,
    },
     {
      type: `text`,
      label: `По каким играм готовы проводить ивенты?`,
      name: `events`,
      style: `LONG`,
      placeholder: `Пример: dota2, cs:go, LoL, Valorant , World of Warcraft, StarCraft II, Minecraft`,
      required: true,
     },
     {
      type: `text`,
      label: `Время когда вы хотите работать?`,
      name: `time`,
      style: `LONG`,
      placeholder: `вечер 18:00-22:00`,
      required: true, 
     },
    {
        type: `text`,
        label: `Есть ли у Вас опыт в проведении клозов?`,
        name: `exp`,
        style: `LONG`,
        placeholder: `Имеется ввиду опыт проведения на других серверах, если есть, то на каких?`,
        required: true, 
    },
    {
        type: `text`,
        label: `Были у вас муты/варны/баны?`,
        name: `reports`,
        style: `LONG`,
        placeholder: `Если были, то за что?`,
        required: true, 
    },
     
  ],

  embed: {
      title: "Открыт набор на Клозера!",
      description: "Здарова! <@&866366388117176320> - ребята, которые проводят игры 5х5 по Dota2, CS:GO, LoL, Valorant. Если ты так же хочешь стать частью этого комьюнити, то мы приглашаем тебя на эту должность!\n\n**Требования для подачи заявки:**\n\n<:tocchhka:963407063390769192>Уделять серверу по 2 часа в день.\n <:tocchhka:963407063390769192>Адекватность.\n<:tocchhka:963407063390769192>Опыт в данных играх.\n\n\n**Что вас ждёт:**\n\n <:tocchhka:963407063390769192>Вы сможете принять участие в развитии проекта.\n<:tocchhka:963407063390769192>Станете частью дружного коллектива.\n<:tocchhka:963407063390769192>Зарплата в виде <:konfeta:921400596660097045> и других плюшек.",
      color: 8550331,
      image: {
        url: `https://media.discordapp.net/attachments/869849849854590997/910501046189699092/2e4e9982c7193de6b65869198fcbc9ba.gif?width=450&height=253`
      },
      footer: {
        text: `По всем вопросам обращаться к Littleefizz#1668 и  фиджет спинер#1002`
      },
    },
  }