let top=document.querySelector('#buttonToTop');
let projets=document.querySelector('#buttonToProjects')
let divs=document.querySelector('#projets')

top.addEventListener('click',function (){
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
})

projets.addEventListener('click',function (){

    divs.childNodes[0].scrollIntoView({behavior: "smooth"})
})