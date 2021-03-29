/*let who=document.domain;*/


import * as roxane from './dribbble/roxaneDribbble.js';
import * as marine from './dribbble/marineDribbble.js';

/*if(who.indexOf("roxane")){
    person='roxane';
}*/

let person=roxane;

let contactsPerson=document.getElementById('contact')
contactsPerson.innerHTML=`<p>${person.name}`

let aProposPerson=document.getElementById('aPropos')
aProposPerson.innerHTML=`<p>${person.tel}`

const buttonsAllPage= document.querySelectorAll(".buttonInAllPage");

for ( let buttonAllPage of  buttonsAllPage) {
    buttonAllPage.addEventListener("click",()=>{
        if(buttonAllPage.value==='contacts'){
            buttonAllPage.nextElementSibling.classList.toggle("hiddenC")
            buttonAllPage.nextElementSibling.classList.toggle("visibleC")
            buttonAllPage.innerText='Close';
            buttonAllPage.value='contactClose';
        }else if(buttonAllPage.value==='contactClose'){
            buttonAllPage.nextElementSibling.classList.toggle("hiddenC")
            buttonAllPage.nextElementSibling.classList.toggle("visibleC")
            buttonAllPage.innerText='Contacts';
            buttonAllPage.value='contacts';
        }else if(buttonAllPage.value==='aPropos'){
            buttonAllPage.nextElementSibling.classList.toggle("hiddenP")
            buttonAllPage.nextElementSibling.classList.toggle("visibleP")
            buttonAllPage.innerText='Close';
            buttonAllPage.value='aProposClose';
        }else if(buttonAllPage.value==='aProposClose'){
            buttonAllPage.nextElementSibling.classList.toggle("hiddenP")
            buttonAllPage.nextElementSibling.classList.toggle("visibleP")
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
                $('#projets').prepend(
                    '<a class="shot" target="_blank" href="'+ val.html_url +'" title="' + val.title + '"><div class="title">' + val.title + '</div><img src="'+ val.images.hidpi +'"/></a>'
                )
            })
        }
        else {
            $('#projets').append('<p>No shots yet!</p>');
        }
    }
});
