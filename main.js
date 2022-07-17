/* 
Show / hide button 
-------------------
 */
/* const grandEstBtn = document.querySelector('#R1');
const hautsDeFranceBtn = document.querySelector('#R2');
const ileDeFrancetBtn = document.querySelector('#R3');
const burgogneBtn = document.querySelector('#R4');


const grandEstInfo = document.querySelector('.grand-est');
const hautsDeFranceInfo = document.querySelector('.hauts-de-france');
const ileDeFranceInfo = document.querySelector('.ile-de-France');
const bourgogneInfo = document.querySelector('.bourgogne');

grandEstBtn.addEventListener('click', () => {
    if(grandEstInfo.style.display === 'none') {
        grandEstInfo.style.display = 'block';
    } else {
        grandEstInfo.style.display = 'none';
    }
})

hautsDeFranceBtn.addEventListener('click', () => {
    if(hautsDeFranceInfo.style.display === 'none') {
        hautsDeFranceInfo.style.display = 'block';
    } else {
        hautsDeFranceInfo.style.display = 'none';
    }
})

ileDeFrancetBtn.addEventListener('click', () => {
    if(ileDeFranceInfo.style.display === 'none') {
        ileDeFranceInfo.style.display = 'block';
    } else {
        ileDeFranceInfo.style.display = 'none';
    }
})

burgogneBtn.addEventListener('click', () => {
    if(bourgogneInfo.style.display === 'none') {
        bourgogneInfo.style.display = 'block';
    } else {
        bourgogneInfo.style.display = 'none';
    }
})
 */

const returnBtn = document.querySelector('#return');
const info = document.querySelector('.info-block');
const headerInfo = document.querySelector('.start-info');

returnBtn.addEventListener('click', () => {
    info.style.display = 'none';
    headerInfo.style.display = 'block';
})

$(document).ready(function(){
    $(".info-block").hide();
    
    
    $("#R1").click(function(){
        $(".start-info").hide()
        $(".info-block").hide()
        $(".grand-est").fadeIn(500);
    });
    
    $("#R2").click(function(){
        $(".start-info").hide()
        $(".info-block").hide()
        $(".hauts-de-france").fadeIn(500);
    });
    
    $("#R3").click(function(){
        $(".start-info").hide()
        $(".info-block").hide()
        $(".ile-de-France").fadeIn(500);
    });
    
    $("#R4").click(function(){
        $(".start-info").hide()
        $(".info-block").hide()
        $(".bourgogne").fadeIn(500);
    });

    $("#R5").click(function(){
        $(".start-info").hide()
        $(".info-block").hide()
        $(".centre-val").fadeIn(500);
    });
    
    $("#R6").click(function(){
        $(".start-info").hide()
        $(".info-block").hide()
        $(".auvergne").fadeIn(500);
    });
    
    $("#R7").click(function(){
        $(".start-info").hide()
        $(".info-block").hide()
        $(".aquitaine").fadeIn(500);
    });
    
    $("#R8").click(function(){
        $(".start-info").hide()
        $(".info-block").hide()
        $(".normandie").fadeIn(500);
    });

    $("#R9").click(function(){
        $(".start-info").hide()
        $(".info-block").hide()
        $(".bretagne").fadeIn(500);
    });
    
    $("#R10").click(function(){
        $(".start-info").hide()
        $(".info-block").hide()
        $(".pays-loire").fadeIn(500);
    });
    
    $("#R11").click(function(){
        $(".start-info").hide()
        $(".info-block").hide()
        $(".occitanie").fadeIn(500);
    });
    
    $("#R12").click(function(){
        $(".start-info").hide()
        $(".info-block").hide()
        $(".cote-azur").fadeIn(500);
    });

    $("#R13").click(function(){
        $(".start-info").hide()
        $(".info-block").hide()
        $(".corse").fadeIn(500);
    });
    
  
  });
