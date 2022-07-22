const R1 = document.getElementById("R1"); //grand-est
const R2 = document.getElementById("R2"); //hauts-de-france
const R3 = document.getElementById("R3"); //ile-de-France
const R4 = document.getElementById("R4"); //bourgogne
const R5 = document.getElementById("R5"); //centre-val
const R6 = document.getElementById("R6"); //auvergne
const R7 = document.getElementById("R7"); //aquitaine
const R8 = document.getElementById("R8"); //normandie
const R9 = document.getElementById("R9"); //bretagne
const R10 = document.getElementById("R10"); //pays-loire
const R11 = document.getElementById("R11"); //occitanie
const R12 = document.getElementById("R12"); //cote-azur
const R13 = document.getElementById("R13"); //corse

const img = document.querySelector("img");
const regionName = document.querySelector("region-name");
const regionDesc = document.querySelector("region-desc");
const url = "regions.json";

const cityPres = "La plus grande ville de cette region est: ";
const popPres = "Le nombre d'habitants dans cette ville est de: ";
const celsius = "°C";

/* Weather API */
const apiKey = "5f3933f24f2b494fa4b113042222107";
const weatherUrl = "https://api.weatherapi.com/v1/current.json";

const requestParams = `?key=${apiKey}&q=`;
const urlToFetch = `${weatherUrl}${requestParams}`;
const urlEnd = `&aqi=no`;

R1.addEventListener("click", showR1Info); //grand-est
async function showR1Info() {
  fetch(url)
    .then((res) => res.json())
    .then((regions) => {
      const grandEst = regions.grandEst[0];
      img.setAttribute("src", grandEst.pic);
      document.getElementById("region-name").innerHTML = grandEst.title;
      document.getElementById("region-desc").innerHTML = grandEst.info;
      document.getElementById("city").innerHTML =
        cityPres + grandEst.biggestTown.name;
      const town = grandEst.biggestTown.population;
      document.getElementById("population").innerHTML =
        popPres + town + "pers.";
    });
  try {
    const finalUrl = urlToFetch + "Strasbourg" + urlEnd;
    console.log(finalUrl);
    const response = await fetch(finalUrl);
    if (response.ok) {
      const json = await response.json();
      const actualTemp = json.current.temp_c;
      document.getElementById("weather").innerHTML = actualTemp + celsius;
    }
  } catch (err) {
    console.log(err);
  }
}

R2.addEventListener("click", showR2Info); //hauts-de-france
async function showR2Info() {
  fetch(url)
    .then((res) => res.json())
    .then((regions) => {
      const hautsDeFrance = regions.hautsDeFrance[0];
      img.setAttribute("src", hautsDeFrance.pic);
      document.getElementById("region-name").innerHTML = hautsDeFrance.title;
      document.getElementById("region-desc").innerHTML = hautsDeFrance.info;
      document.getElementById("city").innerHTML =
        cityPres + hautsDeFrance.biggestTown.name;
      const town = hautsDeFrance.biggestTown.population;
      document.getElementById("population").innerHTML =
        popPres + town + "pers.";
    });
  try {
    const finalUrl = urlToFetch + "Lille" + urlEnd;
    console.log(finalUrl);
    const response = await fetch(finalUrl);
    if (response.ok) {
      const json = await response.json();
      const actualTemp = json.current.temp_c;
      document.getElementById("weather").innerHTML = actualTemp + celsius;
    }
  } catch (err) {
    console.log(err);
  }
}

R3.addEventListener("click", showR3Info); //ile-de-France
async function showR3Info() {
  fetch(url)
    .then((res) => res.json())
    .then((regions) => {
      const ileDeFrance = regions.ileDeFrance[0];
      img.setAttribute("src", ileDeFrance.pic);
      document.getElementById("region-name").innerHTML = ileDeFrance.title;
      document.getElementById("region-desc").innerHTML = ileDeFrance.info;
      document.getElementById("city").innerHTML =
        cityPres + ileDeFrance.biggestTown.name;
      const town = ileDeFrance.biggestTown.population;
      document.getElementById("population").innerHTML =
        popPres + town + "pers.";
    });
  try {
    const finalUrl = urlToFetch + "Paris" + urlEnd;
    console.log(finalUrl);
    const response = await fetch(finalUrl);
    if (response.ok) {
      const json = await response.json();
      const actualTemp = json.current.temp_c;
      document.getElementById("weather").innerHTML = actualTemp + celsius;
    }
  } catch (err) {
    console.log(err);
  }
}

