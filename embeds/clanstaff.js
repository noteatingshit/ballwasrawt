module.exports= {
    name: `clanstaff`,
    fullstaffchatid: `992514958107611176`,
    description: `Ответственные за клан движуху.`,
    label: `Клан Стафф`,
    form: [
      {
        type: `text`,
        label: `Имя и возраст`,
        name: `name`,
        style: 1,
        placeholder: `Артур, 20`,
        required: true,
      },
       {
        type: `text`,
        label: `Сколько времени готов уделять на ветку?.`,
        name: `online`,
        style: 2,
        placeholder: `Например: от 4 часов`,
        required: true,
       },
       {
        type: `text`,
        label: `На какую из двух веток ты хочешь встать?`,
        name: `clanvetki`,
        style: 2,
        placeholder: `Например: Clan adviser или Clan EventMod?`,
        required: true, 
       },
       {
        type: `text`,
        label: `Расскажи о своём опыте если он у тебя есть.`,
        name: `exp`,
        style: 2,
        placeholder: `Например: какие ивенты умеешь проводить либо же как ты был связан с кланами?`,
        required: true,  
       },
       {
        type: `text`,
        label: `Почему мы должны выбрать именно тебя?`,
        name: `why`,
        style: 2,
        placeholder: ``,
        required: true,  
       },
       
    ],
  
    embed: {
        description: "⠀⠀Сlan Adviser — ответственные за популяризацию категории и трафик в кланах.\n⠀⠀Clan Eventer — ответственные за проведение внутриклановых мероприятий.\n \n <a:heart11111:974801299604406322>Что от вас  требуется:\n <a:917549530700980224:929781205304487946> Адекватность и стрессоустойчивость.\n<a:917549530700980224:929781205304487946> Уделять серверу по 3 часа в день.\n<a:917549530700980224:929781205304487946> Навыки и знания в данной сфере. \n\n <a:heart11111:974801299604406322>Что вы получите взамен:\n <a:917549530700980224:929781205304487946> Сплоченный коллектив и ценный опыт.\n<a:917549530700980224:929781205304487946> Карьерный рост на сервере.\n<a:917549530700980224:929781205304487946> Зарплата в виде серверной валюты и других плюшек.",
        color: 11315147,
        author: {
            name: "Открыт набор на Clan Staff",
            icon_url: "https://cdn.discordapp.com/emojis/977333191234977812.gif?size=100&quality=lossless"
        },
        image: {
          url: `https://media.giphy.com/media/LBys3TJZTQDhXdvNR9/giphy.gif`
        },
        footer: {
            text: `Если ваша заявка нам понравится, мы обязательно с вами свяжемся!`,
            icon_url: `https://cdn.discordapp.com/emojis/966721567851675668.gif?size=48&quality=lossless`
        },
      },
    }