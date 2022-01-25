//Domanda iniziale
let domanda = prompt("Qual'è la tua mail?");

//Inserisco le mail nell'array
const mails = ["pino@gmail.com","aldo@gmail.com","gino@gmail.com"];

//Definisco le variabili per i successivi controlli
let controllo = false;
let controllo2 = false;

//Ciclo per trovare corrispondenza tra email inserita e [i] nell'array
for (let i=0; i<mails.length; i++) {

    if (mails[i] == domanda) {

        alert("La mail inserita " + mails[i] + " è presente nel sistema, puoi accedere al sito e giocare a dadi");
        controllo = true; //aggiorno variabile di controllo
        break;  
    } 

}

//Se il controllo non passa allora non c'è corrispondenza
if (controllo != true) {

    alert("Non puoi accedere al gioco. Registra la tua mail e riprova");

    //Registro la mail
    let aggiungiMail = prompt("Scrivi la tua mail per registrarti");

    //Aggiungo mail all'array iniziale
    mails.push(aggiungiMail);

    alert("Email correttamente aggiunta");

    //Inserisco la mail per conferma
    let domanda = prompt("Riprova inserendo la tua mail adesso");

    //Secondo ciclo per vedere se la mail inserita combacia con la mail registrata
    for (let i=0; i<mails.length; i++) {

        if (mails[i] == domanda) {
    
            alert("La mail inserita " + mails[i] + " è ora presente nel sistema, puoi accedere al sito e giocare a dadi");
            controllo2 = true;            
            break;

        } 
        
    }
    
    //Se ancora non combacia mostra segnale di errore
    if (controllo2 != true) {

        alert("Le email che hai inserito non combaciano. Riaggiorna la pagina e riprova");
            
    }

}


/* -------------------GIOCO DEI DADI---------------------- */

//Definisco la variabile dado
let dado = document.querySelector("button");

//Se l'utente non inserisce la mail segnalo errore
if (controllo2 != true) {

    dado.innerHTML = "NON PUOI GIOCARE";

} else { //Se l'utente ha inserito la mail aggiungo un evento al verificarsi del click 

    dado.addEventListener("click",

        function() {

            //Definisco 2 numeri compresi tra 1 e 6
            let numeroGiocatore = (Math.floor(Math.random() * 6) + 1);
            let numeroComputer = (Math.floor(Math.random() * 6) + 1);

            //Definisco le condizioni di vittoria
            if (numeroGiocatore > numeroComputer) {

                alert(`Il tuo numero era ${numeroGiocatore} mentre quello del Computer era ${numeroComputer}, quindi hai vinto!!`);
            
            } else if (numeroGiocatore == numeroComputer) {

                alert(`Il tuo numero era ${numeroGiocatore} mentre quello del Computer era ${numeroComputer}, quindi avete pareggiato!!`);
        
            } else {

                alert(`Il tuo numero era ${numeroGiocatore} mentre quello del Computer era ${numeroComputer}, quindi hai perso!!`);
            
            }

        }

    )

}