R4.addEventListener("click", showR4Info); //bourgogne
async function showR4Info() {
  fetch(url)
    .then((res) => res.json())
    .then((regions) => {
      const burgogne = regions.burgogne[0];
      img.setAttribute("src", burgogne.pic);
      document.getElementById("region-name").innerHTML = burgogne.title;
      document.getElementById("region-desc").innerHTML = burgogne.info;
      document.getElementById("city").innerHTML =
        cityPres + burgogne.biggestTown.name;
      const town = burgogne.biggestTown.population;
      document.getElementById("population").innerHTML =
        popPres + town + "pers.";
    });
  try {
    const finalUrl = urlToFetch + "Dijon" + urlEnd;
    console.log(finalUrl);
    const response = await fetch(finalUrl);
    if (response.ok) {
      const json = await response.json();
      const actualTemp = json.current.temp_c;
      document.getElementById("weather").innerHTML = actualTemp + celsius;
    }
  } catch (err) {
    console.log(err);
  }
}

R5.addEventListener("click", showR5Info); //centre-val
async function showR5Info() {
  fetch(url)
    .then((res) => res.json())
    .then((regions) => {
      const centreVal = regions.centreVal[0];
      img.setAttribute("src", centreVal.pic);
      document.getElementById("region-name").innerHTML = centreVal.title;
      document.getElementById("region-desc").innerHTML = centreVal.info;
      document.getElementById("city").innerHTML =
        cityPres + centreVal.biggestTown.name;
      const town = centreVal.biggestTown.population;
      document.getElementById("population").innerHTML =
        popPres + town + "pers.";
    });
  try {
    const finalUrl = urlToFetch + "Tours" + urlEnd;
    console.log(finalUrl);
    const response = await fetch(finalUrl);
    if (response.ok) {
      const json = await response.json();
      const actualTemp = json.current.temp_c;
      document.getElementById("weather").innerHTML = actualTemp + celsius;
    }
  } catch (err) {
    console.log(err);
  }

  R6.addEventListener("click", showR6Info); //auvergne
  async function showR6Info() {
    fetch(url)
      .then((res) => res.json())
      .then((regions) => {
        const auvergne = regions.auvergne[0];
        img.setAttribute("src", auvergne.pic);
        document.getElementById("region-name").innerHTML = auvergne.title;
        document.getElementById("region-desc").innerHTML = auvergne.info;
        document.getElementById("city").innerHTML =
          cityPres + auvergne.biggestTown.name;
        const town = auvergne.biggestTown.population;
        document.getElementById("population").innerHTML =
          popPres + town + "pers.";
      });
    try {
      const finalUrl = urlToFetch + "Lyon" + urlEnd;
      console.log(finalUrl);
      const response = await fetch(finalUrl);
      if (response.ok) {
        const json = await response.json();
        const actualTemp = json.current.temp_c;
        document.getElementById("weather").innerHTML = actualTemp + celsius;
      }
    } catch (err) {
      console.log(err);
    }
  }

  R7.addEventListener("click", showR7Info); //aquitaine
  async function showR7Info() {
    fetch(url)
      .then((res) => res.json())
      .then((regions) => {
        const nouvelleAquitaine = regions.nouvelleAquitaine[0];
        img.setAttribute("src", nouvelleAquitaine.pic);
        document.getElementById("region-name").innerHTML =
          nouvelleAquitaine.title;
        document.getElementById("region-desc").innerHTML =
          nouvelleAquitaine.info;
        document.getElementById("city").innerHTML =
          cityPres + nouvelleAquitaine.biggestTown.name;
        const town = nouvelleAquitaine.biggestTown.population;
        document.getElementById("population").innerHTML =
          popPres + town + "pers.";
      });
    try {
      const finalUrl = urlToFetch + "Bordeaux" + urlEnd;
      console.log(finalUrl);
      const response = await fetch(finalUrl);
      if (response.ok) {
        const json = await response.json();
        const actualTemp = json.current.temp_c;
        document.getElementById("weather").innerHTML = actualTemp + celsius;
      }
    } catch (err) {
      console.log(err);
    }
  }

  R8.addEventListener("click", showR8Info); //normandie
  async function showR8Info() {
    fetch(url)
      .then((res) => res.json())
      .then((regions) => {
        const normandie = regions.normandie[0];
        img.setAttribute("src", normandie.pic);
        document.getElementById("region-name").innerHTML = normandie.title;
        document.getElementById("region-desc").innerHTML = normandie.info;
        document.getElementById("city").innerHTML =
          cityPres + normandie.biggestTown.name;
        const town = normandie.biggestTown.population;
        document.getElementById("population").innerHTML =
          popPres + town + "pers.";
      });
    try {
      const finalUrl = urlToFetch + "Le Havre" + urlEnd;
      console.log(finalUrl);
      const response = await fetch(finalUrl);
      if (response.ok) {
        const json = await response.json();
        const actualTemp = json.current.temp_c;
        document.getElementById("weather").innerHTML = actualTemp + celsius;
      }
    } catch (err) {
      console.log(err);
    }
  }

  R9.addEventListener("click", showR9Info); //bretagne
  async function showR9Info() {
    fetch(url)
      .then((res) => res.json())
      .then((regions) => {
        const bretagne = regions.bretagne[0];
        img.setAttribute("src", bretagne.pic);
        document.getElementById("region-name").innerHTML = bretagne.title;
        document.getElementById("region-desc").innerHTML = bretagne.info;
        document.getElementById("city").innerHTML =
          cityPres + bretagne.biggestTown.name;
        const town = bretagne.biggestTown.population;
        document.getElementById("population").innerHTML =
          popPres + town + "pers.";
      });
    try {
      const finalUrl = urlToFetch + "Rennes" + urlEnd;
      console.log(finalUrl);
      const response = await fetch(finalUrl);
      if (response.ok) {
        const json = await response.json();
        const actualTemp = json.current.temp_c;
        document.getElementById("weather").innerHTML = actualTemp + celsius;
      }
    } catch (err) {
      console.log(err);
    }
  }

  R10.addEventListener("click", showR10Info); //pays-loire
  async function showR10Info() {
    fetch(url)
      .then((res) => res.json())
      .then((regions) => {
        const paysDeLaLoire = regions.paysDeLaLoire[0];
        img.setAttribute("src", paysDeLaLoire.pic);
        document.getElementById("region-name").innerHTML = paysDeLaLoire.title;
        document.getElementById("region-desc").innerHTML = paysDeLaLoire.info;
        document.getElementById("city").innerHTML =
          cityPres + paysDeLaLoire.biggestTown.name;
        const town = paysDeLaLoire.biggestTown.population;
        document.getElementById("population").innerHTML =
          popPres + town + "pers.";
      });
    try {
      const finalUrl = urlToFetch + "Nantes" + urlEnd;
      console.log(finalUrl);
      const response = await fetch(finalUrl);
      if (response.ok) {
        const json = await response.json();
        const actualTemp = json.current.temp_c;
        document.getElementById("weather").innerHTML = actualTemp + celsius;
      }
    } catch (err) {
      console.log(err);
    }
  }

  R11.addEventListener("click", showR11Info); //occitanie
  async function showR11Info() {
    fetch(url)
      .then((res) => res.json())
      .then((regions) => {
        const occitanie = regions.occitanie[0];
        img.setAttribute("src", occitanie.pic);
        document.getElementById("region-name").innerHTML = occitanie.title;
        document.getElementById("region-desc").innerHTML = occitanie.info;
        document.getElementById("city").innerHTML =
          cityPres + occitanie.biggestTown.name;
        const town = occitanie.biggestTown.population;
        document.getElementById("population").innerHTML =
          popPres + town + "pers.";
      });
    try {
      const finalUrl = urlToFetch + "Toulouse" + urlEnd;
      console.log(finalUrl);
      const response = await fetch(finalUrl);
      if (response.ok) {
        const json = await response.json();
        const actualTemp = json.current.temp_c;
        document.getElementById("weather").innerHTML = actualTemp + celsius;
      }
    } catch (err) {
      console.log(err);
    }
  }

  R12.addEventListener("click", showR12Info); //cote-d'azur
  async function showR12Info() {
    fetch(url)
      .then((res) => res.json())
      .then((regions) => {
        const provenceAlpesCoteDAzur = regions.provenceAlpesCoteDAzur[0];
        img.setAttribute("src", provenceAlpesCoteDAzur.pic);
        document.getElementById("region-name").innerHTML =
          provenceAlpesCoteDAzur.title;
        document.getElementById("region-desc").innerHTML =
          provenceAlpesCoteDAzur.info;
        document.getElementById("city").innerHTML =
          cityPres + provenceAlpesCoteDAzur.biggestTown.name;
        const town = provenceAlpesCoteDAzur.biggestTown.population;
        document.getElementById("population").innerHTML =
          popPres + town + "pers.";
      });
    try {
      const finalUrl = urlToFetch + "Marseille" + urlEnd;
      console.log(finalUrl);
      const response = await fetch(finalUrl);
      if (response.ok) {
        const json = await response.json();
        const actualTemp = json.current.temp_c;
        document.getElementById("weather").innerHTML = actualTemp + celsius;
      }
    } catch (err) {
      console.log(err);
    }
  }

  R13.addEventListener("click", showR13Info); //corse
  async function showR13Info() {
    fetch(url)
      .then((res) => res.json())
      .then((regions) => {
        const corse = regions.corse[0];
        img.setAttribute("src", corse.pic);
        document.getElementById("region-name").innerHTML = corse.title;
        document.getElementById("region-desc").innerHTML = corse.info;
        document.getElementById("city").innerHTML =
          cityPres + corse.biggestTown.name;
        const town = corse.biggestTown.population;
        document.getElementById("population").innerHTML =
          popPres + town + "pers.";
      });
    try {
      const finalUrl = urlToFetch + "Ajaccio" + urlEnd;
      console.log(finalUrl);
      const response = await fetch(finalUrl);
      if (response.ok) {
        const json = await response.json();
        const actualTemp = json.current.temp_c;
        document.getElementById("weather").innerHTML = actualTemp + celsius;
      }
    } catch (err) {
      console.log(err);
    }
  }
}
