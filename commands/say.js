const embeds = require("../embeds");
const { includes } = require("../embeds");

async function say(message){
        try {
            const embed = JSON.parse(message.content.split(/ +/).slice(1).join(' '));
            if(`embeds`in embed){
                return message.channel.send(embed);
                }
                else {
                    return message.channel.send({
                        embeds:
                        [
                            embed
                        ]
                    })
                }
        } catch(err) {
            return message.channel.send(message.content.split(' ').slice(1).join(' '));
        };
    await message.delete();
    }
    module.exports=say;