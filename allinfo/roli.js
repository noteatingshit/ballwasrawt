async function roli(interaction) {
    interaction.reply({
        ephemeral: true,
        ...options,
    })
}

const options = require('../sharedEmbeds/roli');

module.exports = {
    action: roli,
    emoji: '🛐',
    label: 'Игровые роли',
    value: 'roli',
};