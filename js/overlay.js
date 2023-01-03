/* Se JS-filen 'overlay-forside'. Det er nøjagtig den samme fremgangsmåde bare andre navne. 
De er delt op da de er relevante for forskellige sider og for at undgå, at alle sider skal load'e scriptet  */

/* ÅBNER OG LUKKER 'BOOST' OVERLAY */
const openBoost = document.getElementById("openBoost");
openBoost.addEventListener('click', function () {
    document.getElementById('closeBoost').style.display = "block";
});

const closeBoost = document.getElementById("closeBoost");
closeBoost.addEventListener('click', function () {
    document.getElementById('closeBoost').style.display = "none";
});
/* 'BOOST' END */



/* ÅBNER OG LUKKER 'COCKTAIL' OVERLAY */
const openCocktail = document.getElementById("openCocktail");
openCocktail.addEventListener('click', function () {
    document.getElementById('closeCocktail').style.display = "block";
});

const closeCocktail = document.getElementById("closeCocktail");
closeCocktail.addEventListener('click', function () {
    document.getElementById('closeCocktail').style.display = "none";
});
/* 'COCKTAIL' END */



/* ÅBNER OG LUKKER 'ICED TEA' OVERLAY */
const openIcedTea = document.getElementById("openIcedTea");
openIcedTea.addEventListener('click', function () {
    document.getElementById('closeIcedTea').style.display = "block";
});

const closeIcedTea = document.getElementById("closeIcedTea");
closeIcedTea.addEventListener('click', function () {
    document.getElementById('closeIcedTea').style.display = "none";
});
/* 'ICED TEA' END */