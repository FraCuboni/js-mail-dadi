// chiedi all'untente la mail e controlla sia nella lista di chi può accedere


//creo const input mail utente mail+bottone
const emailInput = document.querySelector(".emailinput");
const emailSend = document.querySelector(".emailsend");

// creo l'interazione di invio mail dopo il click del bottone
emailSend.addEventListener("click",
    function(){
        event.preventDefault();

        let emailValue = emailInput.value;
        
        // we got the email ;)
        console.log(emailValue);

        // creo l'array per convalidare le email
        const emailValid = ['giorgio@gmail.com', 'mariolino@gmail.com', 'pescepony@gmail.com','l@l.l'];
        console.log(emailValid);
        

    }


)

// crea un gioco che permette all'utente e al sistema di lanciare un dado e vedere se si ha vinto o perso

// creo il button per lanciare il dado
const diceTrow = document.querySelector(".dicetrow");

diceTrow.addEventListener("click",
    function(){

        // generatore di numeri random da 1 a 6
        let diceNumber = Math.floor((Math.random()* 6) + 1);
        console.log(diceNumber);

        // creo un


    }
)















// genero un numero random da 1 a 6 sia per il giocatore che per il computer e stabilisco chi è il vincirore in base a chi fa il punteggio più alto