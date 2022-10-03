const isDev = process.env.NODE_ENV=="development"; 
module.exports = {
    prefix : isDev?"$":"!",
    hellokitty : isDev?"loh":"hellokitty",
}