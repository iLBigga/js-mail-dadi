//Creo array con email accettate
const email = ["email1@gmail.com", "email2@gmail.com" , "email3@gmail.com" , "email4@gmail.com", "email5@gmail.com"]

// Chiedo all'utente la sua email
const utentMail = prompt(`Qual'è la tua Email?`)

// Creo variabile per salvare risultato ciclo for
let emailCheck

//Creo ciclo for
for (i = 0; i < email.length; i ++) {
    const findEmail = email[i]

    // Controllo se l'email dell'utente è all'interno dell'array
    // SE l'email è all'interno dell'array
    if (utentMail === findEmail) {
        // Salvo risultato nella variabile EmailCheck
        emailCheck = true
    }
}

// SE ecailChek è true
if (emailCheck) {
    // Stampo 'Email Valida'
    console.log('Email valida')
// Altrimenti
} else {
    //Stampo 'Email non valida'
    console.log('Email non valida')
}