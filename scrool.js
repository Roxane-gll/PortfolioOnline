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

    window.scrollTo({
        top: divs.offsetTop,
        behavior: 'smooth'
    });
})