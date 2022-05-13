const btnN = document.querySelector(".btnN");
const btnP = document.querySelector(".btnP");

const imgs = document.querySelectorAll(".img");
const imgsA = ["img/html.png", "img/css.png", "img/javascript.png", "img/java.png", "img/python.png", "img/django.png"];

let cycle = 0;

load(cycle);

btnN.addEventListener("click", ()=>{
    if(cycle < imgsA.length) cycle++;
    else cycle = 1;
    load(cycle);
});

btnP.addEventListener("click", ()=>{
    if(cycle > 0) cycle--;
    else cycle = 3;
    load(cycle);
});

function load(n){
    for(let i = 0; i < 3; i++){
        if(n < imgsA.length){
            imgs[i].src = imgsA[n];
        }else{
            n = 0;
            imgs[i].src = imgsA[n];
        }
        n++;
    }
}
