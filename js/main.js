// Hamburger + menu animation toggle

/* const btn deklareret ved at get' elementet ved dets ID - #btn */
const btn = document.getElementById("btn");

/* Eventlistener gør, at ved et click på vores object, så affyres den function der er nested indeni */
btn.addEventListener('click', function () {
    
    /* const toggleNav deklareret ved at get' elemented #navlinks */
    const toggleNav = document.getElementById("navlinks");

    /* if/else statement der skifter klassen .active ud med .not-active,
     hvilket påvirker animationen på vores burger menu/ikon/knap */
    if (this.classList.contains("active")) {
        this.classList.remove("active");
        this.classList.add('not-active');
    }
    else {
        this.classList.add("active");
        this.classList.remove('not-active');
    }

    /* Ligeledes, ved en if/else statement, toggles klassen 'closed', samt at der tilføjes og fjernes klasserne 'open' og 'not-open' 
    som begge har en animation tilknyttet sig. Dette er animationerne der kører menuen op fra bunden af viewporten og ned igen. */
    if (toggleNav.classList.contains('closed')) {
        toggleNav.classList.add('open');
        toggleNav.classList.toggle('closed');
        toggleNav.classList.remove('not-open');
    } else {
        toggleNav.classList.add('not-open');
        toggleNav.classList.remove('open');
        toggleNav.classList.toggle('closed');
    }
});