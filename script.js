const R1 = document.getElementById('R1') //grand-est
const R2 = document.getElementById('R2') //hauts-de-france
const R3 = document.getElementById('R3') //ile-de-France
const R4 = document.getElementById('R4') //bourgogne
const R5 = document.getElementById('R5') //centre-val
const R6 = document.getElementById('R6') //auvergne 
const R7 = document.getElementById('R7') //aquitaine 
const R8 = document.getElementById('R8') //normandie
const R9 = document.getElementById('R9') //bretagne
const R10 = document.getElementById('R10') //pays-loire
const R11 = document.getElementById('R11') //occitanie 
const R12 = document.getElementById('R12') //cote-azur
const R13 = document.getElementById('R13') //corse

const img = document.querySelector('img')
const regionName = document.querySelector('region-name')
const regionDesc = document.querySelector('region-desc')
const url = 'regions.json';


R1.addEventListener('click', showR1Info) //grand-est
function showR1Info() {
    fetch(url)
    .then(res => res.json())
    .then(regions => {
        const grandEst = regions.grandEst[0];
        img.setAttribute('src', grandEst.pic)
        document.getElementById("region-name").innerHTML = grandEst.title;
        document.getElementById("region-desc").innerHTML = grandEst.info;
    })
    .catch((error) => {
        console.error(error);
    })
}


R2.addEventListener('click', showR2Info) //hauts-de-france
function showR2Info() {
    fetch(url)
    .then(res => res.json())
    .then(regions => {
        const hautsDeFrance = regions.hautsDeFrance[0];
        img.setAttribute('src', hautsDeFrance.pic)
        document.getElementById("region-name").innerHTML = hautsDeFrance.title;
        document.getElementById("region-desc").innerHTML = hautsDeFrance.info;
    })
    .catch((error) => {
        console.error(error);
    })
}


R3.addEventListener('click', showR3Info) //ile-de-France
function showR3Info() {
    fetch(url)
    .then(res => res.json())
    .then(regions => {
        const ileDeFrance = regions.ileDeFrance[0];
        img.setAttribute('src', ileDeFrance.pic)
        document.getElementById("region-name").innerHTML = ileDeFrance.title;
        document.getElementById("region-desc").innerHTML = ileDeFrance.info;
    })
    .catch((error) => {
        console.error(error);
    })
}


R4.addEventListener('click', showR4Info) //bourgogne
function showR4Info() {
    fetch(url)
    .then(res => res.json())
    .then(regions => {
        const burgogne = regions.burgogne[0];
        img.setAttribute('src', burgogne.pic)
        document.getElementById("region-name").innerHTML = burgogne.title;
        document.getElementById("region-desc").innerHTML = burgogne.info;
    })
    .catch((error) => {
        console.error(error);
    })
}

R5.addEventListener('click', showR5Info) //centre-val
function showR5Info() {
    fetch(url)
    .then(res => res.json())
    .then(regions => {
        const centreVal = regions.centreVal[0];
        img.setAttribute('src', centreVal.pic)
        document.getElementById("region-name").innerHTML = centreVal.title;
        document.getElementById("region-desc").innerHTML = centreVal.info;
    })
    .catch((error) => {
        console.error(error);
    })
}

R6.addEventListener('click', showR6Info) //auvergne 
function showR6Info() {
    fetch(url)
    .then(res => res.json())
    .then(regions => {
        const auvergne = regions.auvergne[0];
        img.setAttribute('src', auvergne.pic)
        document.getElementById("region-name").innerHTML = auvergne.title;
        document.getElementById("region-desc").innerHTML = auvergne.info;
    })
    .catch((error) => {
        console.error(error);
    })
}

R7.addEventListener('click', showR7Info) //aquitaine 
function showR7Info() {
    fetch(url)
    .then(res => res.json())
    .then(regions => {
        const nouvelleAquitaine = regions.nouvelleAquitaine[0];
        img.setAttribute('src', nouvelleAquitaine.pic)
        document.getElementById("region-name").innerHTML = nouvelleAquitaine.title;
        document.getElementById("region-desc").innerHTML = nouvelleAquitaine.info;
    })
    .catch((error) => {
        console.error(error);
    })
}

R8.addEventListener('click', showR8Info) //normandie
function showR8Info() {
    fetch(url)
    .then(res => res.json())
    .then(regions => {
        const normandie = regions.normandie[0];
        img.setAttribute('src', normandie.pic)
        document.getElementById("region-name").innerHTML = normandie.title;
        document.getElementById("region-desc").innerHTML = normandie.info;
    })
    .catch((error) => {
        console.error(error);
    })
}

R9.addEventListener('click', showR9Info) //bretagne
function showR9Info() {
    fetch(url)
    .then(res => res.json())
    .then(regions => {
        const bretagne = regions.bretagne[0];
        img.setAttribute('src', bretagne.pic)
        document.getElementById("region-name").innerHTML = bretagne.title;
        document.getElementById("region-desc").innerHTML = bretagne.info;
    })
    .catch((error) => {
        console.error(error);
    })
}

R10.addEventListener('click', showR10Info) //pays-loire
function showR10Info() {
    fetch(url)
    .then(res => res.json())
    .then(regions => {
        const paysDeLaLoire = regions.paysDeLaLoire[0];
        img.setAttribute('src', paysDeLaLoire.pic)
        document.getElementById("region-name").innerHTML = paysDeLaLoire.title;
        document.getElementById("region-desc").innerHTML = paysDeLaLoire.info;
    })
    .catch((error) => {
        console.error(error);
    })
}

R11.addEventListener('click', showR11Info) //occitanie 
function showR11Info() {
    fetch(url)
    .then(res => res.json())
    .then(regions => {
        const occitanie = regions.occitanie[0];
        img.setAttribute('src', occitanie.pic)
        document.getElementById("region-name").innerHTML = occitanie.title;
        document.getElementById("region-desc").innerHTML = occitanie.info;
    })
    .catch((error) => {
        console.error(error);
    })
}

R12.addEventListener('click', showR12Info) //cote-azur
function showR12Info() {
    fetch(url)
    .then(res => res.json())
    .then(regions => {
        const provenceAlpesCoteDAzur = regions.provenceAlpesCoteDAzur[0];
        img.setAttribute('src', provenceAlpesCoteDAzur.pic)
        document.getElementById("region-name").innerHTML = provenceAlpesCoteDAzur.title;
        document.getElementById("region-desc").innerHTML = provenceAlpesCoteDAzur.info;
    })
    .catch((error) => {
        console.error(error);
    })
}

R13.addEventListener('click', showR13Info) //corse
function showR13Info() {
    fetch(url)
    .then(res => res.json())
    .then(regions => {
        const corse = regions.corse[0];
        img.setAttribute('src', corse.pic)
        document.getElementById("region-name").innerHTML = corse.title;
        document.getElementById("region-desc").innerHTML = corse.info;
    })
    .catch((error) => {
        console.error(error);
    })
}

