// Τα ερωτήματα 2 έως 7 θα απαντηθούν στο αρχείο αυτό

const newGuess = document.querySelector("#new-guess");
const message = document.querySelector("#message");
const lowHigh = document.querySelector("#low-high");
const checkButton = document.querySelector("#check");
const restartButton = document.querySelector("#restart");
const root = document.querySelector(":root");

const tries=document.querySelector("#tries");
const prevGuess=document.querySelector("#prev-guess");
// 2. να ορίσετε τους σχετικούς χειριστές συμβάντων

let previousGuesses = [];
let theGuess;
window.onload = newRandom();
newGuess.focus();

newGuess.addEventListener("keyup",checkKey);
checkButton.addEventListener("click",checkGuess);
restartButton.addEventListener("click",restart);


function newRandom(){
/* 3. συνάρτηση που βρίσκει ένα τυχαίο αριθμό μεταξύ 1 και 100
 και τον εκχωρεί στη μεταβλητή theGuess */
 theGuess=Math.floor((Math.random() * 100) + 1);
 console.log("first",theGuess);
}

function checkKey(e){
/* 4. συνάρτηση που όταν ο χρήστης πατήσει <<enter>>
 να καλεί τη συνάρτηση που αποτελεί τον κεντρικό ελεγκτή του παιχνιδιού.
 */
    
    if(e.code==="Enter" || e.code==="NumbadEnter"){
        checkGuess();
    }

}

function checkGuess(){
/* 5. Να ορίσετε συνάρτηση checkGuess η οποία καλείται είτε όταν ο χρήστης πατήσει <<enter>>
στο πεδίο "new-guess" είτε όταν πατήσει το πλήκτρο "check", η οποία είναι ο κεντρικός ελεγκτής,
καλεί τη συνάρτηση processGuess (η οποία αποφαίνεται για την ορθότητα του αριθμού) και κάνει
τις κατάλληλες ενέργειες για να μην μπορεί να εισάγει ο χρήστης νέο αριθμό ή να ανασταλεί η
λειτουργία του <<enter>>, εμφάνιση του πλήκτρου 'restart' και την εξαφάνιση του πλήκτρου 'check'
σε περίπτωση ολοκλήρωσης του παιχνιδιού. */

let newValue=parseInt(newGuess.value);

   if(!isNaN(newValue)){
    
    console.log("size:=",previousGuesses.length);
    tries.style.display="block";

    previousGuesses.push(newValue);
    console.log(previousGuesses);
    }

    if(previousGuesses.length>0){
        let spa="";
        let list= previousGuesses.reduce((spa,el)=> spa+=" "+el);
        prevGuess.textContent= list;
     console.log(list);
        }


   newGuess.value="";

     
   
processGuess(newValue);

if("win"===processGuess(newValue)){

    checkButton.style.display="none";
    restartButton.style.display="block";
    restartButton.style.left="0px";
    restartButton.style.position='fixed';
    newGuess.readOnly=true;
    message.style.backgroundColor = 'var(--msg-win-color)';
    lowHigh.style.backgroundColor = 'var(--msg-win-color)';

}else if("lost"===processGuess(newValue)){


    checkButton.style.display="none";
    restartButton.style.display="block";
    restartButton.style.left="0px";
    restartButton.style.position='fixed';
    newGuess.readOnly=true;

    message.innerHTML="Looser!!!";
    message.style.width='100%';
    message.style.textAlign= 'center';
    lowHigh.style.display='none';
}


 



}

function processGuess(newValue){
 /* 6.  Να ορίσετε συνάρτηση processGuess(newValue) η οποία καλείται από τη συνάρτηση checkGuess,
 περιέχει τη λογική του παιχνιδιού, ελέγχει αν η τιμή του χρήστη είναι σωστή, ή αν το παιχνίδι έχει
 τελειώσει χωρίς ο χρήστης να έχει βρει τον αριθμό, και επιστρέφει αντίστοιχα την τιμή "win", ή "lost",
 δημιουργεί και εμφανίζει τα κατάλληλα μηνύματα, αλλάζοντας το χρώμα του στοιχείου μηνυμάτων.
 Όλα τα μηνύματα του προγράμματος εμανίζονται από την processGuess().
 Σε περίπτωση που το παιχνίδι δεν έχει ακόμα τελειώσει, η συνάρτηση μπορεί είτε να μην επιστρέφει κάποια ιδιαίτερη τιμή,
 είτε να επιστρέφει κάποια τιμή της επιλογής σας */
 //let theGuessInt=parseInt(theGuess);

 let theGuessInt=parseInt(theGuess);
console.log("the guess",theGuessInt);
console.log("new value",newValue);




if(newValue>theGuessInt){


message.innerHTML="Wrong";
message.style.width='50%';
message.style.textAlign= 'right';
lowHigh.style.display='block';
lowHigh.innerHTML=" , bigger";
    
}else if(newValue<theGuessInt){

message.innerHTML="Wrong";
message.style.textAlign= 'right';
message.style.width='50%';
lowHigh.style.display='block';
lowHigh.innerHTML=" , smaller ";

    
}else if(newValue===theGuess){

    message.innerHTML="WIN!!!";
    message.style.width='100%';
    message.style.textAlign= 'center';
    lowHigh.style.display='none';

    return "win";
}


else{

    message.innerHTML="δωσε αριθμο μαλακα!!!";    
    message.style.width='100%';
    message.style.textAlign= 'center';
    lowHigh.style.display='none';

}


if(previousGuesses.length>9){
    return "lost";
}





}





function restart(){
/* 7. Να ορίσετε συνάρτηση restart η οποία καλείται όταν ο χρήστης πατήσει το πλήκτρο
'restart' και επανεκινεί τη διαδικασία */

location.reload(); 
}
