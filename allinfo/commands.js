function commands(interaction) {
    interaction.reply({
        ephemeral: true,
        embeds,
    })
}

const embeds = [
    {
        image: {
            url: "https://cdn.discordapp.com/attachments/793498184990457856/1036391955426455662/lf.png",
        },
        color: 3092790,
        },
    {
        title: "<:fon11:832188712644902927>Основные команды:",
        description: "<a:heartdotmeta00:965684404850679837>`/info user` — информация о тебе.\n<a:heartdotmeta01:965684412828237934>`/online` — голосовой онлайн.\n<a:heartdotmeta02:965684420696768512>`/balance` — покажет сколько <:konfeta_00074:998600817902882826> у тебя.\n<a:heartdotmeta03:965684428271665182>`/timely` - дает немного <:konfeta_00074:998600817902882826> каждые 12 часов.\n<a:heartdotmeta04:965684435741716510>`/give @user кол-во` — передать <:konfeta_00074:998600817902882826>.\n<a:heartdotmeta05:965684442704269412>`/top balance` — посмотреть топ по балансу.",
        image: {
            url: "https://media.discordapp.net/attachments/774042908718399509/830486108978544680/1111.png",
        },
        color: 3092790,
    },
    {
        title: "<:fon11:832188712644902927>Любовные комнаты:",
        description: "<a:heartdotmeta00:965684404850679837>`!marry @user` - отправить запрос для бракозаключения.\n<a:heartdotmeta01:965684412828237934>`!divorce` - для развода.\n<a:heartdotmeta02:965684420696768512>`!lprofile` - просмотреть любовный профиль.\n<a:heartdotmeta03:965684428271665182>`!deposit` - пополнение баланса пары.\n<a:heartdotmeta04:965684435741716510>`!lshop` - магазин профилей для пар.\n<a:heartdotmeta05:965684442704269412>`!ltop` - топ 10 пар по онлайну.\n<a:heartdotmeta06:965684449125761064>`!mhis` - история создания браков",
        image: {
            url: "https://media.discordapp.net/attachments/774042908718399509/830486108978544680/1111.png",
        },
        color: 3092790,
    },
    {
        title: "<:fon11:832188712644902927>Профиль:",
        description: "<a:heartdotmeta00:965684404850679837>`!profile` - отобразить ваш профиль.\n<a:heartdotmeta01:965684412828237934>`!pinfo` - статистика(прогресс) достижений.\n<a:heartdotmeta02:965684420696768512>`!ptop` - топ-10 профилей (по опыту и рангу).",
        image: {
            url: "https://media.discordapp.net/attachments/774042908718399509/830486108978544680/1111.png",
        },
        color: 3092790,
    },
    {
        title: "<:fon11:832188712644902927>Прочее:",
        description: "<a:heartdotmeta00:965684404850679837>`!top` - топ-10 голосового онлайна.\n<a:heartdotmeta01:965684412828237934>`.ava @user` - посмотреть аватар пользователя.\n<a:heartdotmeta02:965684420696768512>`!inrole @role` - показать пользователей у которых есть роль.",
        image: {
            url: "https://media.discordapp.net/attachments/774042908718399509/830486108978544680/1111.png",
        },
        color: 3092790,
    },
    {
        title: "<:fon11:832188712644902927>Магазин:",
        description: "<a:heartdotmeta00:965684404850679837> `/market`- торговая площадка.",
        image: {
            url: "https://media.discordapp.net/attachments/774042908718399509/830486108978544680/1111.png",
        },
        color: 3092790,
    },
]

module.exports = {
    action: commands,
    emoji: '🛐',
    label: 'Команды',
    value: 'commands',
};