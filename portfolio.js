let who=document.domain;
let person='';

import * as roxane from './dribbble/roxaneDribbble.js';

/*if(who.indexOf("roxane")){
    person='roxane';
}*/

let contactsPerson=document.getElementById('contact')
contactsPerson.innerHTML=`<p>${roxane.name}`

let aProposPerson=document.getElementById('aPropos')
aProposPerson.innerHTML=`<p>${roxane.tel}`

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
