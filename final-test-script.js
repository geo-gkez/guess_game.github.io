// Τα ερωτήματα 2 έως 7 θα απαντηθούν στο αρχείο αυτό

const newGuess = document.querySelector("#new-guess");
const message = document.querySelector("#message");
const lowHigh = document.querySelector("#low-high");
const checkButton = document.querySelector("#check");
const restartButton = document.querySelector("#restart");
const root = document.querySelector(":root");

const tries=document.querySelector("#tries");
const prevGuess=document.querySelector("#prev-guess");


let previousGuesses = [];
let theGuess;
window.onload = newRandom();
newGuess.focus();

newGuess.addEventListener("keyup",checkKey);
checkButton.addEventListener("click",checkGuess);
restartButton.addEventListener("click",restart);


function newRandom(){

 theGuess=Math.floor((Math.random() * 100) + 1);
 console.log("first",theGuess);
}

function checkKey(e){

    
    if(e.code==="Enter" || e.code==="NumbadEnter"){
        checkGuess();
    }

}

function checkGuess(){


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

'restart' και επανεκινεί τη διαδικασία */

location.reload(); 
}
