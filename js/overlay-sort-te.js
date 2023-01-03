/* Se JS-filen 'overlay-forside'. Det er nøjagtig den samme fremgangsmåde bare andre navne. 
De er delt op da de er relevante for forskellige sider og for at undgå, at alle sider skal load'e scriptet */

const openFokus = document.getElementById("openFokus");
openFokus.addEventListener('click', function () {
    document.getElementById('closeFokus').style.display = "block";
});

const closeFokus = document.getElementById("closeFokus");
closeFokus.addEventListener('click', function () {
    document.getElementById('closeFokus').style.display = "none";
});


const openHjerte = document.getElementById("openHjerte");
openHjerte.addEventListener('click', function () {
    document.getElementById('closeHjerte').style.display = "block";
});

const closeHjerte = document.getElementById("closeHjerte");
closeHjerte.addEventListener('click', function () {
    document.getElementById('closeHjerte').style.display = "none";
});


const openKrop = document.getElementById("openKrop");
openKrop.addEventListener('click', function () {
    document.getElementById('closeKrop').style.display = "block";
});

const closeKrop = document.getElementById("closeKrop");
closeKrop.addEventListener('click', function () {
    document.getElementById('closeKrop').style.display = "none";
});