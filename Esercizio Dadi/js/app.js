// Creo array player
const player = [];
// Creo array bot
const bot = []


const playerData = document.getElementById('player')
const botData = document.getElementById('bot')
const resultData = document.getElementById('result')

const submitElement = document.querySelector('input[name="submit"]')


submitElement.addEventListener('click', function () {

    // Genero Numero random per player
    const playerRandom =  Math.floor(Math.random() * 6 + 1 );
    playerData.innerHTML = 'Player dado ' + playerRandom

    // Genero Numero random per bot
    const botRandom =  Math.floor(Math.random() * 6 + 1 );
    botData.innerHTML = 'Bot dado ' + botRandom

    let messaggio = 'Pareggio'

    // Confronto risultato numero random
    // SE playerResult è maggiore di botResult
    if (playerRandom > botRandom) {
        // Stampo 'Player vince'
        messaggio = 'Player vince'
        resultData.innerHTML = messaggio
    // ALTRIMENTI SE il risultato è uguale
    } else if (playerRandom < botRandom){
        // Stampo 'Bot vince'
        messaggio = 'Bot vince'
        resultData.innerHTML = messaggio
    } 

    console.log(messaggio)

})
