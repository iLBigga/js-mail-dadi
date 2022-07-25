// Creo array player
const player = [];
// Creo array bot
const bot = []

// Genero Numero random per player
const playerRandom =  Math.floor(Math.random() * 6 + 1 );
player.push(playerRandom)

// Genero Numero random per bot
const botRandom =  Math.floor(Math.random() * 6 + 1 );
bot.push(botRandom)

// Creo variabile per identificare elemento 0 nell'array
const playerResult = player[0]
const botResult = bot[0]

// Confronto risultato numero random
// SE playerResult è maggiore di botResult
if (playerResult > botResult) {
    // Stampo 'Player vince'
    console.log('Player vince')
// ALTRIMENTI
} else {
     // Stampo 'Bot vince'
    console.log('Bot vince')
}