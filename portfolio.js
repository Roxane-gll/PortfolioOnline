const buttonsAllPage= document.querySelectorAll(".buttonInAllPage");

const modalC=document.querySelector("#modalC");
const modalP=document.querySelector("#modalP");

for ( let buttonAllPage of  buttonsAllPage) {
    buttonAllPage.addEventListener("click",()=>{
        if(buttonAllPage.value==='contacts'){
            buttonAllPage.nextElementSibling.classList.toggle("hiddenC")
            buttonAllPage.nextElementSibling.classList.toggle("visibleC")
            modalC.classList.toggle("modalOn")
            modalC.classList.toggle("modalOff")
            buttonAllPage.style.zIndex=2
            buttonAllPage.innerText='X';
            buttonAllPage.value='contactClose';
        }else if(buttonAllPage.value==='contactClose'){
            buttonAllPage.nextElementSibling.classList.toggle("hiddenC")
            buttonAllPage.nextElementSibling.classList.toggle("visibleC")
            modalC.classList.toggle("modalOn")
            modalC.classList.toggle("modalOff")
            buttonAllPage.style.zIndex=1
            buttonAllPage.innerText='Contacts';
            buttonAllPage.value='contacts';
        }else if(buttonAllPage.value==='aPropos'){
            buttonAllPage.nextElementSibling.classList.toggle("hiddenP")
            buttonAllPage.nextElementSibling.classList.toggle("visibleP")
            modalP.classList.toggle("modalOn")
            modalP.classList.toggle("modalOff")
            buttonAllPage.style.zIndex=2
            buttonAllPage.innerText='X';
            buttonAllPage.value='aProposClose';
        }else if(buttonAllPage.value==='aProposClose'){
            buttonAllPage.nextElementSibling.classList.toggle("hiddenP")
            buttonAllPage.nextElementSibling.classList.toggle("visibleP")
            modalP.classList.toggle("modalOn")
            modalP.classList.toggle("modalOff")
            buttonAllPage.style.zIndex=0
            buttonAllPage.innerText='À propos';
            buttonAllPage.value='aPropos';
        }
    })
}

let vid=document.querySelector('#vid')
let anim=document.querySelector('#annimation')

vid.onended=function(){
    anim.classList.remove('on')
    anim.classList.add('off')
}