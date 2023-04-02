async function anonsi(interaction) {
    interaction.reply({
        ephemeral: true,
        ...options,
    })
}

const options = require('../sharedEmbeds/anonsi');

module.exports = {
    action: anonsi,
    emoji: '🛐',
    label: 'Анонс роли',
    value: 'anonsi',
};