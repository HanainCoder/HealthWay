let scrollContaine=document.querySelector(".galery");
let backbt=document.getElementById("bac");
let nextb=document.getElementById("for");


nextb.addEventListener("click", ()=>{
    scrollContaine.scrollLeft +=900;
});
backbt.addEventListener("click",()=>{
    scrollContaine.scrollLeft-=900;
});