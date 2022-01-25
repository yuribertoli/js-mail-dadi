let domanda = prompt("Qual'è la tua mail?");

const mails = ["pino@gmail.com","aldo@gmail.com","gino@gmail.com"];

for (let i=0; i<mails.length; i++) {

    if (mails[i] == domanda) {
        alert("La mail inserita " + mails[i] + " è presente nel sistema");
    } 

}

/*  else {

    alert("Non puoi accedere al sito. Registra la tua mail e riprova"); */

    /* let aggiungiMail = prompt("Scrivi la tua mail per registrarti");

    mails.push(aggiungiMail);

    alert("Email correttamente aggiunta");

    let domanda = prompt("Riprova inserendo la tua mail adesso");
    
    if (mails[i] == domanda) {
        alert("Ora sei registrato e puoi accedere al sito");
    }  else {
        alert("Le email che hai inserito non combaciano. Riaggiorna la pagina e riprova");
    } 
}
*/

