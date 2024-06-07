// chiedi all'untente la mail e controlla sia nella lista di chi può accedere

// creo lista mail che possono accedere

//creo const input mail utente mail+bottone
const emailInput = document.querySelector(".emailinput");
const emailSend = document.querySelector(".emailsend");

// creo l'interazione di invio mail dopo il click del bottone
emailSend.addEventListener("click",
    function(event){
        event.preventDefault();

        let emailValue = emailInput.value;
        console.log(emailValue);

    }


)















// genero un numero random da 1 a 6 sia per il giocatore che per il computer e stabilisco chi è il vincirore in base a chi fa il punteggio più alto