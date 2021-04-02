/*let who=document.domain;*/


import * as roxane from './dribbble/roxaneDribbble.js';
import * as marine from './dribbble/marineDribbble.js';

/*if(who.indexOf("roxane")){
    person='roxane';
}*/

let person=marine;

let contactsPerson=document.getElementById('contact')
contactsPerson.innerHTML=`<div><p>${person.name}</div>`

let aProposPerson=document.getElementById('aPropos')
aProposPerson.innerHTML=`<div><p>${person.aPropos}</div>`

const buttonsAllPage= document.querySelectorAll(".buttonInAllPage");

const modal=document.querySelector("#modal");

for ( let buttonAllPage of  buttonsAllPage) {
    buttonAllPage.addEventListener("click",()=>{
        if(buttonAllPage.value==='contacts'){
            buttonAllPage.nextElementSibling.classList.toggle("hiddenC")
            buttonAllPage.nextElementSibling.classList.toggle("visibleC")
            modal.classList.toggle("modalOn")
            modal.classList.toggle("modalOff")
            buttonAllPage.style.zIndex=2
            buttonAllPage.innerText='Close';
            buttonAllPage.value='contactClose';
        }else if(buttonAllPage.value==='contactClose'){
            buttonAllPage.nextElementSibling.classList.toggle("hiddenC")
            buttonAllPage.nextElementSibling.classList.toggle("visibleC")
            modal.classList.toggle("modalOn")
            modal.classList.toggle("modalOff")
            buttonAllPage.style.zIndex=1
            buttonAllPage.innerText='Contacts';
            buttonAllPage.value='contacts';
        }else if(buttonAllPage.value==='aPropos'){
            buttonAllPage.nextElementSibling.classList.toggle("hiddenP")
            buttonAllPage.nextElementSibling.classList.toggle("visibleP")
            modal.classList.toggle("modalOn")
            modal.classList.toggle("modalOff")
            buttonAllPage.style.zIndex=2
            buttonAllPage.innerText='Close';
            buttonAllPage.value='aProposClose';
        }else if(buttonAllPage.value==='aProposClose'){
            buttonAllPage.nextElementSibling.classList.toggle("hiddenP")
            buttonAllPage.nextElementSibling.classList.toggle("visibleP")
            modal.classList.toggle("modalOn")
            modal.classList.toggle("modalOff")
            buttonAllPage.style.zIndex=0
            buttonAllPage.innerText='À propos';
            buttonAllPage.value='aPropos';
        }
    })
}

$.ajax({
    url: 'https://api.dribbble.com/v2/user/shots?access_token='+person.accessToken,
    dataType: 'json',
    type: 'GET',
    success: function(data) {
        if (data.length > 0) {
            $.each(data.reverse(), function(i, val) {
                if(val.title.indexOf('#0')){
                    $('#projets').prepend(
                        '<div id="'+val.title.slice(0,-2)+'" class="carousel slide" data-ride="carousel">\n' +
                        '<ol class="carousel-indicators" id="'+val.title.slice(0,-2)+'-indicators">\n' +
                        '    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>\n' +
                        '</ol>\n'+
                        '<div class="carousel-inner" id="'+val.title.slice(0,-2)+'-inner">\n'+
                        '   <div class="carousel-item active">\n' +
                        '        <a class="shot" target="_blank" href="'+ val.html_url +'" title="' + val.title + '"><div class="title">' + val.title + '</div><img src="'+ val.images.hidpi +'"/></a>\n' +
                        '   </div>\n'+
                        '<a class="carousel-control-prev" href="#no-shots" role="button" data-slide="prev">\n' +
                        '       <span class="carousel-control-prev-icon" aria-hidden="true"><</span>\n' +
                        '       <span class="sr-only">Previous</span>\n' +
                        '   </a>\n' +
                        '   <a class="carousel-control-next" href="#no-shots" role="button" data-slide="next">\n' +
                        '       <span class="carousel-control-next-icon" aria-hidden="true"> > </span>\n' +
                        '       <span class="sr-only">Next</span>\n' +
                        '   </a>\n' +
                        '</div>\n'
                    )
                }else {
                    $('<div class="carousel-item">\n' +
                        '        <a class="shot" target="_blank" href="'+ val.html_url +'" title="' + val.title + '"><div class="title">' + val.title + '</div><img src="'+ val.images.hidpi +'"/></a>\n' +
                        '   </div>').appendTo('#'+val.title.slice(0,-2)+'-inner');
                    $('<li data-target="#carouselExampleIndicators" data-slide-to="'+val.title.slice(-1)+'"></li>').appendTo('#'+val.title.slice(0,-2)+'-indicators')

                }
            })
        }
        else {
            $('#projets').append(
                '<div id="no-shots" class="carousel slide" data-ride="carousel">\n' +
                '<div class="carousel-inner">\n'+
                '   <div class="carousel-item active">\n' +
                '        <p class="car">no shots</p>\n' +
                '   </div>\n'+
                '<a class="carousel-control-prev" href="#no-shots" role="button" data-slide="prev">\n' +
                '       <span class="carousel-control-prev-icon" aria-hidden="true"><</span>\n' +
                '       <span class="sr-only">Previous</span>\n' +
                '   </a>\n' +
                '   <a class="carousel-control-next" href="#no-shots" role="button" data-slide="next">\n' +
                '       <span class="carousel-control-next-icon" aria-hidden="true"> > </span>\n' +
                '       <span class="sr-only">Next</span>\n' +
                '   </a>\n' +
                '</div>\n'
            );
        }
    }
});


// API Variables

//Image width 800x600 (Animated)
// val.images.hidpi
//Image width 400x300
// val.images.normal
//Image width 200x150
// val.images.teaser
//Title
// val.title
//Description
// val.description
//URL
// val.html_url