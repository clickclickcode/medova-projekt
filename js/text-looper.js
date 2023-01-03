/* Text looper på forsiden */

/* Der deklareres en konstant, som i dette tilfælde er et array - deraf navnet 'textArr'
Dette indeholder "præmierne" */
const textArr =["Studiebøger", "Koncertbilletter", "1 års streamingtjenester"];

/* Der deklareres en variabel der kan redigeres/overskrives - 'counter' da denne skal tælle eller holde tal på noget */
let counter = 0;

/* Der deklareres endnu en variabel - 'para' som er et tomt paragraph element i HTML-dokumentet, der skal display "præmierne" */
let para = document.getElementById('words');

/* Denne konstant affyrer funktionen 'loopingLouis()' som er skrevet nederst i dokumentet. Det gør den med 1.5 sekunders interval */
const inst = setInterval(loopinglouis, 1500); /* Validator meddeler at 'inst' ikke anvendes, men det er en konstant der kontinuerligt kører functionen loopinglouis() med et interval på 1500/1,5 sekunder */

/* Funktionen som giver text looperen dens funktionalitet */
function loopinglouis() {
    
    /* para.innerHTML er indholdet af variablen 'para' som er det paragraph element der skal display "præmierne". 
    Det array der indeholder præmierne har 3 strings som har numrene - 0, 1 og 2. 'counter' starter med værdien 0, hvilket betyder, 
    at textArr[counter] da er det samme som textArr[0], hvilket er lig med position 0 i textArr som er "Studiebøger" */
    para.innerHTML = textArr[counter];

    /* 'counter' er en integer og ++ er det samme som at skrive +1. 
    'counter' går derfor, i første iteration, fra counter = 0 til counter = 1 */
    counter++;

    /* Dette er en "stopklods", hvis 'counter' er større eller lig med 'textArr.length' (antallet af strings/positioner i array'et), 
    hvilket er 2 (0, 1, 2), så skal 'counter' reset'es. Dette sørger for at funktionen bliver ved med at loop'e igennem array'et 
    og ikke kun viser de 3 strings én gang hver og derefter tæller videre til uendelig */
    if (counter >= textArr.length) {
        counter = 0;
    }
}