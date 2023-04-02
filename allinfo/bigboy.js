async function bigboy(interaction) {
    interaction.reply({
        ephemeral: true,
        ...options,
    })
}

const options = require('../sharedEmbeds/bigboy');

module.exports = {
    action: bigboy,
    emoji: '🛐',
    label: 'Информация о ролях',
    value: 'bigboy',
};