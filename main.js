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
$(document).ready(function(){
    $(".info-block").hide();
    
    
    $("#R1").click(function(){
        $(".info-block").fadeOut(300, function() {
            $(".grand-est").delay(300).fadeIn(300);
        })
    });
    
    $("#R2").click(function(){
        $(".info-block").fadeOut(300, function() {
            $(".hauts-de-france").delay(300).fadeIn(300);
        })
    });
    
    $("#R3").click(function(){
        $(".info-block").fadeOut(300, function() {
            $(".ile-de-France").delay(300).fadeIn(300);
        })
    });
    
    $("#R4").click(function(){
        $(".info-block").fadeOut(300, function() {
            $(".bourgogne").delay(300).fadeIn(300);
        })
    });

    $("#R5").click(function(){
        $(".info-block").fadeOut(300, function() {
            $(".centre-val").delay(300).fadeIn(300);
        })
    });
    
    $("#R6").click(function(){
        $(".info-block").fadeOut(300, function() {
            $(".auvergne").delay(300).fadeIn(300);
        })
    });
    
    $("#R7").click(function(){
        $(".info-block").fadeOut(300, function() {
            $(".aquitaine").delay(300).fadeIn(300);
        })
    });
    
    $("#R8").click(function(){
        $(".info-block").fadeOut(300, function() {
            $(".normandie").delay(300).fadeIn(300);
        })
    });

    $("#R9").click(function(){
        $(".info-block").fadeOut(300, function() {
            $(".bretagne").delay(300).fadeIn(300);
        })
    });
    
    $("#R10").click(function(){
        $(".info-block").fadeOut(300, function() {
            $(".pays-loire").delay(300).fadeIn(300);
        })
    });
    
    $("#R11").click(function(){
        $(".info-block").fadeOut(300, function() {
            $(".occitanie").delay(300).fadeIn(300);
        })
    });
    
    $("#R12").click(function(){
        $(".info-block").fadeOut(300, function() {
            $(".cote-azur").delay(300).fadeIn(300);
        })
    });

    $("#R13").click(function(){
        $(".info-block").fadeOut(300, function() {
            $(".corse").delay(300).fadeIn(300);
        })
    });
    
  
  });