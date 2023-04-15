//mode sombre
let mode=document.querySelector(".mode");
let body=document.querySelector("body");
mode.addEventListener("click",function()
{
    body.classList.toggle('dark');
})
// appartion au défilement
const ratio=0.1
const options={
    root:null,
    rootMargin:'0px',
    threshold: ratio
}
const handleIntersect=function(entries,observer){
    entries.forEach(function(entry){
        if(entry.intersectionRatio>ratio){
            entry.target.classList.add('reveal-visible')
            observer.unobserve(entry.target)
        }
    });
}

document.documentElement.classList.add('reveal-loaded')
window.addEventListener('DOMContentLoaded',function(){
    const observer=new IntersectionObserver(handleIntersect,options)
    document.querySelectorAll("[class*='reveal']").forEach(function(r){
        observer.observe(r)
    })   
})
