const infoOptions = [
    require('./privetsvie'),
    require('./commands'),
    require('./pravila'),
    require('./shop'),
    require('./bigboy'),
    require('./anonsi'),
    require('./roli'),
]

function execute(interaction) {
    const result = interaction.values[0];
    infoOptions.find(option => option.value === result)?.action(interaction);
}

module.exports = {
  execute,
  infoOptions,
};