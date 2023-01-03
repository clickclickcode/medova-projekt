/* ÅBNER OG LUKKER 'HVORDAN' OVERLAY */

/* Der deklareres en konstant - openHvordan - som er en knap i vores HTML-dokument */
const openHvordan = document.getElementById('openHvordan');

/* Der tilføjes en eventlistener på 'openHvordan', så man ved at klikke på konstanten/knappen vises et overlay */
openHvordan.addEventListener('click', function () {
    /* Ændrer artiklens display property fra none til block */
    document.getElementById('closeHvordan').style.display = "block";
});

/* Der deklareres en konstant - closeHvordan - som er en hel article i vores HTML-dokument. 
Så man kan trykke hvor som helst på skærmen og overlay'et lukkes */
const closeHvordan = document.getElementById('closeHvordan');

/* Der tilføjes en eventlistener på artiklen 'closeHvordan', 
så man lukker overlay'et ved at trykke et vilkårligt sted indenfor viewporten */
closeHvordan.addEventListener('click', function () {
    /* Ændrer artiklens display property tilbage til none fra block */
    document.getElementById('closeHvordan').style.display = "none";
});