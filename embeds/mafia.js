module.exports= {
    name: `mafia`,
    fullstaffchatid: `880426725266317372`,
    description: `Организаторы столов по мафии и бункерам.`,
    label: `Ведущий мафии`,
    form: [
      {
        type: `text`,
        label: `Был ли опыт в проведении мафии до этого?`,
        name: `exp`,
        style: `LONG`,
        placeholder: ``,
        required: true,
      },
      {
        type: `text`,
        label: `Сколько игр на нашем сервере?`,
        name: `ammountgame`,
        style: `SHORT`,
        placeholder: `Например: 4`,
        required: true,
      },
      {
        type: `text`,
        label: `Сколько можно взять +30 за круг?`,
        name: `krug`,
        style: `LONG`,
        placeholder: `Например: пять раз`,
        required: true, 
      },
      {
        type: `text`,
        label: `Что будет после 3-ёх фолов у игрока?`,
        name: `fall`,
        style: `LONG`,
        placeholder: ``,
        required: true,  
      },
      {
        type: `text`,
        label: `Что вы сделаете за клятву во время игры?`,
        name: `klyatva`,
        style: `LONG`,
        placeholder: `???`,
        required: true,    
      },
    ],

    embed: {
        "title": "НАЗВАНИЕ ДАННОГО ТИТЛА",
        "description": "ТУТ ВСЕ СТАФФ РОЛИ\n\nроль 1\nроль 1\nроль 1\nроль 1\nроль 1\nроль 1",
        "color": null
      },
    }